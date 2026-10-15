#Python es un lenguaje de programacion de alto nivel, orientado a objetos, lenguaje interpretado 
#(lemguaje que traduce despues de la ejecucion, y es estricto)

#Varibales: son espacios de meomoria en los que voy a almacenar distintos tipos de datos.

#Cuatro tipos de datos simples: 
#    string: Cadena de texto, se escribe con "", '', """""", '''''',
#            Las comillas simples y dobles se utilizan en textos de una sola linea
#            Las comillas triples se utlizan en textos multiples
#            nombre = "Fernanda"
#    int: numeros enteros
#         34
#    float: numeros flotantes, punto decimal
#          89.55
#    Boleanos: falso o verdadero (aqui en python se escriben con mayusculas)
#              True / False

#nombre = "Fernanda"
#ch = "CH73"

#saludo = "Hola " + nombre + " Bienvenida a " + ch + "\n"
#print (saludo)

#EJERCICIO: Input / almacenar datos / Outout
nombre = input("¿Como te llamas?   ")
edad = input("¿Cuántos años tienes?   ")
ch = input("¿Cuál es tu cohort?   ")
dato_desconocido = input("Cuentame un dato muy secreto:   ")
dato_random = input("Cuentame un dato random:   ")

print("\nMi nombre es "+ nombre + ", tengo " + edad + " años. Estoy en el Cohort " + ch)
print("Un dato muy secreto es que " + dato_desconocido + " y un dato es random es " + dato_random+ ".\n")
