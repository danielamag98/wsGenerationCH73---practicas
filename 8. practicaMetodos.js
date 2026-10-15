/* Tema: Propiedades y Metodos
   * Aplicacion de Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#static_methods
   * Funcion anonima = son un tipo de funciones que se declaran sin definir un nombre de función (si no se colocan los () en el let, es anonima)
*/

/*
//Ejemplo 1:

const contact = {
    "forename": "Ash",
    "surname": "Springs",
    "fullName": function () {       // se crea una funcion dentro de la clave (funcion anonima)
        return "Ash Springs"
    }
}

/* 
//Los parentesis son necesarios para invocar la funcion fullname y obtener el valor de retorno. Si no se colocan los parentesis, 
//se obtiene la referencia a la funcion, en lugar del valor del retorno

let ashSpringsFullName = contact.fullName ();   //Aqui si se ejecuta la fucnion()
console.log(ashSpringsFullName);
*/


/*
//Otra forma es invocar la funcion fullname y obtener el valor de retorno es utilizando los parentesis () al final de la llamada a la funcion. 
// Esto es necesario para que se ejecute la funcion y se obtenga el valor de retorno

let ashSpringsFullName = contact.fullName;  // se puede modificar el (), si se quitan, no se ejecuta la funcion
console.log(ashSpringsFullName());
*/

/*agregar(ashSpringsFullName)
function agregar(funcionUno){
    console.info(funcionUno());
};  */

/*Funcionamiento de la clase Math
*Math es una herrameinta de matemáticas
*Random = numero al azar, menor a 1

funcionamientoMath();
function funcionamientoMath(){
    const numeroRandom = Math.random();
    console.info(numeroRandom);
    console.info(Math.PI);
    console.info(Math.random());
}
*/


/*
//Otros:

funcionStrings();
function funcionStrings(){   
    let nombre = "anita";
    console.info(nombre.toUpperCase());
    console.info(nombre.charAt(1));     //posicion del nombre, lo toma como un arreglo [1, 2, 3..]
    for (let i = 0; i <= nombre.length; i ++){
        console.log(nombre.charAt(i));
    }
    console.info(nombre.substring(0, 3)); //me trae pedacitos de lo que quiero imprimir
    console.info(nombre.substring(3, nombre.length)); 

    let numero2 = 2343;
    console.info(typeof numero2);
    console.info(typeof numero2.toString());
    numero2=numero2.toString();
    console.info(typeof numero2);
    console.error(numero2);
};
*/


/*
//This: Los metodos de un objeto pueden acceder a las propiedades de su propio objeto
let contact = {
    "forename": "Ash",
    "surname": "Springs",
    "fullName": function(){
        return "Hola " + this.forename + " " + this.surname    //como decir este objeto, un YO
    }
}
let ash_Springs = contact.fullName ();   
console.log(ash_Springs);
*/


/*
//Constructores: Definir un nuevo obejto... new <---check

function Object(p1){
    this.property = p1
}
let obj = new Object(arg)
*/



