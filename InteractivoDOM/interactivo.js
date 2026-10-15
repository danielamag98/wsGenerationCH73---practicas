
const titulo = document.getElementById("titulo");
titulo.textContent = "Proyecto 2.0";

const lista = document.querySelector("#proyectos");
const boton = document.querySelector("#agregar");

document.querySelector("#agregar").addEventListener("click", () => {
    const card = document.createElement("article");
    card.textContent = "Proyecto de portafolio";
    lista.append(card);
})

document.querySelector("#")


const titulo = document.querySelector("#titulo");
titulo.textContent = "Mis Proyectos";


const btnAgregar = document.querySelector("#agregar");
const contenedor = document.querySelector("#proyectos");


btnAgregar.addEventListener("click", () => {
    // Creamos el contenedor de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    // Le metemos el texto con el emoji y el botón de eliminar
    tarjeta.innerHTML = `
        <span>Mi proyecto 🎵</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

    // 3. Funcionalidad para eliminar la tarjeta al hacer clic en su botón
    const btnEliminar = tarjeta.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });

    // Añadimos la tarjeta al contenedor principal
    contenedor.appendChild(tarjeta);
});