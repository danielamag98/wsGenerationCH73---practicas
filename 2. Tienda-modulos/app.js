//importa informacion de los otros dos y muestra el resumen

import {calcularSubtotal, calcularIVA} from "./calculo.js";
import {formatearMoneda} from "./formato.js";

function mostrarResumen(producto, total) {           //Funcion interna
  console.log(`${producto} - Total:  ${formatearMoneda(total)}`); //demostrar
}

const producto = {
  nombre: "Labial",
  precio: 150,
  cantidad: 2,
}

const subtotal = calcularSubtotal(producto.precio, producto.cantidad);
const total = subtotal + calcularIVA(subtotal);
mostrarResumen(producto.nombre, total);