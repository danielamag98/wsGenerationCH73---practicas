//Array de objetos
//recordar, si se ejecuta en local, no se puede poner prompt, sino en readline
// si es en navegador, si te lee prompt.

let productos = [
  { nombre: "Labial", precio: 150, disponible: true },
  { nombre: "Rímel", precio: 220, disponible: true },
  { nombre: "Base", precio: 300, disponible: false }
]; 

function mostrarProducto(nombre, precio){
    return nombre + " cuesta $" + precio;
}

/* Para VSC
const readline = require('readline-sync');  -->llamar a la libreria
let seleccion = Number(readline.question("Bienvenido a tienda.com\n Qué producto necesitas (1-3): \n 1. Labial\n 2. Rimel\n 3. Base\n"));
*/

//Prompt para el navegador
let seleccion = Number(prompt("Bienvenido a tienda.com\n Qué producto necesitas (1-3): \n 1. Labial\n 2. Rimel\n 3. Base\n"));
let producto = productos[seleccion - 1];  // le restamos 1, para que coincida con el producto de la lista
if (producto){
    console.log("Has elegido: ", producto.nombre);
    console.log("Precio $:    ", producto.precio);
    console.log("Mensaje:     ", mostrarProducto(producto.nombre, producto.precio));
}else{
    console.log("Opcion no valida!!")
}
