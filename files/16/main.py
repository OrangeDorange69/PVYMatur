# Open file from different folder
file = open('myfiles/example.txt', 'r')

# Read content
content = file.read()

# Print content
print(content)

# Close the file
file.close()

# Writing to the file by context manager
with open('myfiles/example.txt', 'w') as file:
    file.write('David\n')
    file.write('Davidos')

# Append mode
with open('myfiles/example.txt', 'a') as file:
    file.write('Line 2')

with open('myfiles/example.txt', 'r') as file:
    content = file.read()
    print(content)

# -- part 2 --
with open('myfiles/negr.txt', 'w') as file:
    file.write('Stale nejsom umely\nGG')
    file.write('umely nega')
    file.write('temmnota')

print('Method 1: readline()')
with open('myfiles/negr.txt', 'r') as file:
    print(file.readline())
    print(file.readline())

print('Method 2: readlines()')
with open('myfiles/negr.txt', 'r') as file:
    lines =  file.readlines()
    print(lines)


print('Method 3: iterování na souboru')
with open('myfiles/negr.txt', 'r') as file:
    for line in file:
        print(line.strip()) #strip da pryc \n


# relativní cesta
with open('myfiles/absolutni.txt', 'w') as file:
    file.write('kokotpica')

# absolutní cesta
with open('C:/Users/janma/Desktop/PVY Projekty/2025/16/myfiles/absolutni.txt', 'a') as file:
    file.write('official kokotpica')

#prace s chybami
try:
    with open('myfiles/missing.txt', 'r') as file:
        content =  file.read()
        print(content)
except FileNotFoundError:
    print('File not found')
