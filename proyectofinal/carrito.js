// Mostrar productos en el carrito
const requirements = JSON.parse(localStorage.getItem("purchaseRequirements"));
const deliveryCost = requirements.deliveryType === "domicilio" ? 15000 : 0;

// Cálculo del total de la compra
function calculateTotal() {
  const subtotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );
  const total = subtotal + deliveryCost;
  document.getElementById("totalCost").textContent = `$${total.toLocaleString(
    "es-CO"
  )}`;
}

// Validación en la confirmación de compra
function confirmPurchase() {
  const totalQuantity = carrito.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  if (totalQuantity > requirements.maxItems) {
    alert("Excede la cantidad máxima de productos permitida.");
    return;
  }
  if (subtotal > requirements.budget) {
    alert("El total de la compra excede el presupuesto máximo.");
    return;
  }
}
function eliminarProducto(idProducto) {
  // Obtener el carrito desde localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Filtrar el carrito para eliminar el producto con el id correspondiente
  carrito = carrito.filter((item) => item.id !== idProducto);

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Llamar a la función que actualiza la vista del carrito
  mostrarCarrito();
}

function mostrarCarrito() {
  // Obtener el carrito desde localStorage
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  // Referencia a la tabla donde se mostrarán los productos
  const tablaCarrito = document.getElementById("carrito-tabla").querySelector("tbody");

  // Limpiar la tabla antes de mostrar los nuevos datos
  tablaCarrito.innerHTML = "";

  let totalCompra = 0;

  carrito.forEach(({ id, cantidad }) => {
    // Buscar el producto correspondiente por ID
    const producto = productos.find((p) => p.id === id);
    const totalProducto = producto.precio * cantidad;
    totalCompra += totalProducto;

    // Crear una nueva fila para la tabla con los detalles del producto
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><img src="${producto.imagen}" width="50"></td>
      <td>${producto.nombre}</td>
      <td>${producto.marca}</td>
      <td>$${producto.precio}</td>
      <td>${cantidad}</td>
      <td>$${totalProducto}</td>
      <td><button onclick="eliminarProducto(${id})">Eliminar</button></td>
    `;
    tablaCarrito.appendChild(fila);
    console.log(carrito);
  });

  // Actualizar los totales de la compra
  document.getElementById("total-productos").innerText = `Productos: ${carrito.length}`;
  const cargoDomicilio = carrito.length > 0 ? 15000 : 0;
  document.getElementById("cargo-domicilio").innerText = `Domicilio: $${cargoDomicilio}`;
  document.getElementById("total-compra").innerText = `Total Compra: $${(totalCompra + cargoDomicilio).toLocaleString("es-CO")}`;
}



// Ejecutar compra con validación de tarjeta y promesa de confirmación
function ejecutarCompra() {
  const tarjetaFormulario = document.getElementById("tarjeta-formulario");
  const campos = tarjetaFormulario.querySelectorAll("input");
  // (Lógica para obtener y validar datos del formulario de tarjeta)
  for (let campo of campos) {
    if (campo.value.trim() === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return; // Detener la ejecución de la función si algún campo está vacío
    }
  }
  // Validación de condiciones de compra con una promesa simulada
  const promesaCompra = new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;
    setTimeout(() => {
      // Validaciones (puedes personalizarlas según los requerimientos)
      const error = false; // Cambia esta variable según la validación

      if (error) {
        reject("Error en la compra.");
      } else {
        resolve("Compra completada con éxito.");
      }
    }, randomDelay);
  });

  promesaCompra
    .then((mensaje) => {
      alert(mensaje);
      localStorage.removeItem("carrito");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(`Error: ${error}`);
    });
}

// Inicialización
window.onload = mostrarCarrito;
function toggleCVV() {
  const cvvInput = document.getElementById("codigo-seguridad");
  const type = cvvInput.type === "password" ? "text" : "password"; // Cambia el tipo entre password y text
  cvvInput.type = type;
}
function limpiarFormulario() {
  document.getElementById("tarjeta-formulario").reset();
}
function limpiarCarrito() {
    localStorage.removeItem("carrito"); // Elimina solo el carrito
    alert("Carrito limpiado.");
  }