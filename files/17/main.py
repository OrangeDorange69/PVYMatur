import random

# 1. Náhodné celé číslo od 1 do 10
cislo = random.randint(1, 10)
print(f"Hod kostkou: {cislo}")


# 2. Náhodný výběr ze seznamu
ovoce = ["jablko", "banán", "pomeranč", "kiwi"]
vyber = random.choice(ovoce)
print(f"Dnes si dám: {vyber}")


# 3. Zamíchání seznamu
cisla = [1, 2, 3, 4, 5]
random.shuffle(cisla)
print(f"Zamíchaná čísla: {cisla}")

# ---------------------------------------
import math


# 1. Číslo Pí
print(f"Pí je přibližně: {math.pi}")

# 2. Odmocnina (square root)
odmocnina = math.sqrt(81) 
print(f"Odmocnina z 81 je: {odmocnina}")


# 3. Zaokrouhlování nahoru (ceil) a dolů (floor)
print(math.ceil(4.2))   # Výsledek: 5
print(math.floor(4.9))  # Výsledek: 4

# ---------------------------------------
import time

print("Odpočítávání začíná...")
print("3")
time.sleep(1)  # Program počká 1 sekundu
print("2")
time.sleep(1)
print("1")
time.sleep(1)
print("Start!")

# ------------------------------------

import datetime


# Získání aktuálního času
ted = datetime.datetime.now()


print(f"Přesný čas: {ted}")


# Hezký výpis (Den. Měsíc. Rok)
# %d = den, %m = měsíc, %Y = rok
hezky_datum = ted.strftime("%d. %m. %Y")
print(f"Dnes je: {hezky_datum}")

# ------------------------------------

import json

# Máme data v Pythonu (slovník)
uzivatel = {
    "jmeno": "Petr",x
    "vek": 25,
    "admin": True
}


# Převod na text (string), který můžeme třeba uložit do souboru
textova_data = json.dumps(uzivatel)
print(textova_data)
# Výstup: {"jmeno": "Petr", "vek": 25, "admin": true}
