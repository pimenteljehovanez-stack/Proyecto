import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card", "text-dark");

    const img = document.createElement("img");
    img.src = producto.img; // ya incluye Img/
    img.alt = producto.name;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.name;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.price}`;

    const boton = document.createElement("button");
    boton.classList.add("btn", "bg-secondary", "text-dark");
    boton.textContent = "Agregar al carrito";

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});
