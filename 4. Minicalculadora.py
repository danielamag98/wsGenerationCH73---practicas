import datetime

print("\n---- RETO: Hacer una mini calculadora ----")
fecha = datetime.datetime.now()
print("Fecha: ", fecha)

#Forma 1 de realizar operaciones aritmeticas
num1 = int(input("\nEscribe tu primer numero: "))
num2 = int(input("Escribe tu segundo numero: "))

suma = num1 + num2
resta = num2 - num1
multi = num1 * num2
division = num1 / num2
divi = round(division, 2)

print("\nSuma: ", suma)
print("Resta: ", resta)
print("Multiplicacion: ", multi)
print("Division: ", divi, "\n")

print("==="*20)
#Forma 2 de realizar operaciones aritmeticas

def sumar (num1, num2):
    return num1 + num2
def restar ( num1, num2):
    return num1 - num2
def multiplicar (num1, num2):
    return num1*num2
def dividir (num1, num2):
    return num1/num2

print ("Suma: ", sumar(3,12))
print("Resta: ", restar(33,9))
print("Multiplicacion: ", multiplicar(21, 9))
print("Dividir: ", dividir(10,4))

def potencia(base, exponente):
    return base ** exponente
print("Potencia: ", potencia(2,3))
