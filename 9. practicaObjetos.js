//EJERCICIO:
//Crear objetos:

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.mostrarInfo = function(){
        return "El producto es " + this.nombre + " y cuesta $" + this.precio;
    };
}

//Crear tres producto:
const producto1 = new Producto("Labial", 150);
const producto2 = new Producto("Rimel", 100);
const producto3 = new Producto("Base", 250);

//Despues ejecutarlo:
console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
console.log(producto3.mostrarInfo());
