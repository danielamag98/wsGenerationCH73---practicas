//exportar
export function formatearMoneda(total){
return total.toLocaleString("es-MX", {
    style: "currency",  //dice que lo trate como dinero, con simbolog y dos decimales   
    currency: "MXN",    //indica el peso que quieres, y su simbolo
  });
}

//otra forma: 
//return "$" + total.toFixed(2);