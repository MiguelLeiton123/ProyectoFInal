// index.js

function startPurchase() {
  const buyerName = document.getElementById("buyerName").value;
  const budget = parseInt(document.getElementById("budget").value, 10);
  const maxItems = parseInt(document.getElementById("maxItems").value, 10);
  const address = document.getElementById("address").value;
  const deliveryType = document.getElementById("deliveryType").value;
  const errorMessage = document.getElementById("errorMessage");

  // Validaciones
  if (!buyerName || buyerName.length > 20) {
    errorMessage.textContent =
      "Ingrese un nombre válido (máximo 20 caracteres).";
    return;
  }
  if (isNaN(budget) || budget <= 0) {
    errorMessage.textContent =
      "Ingrese un presupuesto válido (número positivo).";
    return;
  }
  if (isNaN(maxItems) || maxItems <= 0 || maxItems > 20) {
    errorMessage.textContent =
      "Ingrese una cantidad de artículos válida (1-20).";
    return;
  }
  if (!address) {
    errorMessage.textContent = "Ingrese una dirección de entrega.";
    return;
  }

  // Guardar datos en localStorage
  localStorage.setItem(
    "purchaseRequirements",
    JSON.stringify({
      buyerName,
      budget,
      maxItems,
      address,
      deliveryType,
    })
  );

  // Redirigir a la página de productos
  window.location.href = "productos.html";
}
function limpiarCarrito() {
  localStorage.removeItem("carrito");
  alert("Carrito limpiado.");
}
