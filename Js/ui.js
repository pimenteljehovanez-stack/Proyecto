export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador_carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

contador = "";

export const mostrarMensaje = (mensaje) => {
  alert(mensaje);
};
