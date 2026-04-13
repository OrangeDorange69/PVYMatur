document.addEventListener('DOMContentLoaded', () => {
    const fileTree = document.getElementById('file-tree');
    const tabsBar = document.getElementById('tabs-bar');
    const codeDisplay = document.getElementById('code-display');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const loadingStatus = document.getElementById('loading-status');

    // format: { name: string, language: string, id: string, path: string, content: string | null, rawUrl: string }
    const files = new Map();
    let openFiles = []; 
    let activeFileId = null;

    const GITHUB_REPO = 'OrangeDorange69/PVYMatur';

    const getLanguageClass = (filename) => {
        const ext = filename.split('.').pop().toLowerCase();
        const map = {
            'js': 'javascript', 'jsx': 'jsx', 'ts': 'typescript', 'tsx': 'tsx',
            'html': 'html', 'htm': 'html', 'css': 'css', 'json': 'json',
            'md': 'markdown', 'py': 'python', 'java': 'java', 'c': 'c',
            'cpp': 'cpp', 'h': 'c', 'hpp': 'cpp', 'cs': 'csharp', 'go': 'go',
            'rs': 'rust', 'php': 'php', 'rb': 'ruby', 'sh': 'bash', 'xml': 'xml',
            'yaml': 'yaml', 'yml': 'yaml', 'sql': 'sql', 'ps1': 'powershell'
        };
        return map[ext] || 'plaintext';
    };

    const loadGithubFiles = async () => {
        try {
            if (loadingStatus) loadingStatus.textContent = 'Hledám na GitHubu...';
            
            const repoRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`);
            if (!repoRes.ok) throw new Error('Repozitář nenalezen nebo API limit.');
            const repoData = await repoRes.json();
            const defaultBranch = repoData.default_branch || 'main';

            if (loadingStatus) loadingStatus.textContent = 'Načítám strom složek...';
            
            const treeRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/git/trees/${defaultBranch}?recursive=1`);
            const treeData = await treeRes.json();

            if (!treeData.tree) throw new Error('Nelze přečíst strukturu repozitáře.');

            const targetPrefix = 'files/';
            
            const targetFiles = treeData.tree.filter(item => item.path.startsWith(targetPrefix) && item.type === 'blob');

            if (targetFiles.length === 0) {
                if (loadingStatus) loadingStatus.textContent = 'Složka files/ je prázdná';
                renderFileTree();
                return;
            }

            for (const item of targetFiles) {
                const id = 'git_' + Math.random().toString(36).substring(2, 9);
                const displayPath = item.path.substring(targetPrefix.length);
                const name = displayPath.split('/').pop();

                files.set(id, {
                    id: id,
                    name: name,
                    path: displayPath,
                    language: getLanguageClass(name),
                    content: null,
                    rawUrl: `https://raw.githubusercontent.com/${GITHUB_REPO}/${defaultBranch}/${item.path}`
                });
            }

            if (loadingStatus) {
                loadingStatus.textContent = 'Propojeno s GitHubem';
                loadingStatus.style.background = 'rgba(0, 204, 122, 0.1)';
                loadingStatus.style.color = '#00cc7a';
            }

            renderFileTree();
            
            if (activeFileId === null && files.size > 0) {
                const firstId = Array.from(files.keys())[0];
                openFile(firstId);
            }

        } catch (err) {
            console.error(err);
            if (loadingStatus) {
                loadingStatus.textContent = 'Chyba: ' + err.message;
                loadingStatus.style.background = 'rgba(204, 0, 0, 0.1)';
                loadingStatus.style.color = '#ff4444';
            }
        }
    };

    const renderFileTree = () => {
        if (files.size === 0) {
            fileTree.innerHTML = '<div class="empty-state">Ve složce files/ nejsou nahrány (nebo načteny) žádné soubory z GitHubu.</div>';
            return;
        }

        fileTree.innerHTML = '';
        
        // Build hierarchy tree
        const treeBase = {};
        for (const file of files.values()) {
            const parts = file.path.split('/');
            let currentLevel = treeBase;
            
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                if (i === parts.length - 1) {
                    currentLevel[part] = file;
                } else {
                    if (!currentLevel[part]) {
                        currentLevel[part] = { _isFolder: true, children: {} };
                    }
                    currentLevel = currentLevel[part].children;
                }
            }
        }

        const renderNode = (node, container, depth = 0) => {
            const keys = Object.keys(node).sort((a, b) => {
                const isFolderA = node[a]._isFolder;
                const isFolderB = node[b]._isFolder;
                if (isFolderA && !isFolderB) return -1;
                if (!isFolderA && isFolderB) return 1;
                return a.localeCompare(b);
            });

            keys.forEach(key => {
                const item = node[key];
                const el = document.createElement('div');
                
                if (item._isFolder) {
                    el.className = 'folder-item';
                    el.style.padding = '4px 15px';
                    el.style.paddingLeft = `${15 + depth * 15}px`;
                    el.style.fontSize = '13px';
                    el.style.color = 'var(--text-main)';
                    el.style.cursor = 'pointer';
                    el.style.userSelect = 'none';
                    el.style.display = 'flex';
                    el.style.alignItems = 'center';
                    el.style.transition = 'background-color 0.1s';
                    
                    el.innerHTML = `
                        <span class="file-icon" style="margin-right:6px">📁</span>
                        <span>${key}</span>
                    `;
                    
                    el.onmouseover = () => el.style.backgroundColor = 'var(--bg-hover)';
                    el.onmouseout = () => el.style.backgroundColor = 'transparent';

                    container.appendChild(el);
                    
                    const childrenContainer = document.createElement('div');
                    childrenContainer.className = 'folder-children';
                    if (depth > 0) childrenContainer.style.display = 'none';
                    if (depth > 0) {
                        el.querySelector('.file-icon').textContent = '📁';
                    } else {
                        el.querySelector('.file-icon').textContent = '📂';
                    }

                    container.appendChild(childrenContainer);
                    
                    el.addEventListener('click', () => {
                        const isHidden = childrenContainer.style.display === 'none';
                        childrenContainer.style.display = isHidden ? 'block' : 'none';
                        el.querySelector('.file-icon').textContent = isHidden ? '📂' : '📁';
                    });
                    
                    renderNode(item.children, childrenContainer, depth + 1);
                } else {
                    const file = item;
                    el.className = 'file-item' + (activeFileId === file.id ? ' active' : '');
                    el.style.paddingLeft = `${15 + depth * 15}px`;
                    
                    let iconEmoji = '📝';
                    if (['javascript', 'typescript', 'jsx', 'tsx'].includes(file.language)) iconEmoji = '💛';
                    else if (file.language === 'html') iconEmoji = '🧡';
                    else if (file.language === 'css') iconEmoji = '💙';
                    else if (file.language === 'json') iconEmoji = '⚙️';
                    else if (file.language === 'python') iconEmoji = '🐍';
                    else if (['java', 'csharp', 'cpp'].includes(file.language)) iconEmoji = '☕';
                    else if (file.language === 'markdown') iconEmoji = '📘';

                    el.innerHTML = `
                        <span class="file-icon">${iconEmoji}</span>
                        <span>${key}</span>
                    `;
                    
                    el.addEventListener('click', () => openFile(file.id));
                    container.appendChild(el);
                }
            });
        };

        renderNode(treeBase, fileTree);
    };

    const renderTabs = () => {
        tabsBar.innerHTML = '';
        openFiles.forEach(id => {
            const file = files.get(id);
            if (!file) return;

            const tab = document.createElement('div');
            tab.className = 'tab' + (activeFileId === id ? ' active' : '');
            tab.innerHTML = `
                <span style="margin-right: 5px;" title="${file.path}">${file.name}</span>
                <span class="tab-close" data-id="${id}">✕</span>
            `;
            
            tab.addEventListener('click', (e) => {
                if (!e.target.classList.contains('tab-close')) {
                    setActiveFile(id);
                }
            });

            tabsBar.appendChild(tab);
        });

        document.querySelectorAll('.tab-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeFile(e.target.getAttribute('data-id'));
            });
        });
    };

    const openFile = async (id) => {
        if (!openFiles.includes(id)) {
            openFiles.push(id);
        }
        
        const fileObj = files.get(id);
        
        if (fileObj.content === null) {
            try {
                codeDisplay.textContent = "Načítám kód z GitHubu...";
                codeDisplay.className = "language-plaintext";
                
                const res = await fetch(fileObj.rawUrl);
                if (!res.ok) throw new Error('Nelze stáhnout soubor');
                fileObj.content = await res.text();
            } catch (err) {
                fileObj.content = "// Chyba při stahování souboru z GitHubu: " + err.message;
            }
        }
        
        setActiveFile(id);
    };

    const closeFile = (id) => {
        openFiles = openFiles.filter(fid => fid !== id);
        if (activeFileId === id) {
            if (openFiles.length > 0) {
                setActiveFile(openFiles[openFiles.length - 1]);
            } else {
                activeFileId = null;
                updateDisplay();
            }
        } else {
            renderTabs();
        }
    };

    const setActiveFile = (id) => {
        activeFileId = id;
        updateDisplay();
    };

    const updateDisplay = () => {
        renderFileTree();
        renderTabs();

        if (activeFileId && files.has(activeFileId)) {
            const file = files.get(activeFileId);
            
            const breadcrumbParts = file.path.split('/');
            breadcrumbs.innerHTML = breadcrumbParts.map(p => `<span class="breadcrumb-item" style="color:var(--text-main)">${p}</span>`).join('<span style="margin: 0 8px; color:var(--text-muted)">/</span>');

            const actualCode = file.content === null ? "Načítám kód z GitHubu..." : file.content;
            codeDisplay.className = `language-${file.language}`;
            codeDisplay.textContent = actualCode;
            
            if (window.Prism && file.content !== null) {
                Prism.highlightElement(codeDisplay);
            }
        } else {
            breadcrumbs.innerHTML = `<span class="breadcrumb-item">Žádný soubor není vybrán</span>`;
            codeDisplay.className = "language-plaintext";
            codeDisplay.textContent = "// Klikni vlevo na soubor – automaticky se načte tvůj repozitář OrangeDorange69/PVYMatur";
            if (window.Prism) {
                Prism.highlightElement(codeDisplay);
            }
        }
    };

    loadGithubFiles();
});
