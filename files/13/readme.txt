krok 1.
tsc -init

vytvori se tsconfig.json

2. index html script.ts script.js

4. tsc -w scrit.ts

5. pujdeme do tsconfig json a tam nastavime aktualni verzi javascriptu target es2020

6. tsc -w --project tsconfig.json

7. zalozime dalsi soubory message ts a secret ts, v tuto chvili se oba soubory prelozi do .js, cilem je aby se secret.ts neprekladalo do secret.js
tsconfig.json, pridame cast s files = seznam souboru ktere se maji prekladat do .js
"files": [
    "script.ts",
    "message.ts"
]

8. vytvorili jsme slozku src a umistnili vsechny soubory .ts do tsconfig.json jsme zadali toto nastaveni include exclude a predesle nastaveni files jsme zakomentovali. 
  // "files": [
  //   "src/script.ts",
  //   "src/message.ts"
  // ]
  "include": [
    "src"
  ],
  "exclude": [
    "src/secret.ts"
  ]

9. compiler options odkomentovat, dist, src a je to bomba
