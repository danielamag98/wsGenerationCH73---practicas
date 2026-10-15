//Prototipos: Producto.prototype()
//Class:  describe como seran los objetos que crearemos despues.
//El Constructor esta dentro de la clase

//Crear mi clase:
class Producto{
    constructor (nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    mostrarInfo(){
        //Aqui puedo ejecutar un console.log con un if/else, pero ya no aplico el return
        //Modificar el el atributo y hacerlo bolenao, es decir, mi this.disponible (es disponible), por lo que hay que == true o false en if/else
        return "El producto " + this.nombre + " cuesta $" + this.precio + ". Este producto " + this.disponible + "\n";
    }
}

//Crear prodcutos --> instancia:
const labial = new Producto ("labial", 250, "esta disponible");
const rimel = new Producto("rimel", 120, "esta disponible");
const base = new Producto("base", 320, "no esta disponible");

console.log(labial.mostrarInfo());
console.log(rimel.mostrarInfo());
console.log(base.mostrarInfo());

//Impresion de informacion tambien solo con --> labial.mostrarInfo()
//labial.mostrarInfo();
//rimel.mostrarInfo();
//base.mostrarInfo();


//Otra forma de hacerlo: 
/*
//Guardarlos en un array
const productos = [labial, rimel, base];

//Imprimir su info
productos.forEach(producto => {
    console.log(producto.mostrarInfo());
});
*/

/*
//Herencia: compartir, reutilizar una base y agregar o modificar caracteristicas
//Se ejecuta con extends, y se usa super(..) para llamar al constructor de la class base
class Prodcuto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Maquillaje extends Prodcuto {  //reutilizamos la funcion de arriba
    constructor(nombre, precio, tono){  //se pone el constructor que queremos
        super(nombre, precio);   //se llama el constructor base
        this.tono = tono;  // se agrega el atributo
    }
}
*/