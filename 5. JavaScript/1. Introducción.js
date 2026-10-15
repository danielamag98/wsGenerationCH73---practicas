let datos = {
    nombre: "Dani",
    edad: 28,
    estudio: "lic. fisioterapia",
    pareja: "hector bb",
};

let nombre = datos["nombre"];
let edad = datos["edad"]
let estudio = datos["estudio"];
let pareja = datos["pareja"];

 let frase = `yo soy ${nombre} <br>
        tengo ${edad} años <br>
        y estudie ${estudio} en la UD campus Morelia <br>
        y mi hermoso novio se llama ${pareja}`;

document.getElementById("resultado").innerHTML = frase;