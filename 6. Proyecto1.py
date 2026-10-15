

#Inicializar el juego -----------------------------------
def new_game():
    respuestas = []
    respuestas_correctas = 0
    pregunta_num = 0  

    #Recorre el numero de pregunta, del diccionario preguntas
    for key in preguntas:     
        print("-----"*10)    
        print(key)

        #Mostrar cada una de las respuestas
        for i in opciones[pregunta_num]:    
            print(i)

        respuesta = input("Ingresa (A, B, C, D): ").upper()
        respuestas.append(respuesta)

        respuestas_correctas += check_answer(preguntas.get(key), respuesta)
        pregunta_num += 1

    display_score(respuestas_correctas, respuesta)

#Verificar los datos seleccionados ----------------------
def check_answer(respuesta_correcta, respuesta):
    if respuesta_correcta == respuesta:
        print("CORRECTO")
        return 1
    else:
        print("INCORRECTO")
        return 0

#Puntuaje obtenido --------------------------------------
def display_score(respuestas_correctas, respuestas):
    print("-----"*10)
    print("RESULTADO")
    print("-----"*10)

    print("Respuestas Correctas: ", end=" ")
    for i in preguntas:
        print(preguntas.get(i), end=" ")
    print()

    print("Tus respuestas: ", end=" ")
    for i in respuestas:
        print(i, end=" ")
    print()

    puntaje = int((respuestas_correctas/len(preguntas))*100)
    print("Puntaje: " + str(puntaje) + '%')

#Si el jugador quiere jugar de nuevo o no ---------------
def play_again():
    respuesta = input("Quiere jugar de nuevo? (SI o NO): ").upper()

    if respuesta == 'SI':
        return True
    else:
        return False


#Crear diccionario ---------------------------------------
preguntas = {
    '¿Qué idioma se habla en Brasil? ': 'A',
    '¿Cuál es el oceano mas grande del mundo? ': 'B',
    '¿Cual es la estrella mas cercana a la Tierra? ': 'C',
    '¿Cual es el segundo pais mas grande del mundo? ': 'A' 
}

#Esto es un arrelgo de opciones, matriz dentro de otra matriz
#Arreglo / array: es una estructura de datos que almacena una coleccion de elementos del mismo tipo
opciones = [['A. Portuges', 'B. Español', 'C. Brasilero', 'D. Ingles'],
            ['A. Atlantico', 'B. Pacifico', 'C. Artico', 'D. Ingles'],
            ['A. La luna', 'B. Alfa centauri', 'C. El sol', 'D. Ninguna'],
            ['A. Canada', 'B. Rusia', 'C. EE.UU', 'D. China']]

new_game()

while play_again():
    new_game()

print("Adios!!")