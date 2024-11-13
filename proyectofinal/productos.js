let productosPorPagina = 15; // Productos cargados por cada scroll
let paginaActual = 0;
let cargando = false;

// Inicialización de productosFiltrados (copia de productos original)
let productosFiltrados = [...productos]; // Si no hay filtros, se cargan todos los productos
let filtros = [];

// Referencias a elementos HTML
const listaProductos = document.getElementById("products-list");
const detalleProducto = document.getElementById("detail-content");
const requirements = JSON.parse(localStorage.getItem("purchaseRequirements"));

function actualizarIconoCarrito() {
  const carritoIcono = document.getElementById("carrito-icono");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carritoIcono.innerText = `🛒 ${carrito.length}`;
}

// Cargar productos con scroll infinito
function cargarProductos() {
  if (cargando) return;
  cargando = true;

  // Obtener productos de los productos filtrados
  const productosMostrar = productosFiltrados.slice(
    paginaActual * productosPorPagina,
    (paginaActual + 1) * productosPorPagina
  );

  productosMostrar.forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.className = "producto-item";
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
      <h3>${producto.nombre}</h3>
      <p>Marca: ${producto.marca}</p>
      <p>Precio: $${producto.precio}</p>
      <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
    `;
    listaProductos.appendChild(productoDiv);
  });

  paginaActual++;
  cargando = false;

  // Mostrar mensaje cuando no hay más productos
  if (paginaActual * productosPorPagina >= productosFiltrados.length) {
    const mensaje = document.createElement("p");
    mensaje.innerText = "No hay más productos para mostrar.";
    listaProductos.appendChild(mensaje);
    window.removeEventListener("scroll", manejarScroll);
  }
}

// Función para mostrar detalles de un producto
function verDetalle(idProducto) {
  const producto = productos.find((p) => p.id === idProducto);

  if (producto) {
    detalleProducto.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" width="200">
      <h3>${producto.nombre}</h3>
      <p><strong>ID:</strong> ${producto.id}</p>
      <p><strong>Marca:</strong> ${producto.marca}</p>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p><strong>Categoría:</strong> ${producto.categoria}</p>
      <p><strong>Descripción:</strong> ${producto.descripcion}</p>
      <label>Cantidad:
        <input type="number" id="cantidadProducto" min="1" value="1">
      </label>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    `;
  }
}


// Función para agregar producto al carrito
function agregarAlCarrito(idProducto) {
  const cantidad = parseInt(document.getElementById("cantidadProducto").value);

  if (cantidad <= 0 || isNaN(cantidad)) {
    alert("Por favor ingrese una cantidad válida.");
    return;
  }
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ id: idProducto, cantidad });
  
  // Guarda el carrito actualizado en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  // Actualiza el ícono del carrito
  actualizarIconoCarrito();
  
  // Muestra un mensaje de confirmación
  alert("Producto agregado al carrito");

  // Muestra el carrito en la consola
  console.log(carrito);
}




// Limpiar filtros y cargar productos completos
function limpiarFiltros() {
  filtros = [];
  productosFiltrados = [...productos]; // Restablecer productos
  paginaActual = 0; // Resetear la página a la 0
  listaProductos.innerHTML = ""; // Limpiar la lista de productos
  cargarProductos(); // Cargar todos los productos de nuevo
}

// Actualizar las opciones de filtro según el tipo seleccionado
function actualizarOpcionesFiltro() {
  const filterType = document.getElementById("filter-type").value;
  const filterValueSelect = document.getElementById("filter-value");
  filterValueSelect.innerHTML = ""; // Limpiar opciones previas

  let opciones = [];
  if (filterType === "categoria") {
    opciones = [...new Set(productos.map((p) => p.categoria))];
  } else if (filterType === "marca") {
    opciones = [...new Set(productos.map((p) => p.marca))];
  } else if (filterType === "precio") {
    opciones = ["Menor a 200000", "Entre 200000 y 500000", "Mayor a 500000"];
  }

  opciones.forEach((opcion) => {
    const opt = document.createElement("option");
    opt.value = opcion;
    opt.textContent = opcion;
    filterValueSelect.appendChild(opt);
  });
}

// Añadir filtro a la lista de filtros activos
function agregarFiltro() {
  const filterType = document.getElementById("filter-type").value;
  const filterValue = document.getElementById("filter-value").value;

  if (filterType && filterValue) {
    filtros.push({ type: filterType, value: filterValue });
    aplicarFiltros();
  }
}

// Aplicar filtros sobre los productos
function aplicarFiltros() {
  // Reiniciar los productos filtrados y la página
  paginaActual = 0;
  listaProductos.innerHTML = ""; // Limpiar la lista de productos antes de mostrar los filtrados

  // Filtrar los productos según los filtros seleccionados
  productosFiltrados = productos.filter((producto) => {
    return filtros.every((filtro) => {
      switch (filtro.type) {
        case "categoria":
          return producto.categoria === filtro.value;
        case "marca":
          return producto.marca === filtro.value;
        case "precio":
          switch (filtro.value) {
            case "Menor a 200000":
              return producto.precio < 200000;
            case "Entre 200000 y 500000":
              return producto.precio >= 200000 && producto.precio <= 500000;
            case "Mayor a 500000":
              return producto.precio > 500000;
            default:
              return true;
          }
        default:
          return true;
      }
    });
  });

  // Si no hay productos filtrados, mostrar mensaje
  if (productosFiltrados.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.innerText =
      "No se encontraron productos que coincidan con los filtros aplicados.";
    listaProductos.appendChild(mensaje);
  }

  // Volver a cargar los productos filtrados con la paginación reiniciada
  cargarProductos();
}

// Manejador de scroll para activar la carga infinita
function manejarScroll() {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    !cargando
  ) {
    cargarProductos();
  }
}

// Inicialización
window.onload = () => {
  cargarProductos();
  actualizarIconoCarrito();
};

window.addEventListener("scroll", manejarScroll);

function limpiarCarrito() {
  localStorage.removeItem("carrito"); // Elimina solo el carrito
  alert("Carrito limpiado.");
}
function completarCompra() {
  window.location.href = "carrito.html";
}
