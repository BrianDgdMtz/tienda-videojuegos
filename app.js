// -------------------- ESTADO GLOBAL --------------------
var carritoVisible = false;

// -------------------- ARRANQUE SEGURO --------------------
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

// -------------------- SETUP DOM --------------------
function ready() {
  // ----- CARRITO -----
  // Eliminar item
  var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
  for (var i = 0; i < botonesEliminarItem.length; i++) {
    botonesEliminarItem[i].addEventListener('click', eliminarItemCarrito);
  }

  // Sumar cantidad
  var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
  for (var j = 0; j < botonesSumarCantidad.length; j++) {
    botonesSumarCantidad[j].addEventListener('click', sumarCantidad);
  }

  // Restar cantidad
  var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
  for (var k = 0; k < botonesRestarCantidad.length; k++) {
    botonesRestarCantidad[k].addEventListener('click', restarCantidad);
  }

  // Agregar al carrito
  var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
  for (var m = 0; m < botonesAgregarAlCarrito.length; m++) {
    botonesAgregarAlCarrito[m].addEventListener('click', agregarAlCarritoClicked);
  }

  // Botón pagar (puede no existir en esta vista)
  var pagarBtn = document.getElementsByClassName('btn-pagar')[0];
  if (pagarBtn) {
    pagarBtn.addEventListener('click', pagarClicked);
  }

  // ----- LOGIN / REGISTER -----
  var registerLink = document.getElementById('register-link');
  var loginLink = document.getElementById('login-link');
  var loginDiv = document.getElementById('login-right');
  var registerDiv = document.getElementById('register-right');

  if (registerLink && loginLink && loginDiv && registerDiv) {
    registerLink.addEventListener('click', function (event) {
      event.preventDefault();
      loginDiv.classList.add('slide-left');

      function handleLoginAnimationEnd() {
        loginDiv.style.display = 'none';
        registerDiv.style.display = 'block';
        registerDiv.classList.add('slide-right');
        loginDiv.classList.remove('slide-left');
        loginDiv.removeEventListener('animationend', handleLoginAnimationEnd);
      }
      loginDiv.addEventListener('animationend', handleLoginAnimationEnd, { once: true });

      function handleRegisterAnimationEnd() {
        registerDiv.classList.remove('slide-right');
        registerDiv.removeEventListener('animationend', handleRegisterAnimationEnd);
      }
      registerDiv.addEventListener('animationend', handleRegisterAnimationEnd, { once: true });
    });

    loginLink.addEventListener('click', function (event) {
      event.preventDefault();
      registerDiv.classList.add('slide-left-back');

      function handleRegisterAnimationEnd() {
        registerDiv.style.display = 'none';
        loginDiv.style.display = 'block';
        loginDiv.classList.add('slide-right-back');
        registerDiv.classList.remove('slide-left-back');
        registerDiv.removeEventListener('animationend', handleRegisterAnimationEnd);
      }
      registerDiv.addEventListener('animationend', handleRegisterAnimationEnd, { once: true });

      function handleLoginAnimationEnd() {
        loginDiv.classList.remove('slide-right-back');
        loginDiv.removeEventListener('animationend', handleLoginAnimationEnd);
      }
      loginDiv.addEventListener('animationend', handleLoginAnimationEnd, { once: true });
    });
  }
}

// -------------------- LÓGICA CARRITO --------------------
function pagarClicked() {
  alert('Gracias por la compra');
  var carritoItems = document.getElementsByClassName('carrito-items')[0];
  if (carritoItems) {
    while (carritoItems.firstChild) {
      carritoItems.removeChild(carritoItems.firstChild);
    }
  }
  actualizarTotalCarrito();
  ocultarCarrito();
}

function agregarAlCarritoClicked(event) {
  var item = event.target.parentElement;
  var titulo = item.getElementsByClassName('titulo-item')[0]?.innerText || '';
  var precio = item.getElementsByClassName('precio-item')[0]?.innerText || '$0';
  var imagenSrc = item.getElementsByClassName('img-item')[0]?.src || '';
  agregarItemAlCarrito(titulo, precio, imagenSrc);
  hacerVisibleCarrito();
}

function hacerVisibleCarrito() {
  carritoVisible = true;
  var carrito = document.getElementsByClassName('carrito')[0];
  if (carrito) {
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';
  }
  var items = document.getElementsByClassName('contenedor-items')[0];
  if (items) items.style.width = '60%';
}

function agregarItemAlCarrito(titulo, precio, imagenSrc) {
  var itemsCarrito = document.getElementsByClassName('carrito-items')[0];
  if (!itemsCarrito) return;

  // Evitar duplicados
  var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
  for (var i = 0; i < nombresItemsCarrito.length; i++) {
    if (nombresItemsCarrito[i].innerText === titulo) {
      alert('El item ya se encuentra en el carrito');
      return;
    }
  }

  var item = document.createElement('div');
  item.classList.add('item');

  item.innerHTML = `
    <div class="carrito-item">
      <img src="${imagenSrc}" width="80" alt="">
      <div class="carrito-item-detalles">
        <span class="carrito-item-titulo">${titulo}</span>
        <div class="selector-cantidad">
          <i class="fa-solid fa-minus restar-cantidad"></i>
          <input type="text" value="1" class="carrito-item-cantidad" disabled>
          <i class="fa-solid fa-plus sumar-cantidad"></i>
        </div>
        <span class="carrito-item-precio">${precio}</span>
      </div>
      <button class="btn-eliminar" type="button">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  itemsCarrito.append(item);

  // Listeners del nuevo item
  item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);
  item.getElementsByClassName('restar-cantidad')[0].addEventListener('click', restarCantidad);
  item.getElementsByClassName('sumar-cantidad')[0].addEventListener('click', sumarCantidad);

  actualizarTotalCarrito();
}

function sumarCantidad(event) {
  var selector = event.target.parentElement;
  var input = selector.getElementsByClassName('carrito-item-cantidad')[0];
  var cantidadActual = parseInt(input.value || '1', 10);
  input.value = cantidadActual + 1;
  actualizarTotalCarrito();
}

function restarCantidad(event) {
  var selector = event.target.parentElement;
  var input = selector.getElementsByClassName('carrito-item-cantidad')[0];
  var cantidadActual = parseInt(input.value || '1', 10);
  if (cantidadActual > 1) {
    input.value = cantidadActual - 1;
    actualizarTotalCarrito();
  }
}

function eliminarItemCarrito(event) {
  var contenedorItem = event.target.closest('.carrito-item');
  if (contenedorItem) contenedorItem.remove();
  actualizarTotalCarrito();
  ocultarCarrito();
}

function ocultarCarrito() {
  var carritoItems = document.getElementsByClassName('carrito-items')[0];
  if (carritoItems && carritoItems.childElementCount === 0) {
    var carrito = document.getElementsByClassName('carrito')[0];
    if (carrito) {
      carrito.style.marginRight = '-100%';
      carrito.style.opacity = '0';
    }
    carritoVisible = false;
    var items = document.getElementsByClassName('contenedor-items')[0];
    if (items) items.style.width = '100%';
  }
}

function actualizarTotalCarrito() {
  var carrito = document.getElementsByClassName('carrito')[0];
  if (!carrito) return;

  var carritoItems = carrito.getElementsByClassName('carrito-item');
  var total = 0;
  for (var i = 0; i < carritoItems.length; i++) {
    var item = carritoItems[i];
    var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
    var precio = parseFloat((precioElemento?.innerText || '$0').replace('$', '').replace('.', '')) || 0;
    var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
    var cantidad = parseInt(cantidadItem?.value || '1', 10);
    total += precio * cantidad;
  }
  total = Math.round(total * 100) / 100;

  var totalNodo = document.getElementsByClassName('carrito-precio-total')[0];
  if (totalNodo) totalNodo.innerText = '$' + total.toLocaleString('es') + ',00';
}