""" 
#Ejemplos clase
calificacion = 89

if calificacion >= 90:
    print ("Excelente\n")
elif calificacion >= 70:
    print ("Aprobado\n")
else:
    print ("Reprobado\n")
---------------------------------
for i in range (0,6):
    print("Hola")

for i in range(3):
    print("Hi")

"""

#Ejercicio. Crea un programa que muestre los numero del 1 al 10
print("DETERMINAR SI EL NUMERO ES GRANDE O PEQUEÑO")
for i in range (1, 11):
    if i < 5:
        print(i, "= Numero pequeño")
    elif i == 5: 
        print(i, "= Llegamos a 5")
    else:
        print(i, "= Numero grande")

print("\n RETO EXTRA")
for i in range (10, 0, -1):
    print(i)

"""
#Otra forma de hacerlo 

for i in range(1,11):
    if i < 5:
        print(f"{i} = Numero pequeño")
    elif i == 5: 
        print(f"{i} = Llegamos a 5")
    else:
        print(f"{i}= Numero grande")
"""