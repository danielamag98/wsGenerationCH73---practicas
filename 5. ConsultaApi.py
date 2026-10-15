import requests

respuesta = requests.get("http://jsonplaceholder.typicode.com/posts/1")
publicacion = respuesta.json()

#print(publicacion) ----> Imprime todo el contenido
print("Tittle:", publicacion["title"])
print("Body:", publicacion["body"])