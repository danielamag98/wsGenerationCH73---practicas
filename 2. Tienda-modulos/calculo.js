//exporta valores a main
export function calcularSubtotal(precio, cantidad){
    return precio * cantidad;
}

export function calcularIVA(subtotal){
    return subtotal * 0.16;
}