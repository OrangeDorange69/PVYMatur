print('Hello World!')

# komentář

# datové typy
# text - string
"divad"
'David'

#integer 
100
3000
5000

#float
5.12
5.523

#boolean
True
False

# list
[5, 12, 4, 5]
['jedna', 'dva', 'tři']
[True,False,False,True]


#dictionary
{
    'jmeno': 'divad',
    'age': 15,
    'isStudent': True,
    'dicksize': 5.15
}

#None
None

#tuple
negrnegrnegr = (12, 'giggár', True, 5)

print(negrnegrnegr[0])

print('v pythonu muzeme pouzit print: print("negr")')

#escapování
#\n novy radek
#\t tabulator

print('první řádek\npico')
print('try me\tnigger')
print('it\'s new')
print('toto je lomítko \\')

#promněnné
name = 'David'
age = 18
negr_negr = True

#pravidla
#nazvy anglicky
#popisne nazvy
#bezmezer
#mala pismena
#vice jak jedno slovo podtrzitko
#nesmi zacinat cislem
#nepouzivat specialni symboly ($, !)

result_1 = 1+3
result_2 = 10-2
result_3 = 5*8
result_4 = 10 / 2

print(result_1, result_2, result_3, result_4)

#vypisování
first_name = 'Harry'
second_name = 'Novák'
print('Your name is' + first_name + ' and ' + second_name)
print(f'Your name is {first_name} and {second_name}')

#input - vzdy vraci text/string
getname = input('What is your name?\n')
print(getname)

age = int(input('Jakej je vek pico? \n'))

#podminky

if 5 > 0:
    print('pravda')
else:
    print('nepravda pico lzes jak cyp')


if age >= 18 and age < 65:
    print('Dospely')
elif age >= 65:
    print('duchodce')
else:
    print('nedospely')

# cyklus
word = 'python'

for letter in word:
    print(letter)

students = ['Jana', 'David', 'peter']

for first_name in students:
    print(first_name)