/*
   ══════════════════════════════════════════════════════════════════════
   DARKBOX — carrito.js
   Módulo central del carrito de compras.

   Este archivo debe estar en la carpeta RAÍZ del proyecto (al lado de
   home.html, home-sesion.html, carrito.html, etc.) para que tanto
   las páginas raíz como las subcarpetas puedan accederlo con:
     - Páginas raíz:       src="carrito.js"
     - Páginas en carpeta: src="../carrito.js"

   ── QUÉ HACE ESTE ARCHIVO ──
   Define el objeto global "Carrito" con 5 funciones:
     Carrito.agregar(juego)       → agrega un juego al carrito
     Carrito.eliminar(id)         → elimina un juego por su id
     Carrito.obtener()            → devuelve el array de juegos
     Carrito.total()              → suma los precios y devuelve el total
     Carrito.formatearPrecio(num) → convierte 149000 en "$149.000"
     Carrito.notificar(msg, tipo) → muestra un toast (mensaje flotante)
     Carrito.actualizarBadge()    → actualiza el contador rojo del header

   ── DÓNDE SE GUARDAN LOS DATOS ──
   En localStorage del navegador, bajo la clave "darkbox_carrito".
   localStorage persiste aunque se cierre y se abra el navegador.
   Se borra si el usuario limpia los datos del navegador.
   ══════════════════════════════════════════════════════════════════════
*/

var Carrito = (function () {

    /* ── CLAVE de localStorage ──────────────────────────────────────
       Todos los datos del carrito se guardan bajo esta clave.
       Si cambias la clave, los carritos existentes se perderán. */
    var CLAVE = 'darkbox_carrito';


    /* ══════════════════════════════════════════════════════════════
       FUNCIONES PRIVADAS (solo usadas internamente)
       ══════════════════════════════════════════════════════════════ */

    /* Leer el carrito de localStorage y devolverlo como array.
       JSON.parse convierte el texto guardado en un array de objetos.
       Si no hay nada guardado aún, devuelve un array vacío []. */
    function leer() {
        var datos = localStorage.getItem(CLAVE);
        /* datos puede ser null (primera vez) o un JSON string */
        return datos ? JSON.parse(datos) : [];
    }

    /* Guardar el array en localStorage.
       JSON.stringify convierte el array de objetos en texto para guardarlo. */
    function guardar(lista) {
        localStorage.setItem(CLAVE, JSON.stringify(lista));
    }


    /* ══════════════════════════════════════════════════════════════
       API PÚBLICA — estas son las funciones que usan las páginas
       ══════════════════════════════════════════════════════════════ */

    return {

        /* ── AGREGAR UN JUEGO ────────────────────────────────────────
           Recibe un objeto con: { id, nombre, genero, precio, imagen }
           Si el juego ya está en el carrito (mismo id) no lo duplica.
           Devuelve true si se agregó, false si ya estaba.

           Ejemplo de uso:
             Carrito.agregar({
               id:     "helldrivers2",
               nombre: "Helldivers 2",
               genero: "Acción/Cooperativo",
               precio: 149000,
               imagen: "https://url-de-la-imagen.jpg"
             });
        ─────────────────────────────────────────────────────────── */
        agregar: function (juego) {
            var lista = leer();

            /* Buscamos si ya existe un juego con el mismo id.
               .some() devuelve true si al menos un elemento cumple la condición. */
            var yaExiste = lista.some(function (item) {
                return item.id === juego.id;
            });

            if (yaExiste) {
                /* El juego ya está en el carrito, no lo duplicamos */
                return false;
            }

            /* Agregamos el juego al array y lo guardamos */
            lista.push(juego);
            guardar(lista);

            /* Actualizamos el badge del header (contador rojo) */
            this.actualizarBadge();

            return true; /* indica que sí se agregó */
        },


        /* ── ELIMINAR UN JUEGO ───────────────────────────────────────
           Recibe el id del juego a eliminar.
           .filter() devuelve un nuevo array sin el elemento eliminado. */
        eliminar: function (id) {
            var lista = leer();

            /* Creamos un nuevo array sin el juego con ese id */
            var nueva = lista.filter(function (item) {
                return item.id !== id;
            });

            guardar(nueva);
            this.actualizarBadge();
        },


        /* ── OBTENER TODOS LOS JUEGOS ────────────────────────────────
           Devuelve el array completo de juegos en el carrito. */
        obtener: function () {
            return leer();
        },


        /* ── CALCULAR TOTAL ──────────────────────────────────────────
           Suma los precios de todos los juegos y devuelve el número.
           .reduce() acumula la suma recorriendo el array. */
        total: function () {
            var lista = leer();
            return lista.reduce(function (suma, item) {
                return suma + item.precio;
            }, 0); /* 0 es el valor inicial de la suma */
        },


        /* ── FORMATEAR PRECIO ────────────────────────────────────────
           Convierte un número (ej: 149000) en texto con formato (ej: "$149.000").
           toLocaleString('es-CO') aplica el formato de Colombia (punto como separador). */
        formatearPrecio: function (numero) {
            return '$' + numero.toLocaleString('es-CO');
        },


        /* ── ACTUALIZAR BADGE DEL HEADER ─────────────────────────────
           Busca en la página el elemento con id="carrito-badge" y
           muestra la cantidad de juegos en el carrito.
           Si hay 0 juegos, oculta el badge. */
        actualizarBadge: function () {
            var cantidad = leer().length;

            /* Badge principal (header escritorio): id="carrito-badge" */
            var badge = document.getElementById('carrito-badge');
            if (badge) {
                badge.style.display = cantidad === 0 ? 'none' : 'flex';
                badge.textContent = cantidad;
            }

            /* Badge menú móvil: class="carrito-badge-movil"
               Puede haber más de uno, por eso usamos querySelectorAll */
            var badgesMovil = document.querySelectorAll('.carrito-badge-movil');
            for (var i = 0; i < badgesMovil.length; i++) {
                badgesMovil[i].style.display = cantidad === 0 ? 'none' : 'flex';
                badgesMovil[i].textContent = cantidad;
            }
        },


        /* ── NOTIFICAR (Toast) ───────────────────────────────────────
           Muestra un mensaje flotante en la esquina de la pantalla.
           tipo puede ser "ok" (verde) o "aviso" (amarillo).
           El mensaje desaparece automáticamente después de 3 segundos.

           Crea dinámicamente el elemento, lo agrega al body,
           y lo elimina después de la animación. */
        notificar: function (mensaje, tipo) {
            /* Evitar múltiples toasts al mismo tiempo */
            var existente = document.getElementById('darkbox-toast');
            if (existente) existente.remove();

            /* Creamos el elemento toast */
            var toast = document.createElement('div');
            toast.id = 'darkbox-toast';

            /* Estilos del toast aplicados directamente con JavaScript */
            toast.style.cssText = [
                'position: fixed',
                'bottom: 28px',
                'right: 28px',
                'z-index: 9999',
                'padding: 14px 22px',
                'border-radius: 10px',
                'font-family: Inter, sans-serif',
                'font-size: 0.95rem',
                'font-weight: 600',
                'color: white',
                'box-shadow: 0 4px 20px rgba(0,0,0,0.4)',
                'transition: opacity 0.4s ease, transform 0.4s ease',
                'opacity: 0',
                'transform: translateY(12px)'
            ].join(';');

            /* Color según el tipo: verde para "ok", amarillo para "aviso" */
            toast.style.background = (tipo === 'ok')
                ? 'linear-gradient(90deg, #16a34a, #22c55e)'   /* verde */
                : 'linear-gradient(90deg, #b45309, #f59e0b)';  /* amarillo */

            toast.textContent = mensaje;

            /* Agregamos el toast al body para que se muestre */
            document.body.appendChild(toast);

            /* Activamos la animación de entrada con un pequeño retraso.
               requestAnimationFrame asegura que el navegador haya pintado
               el elemento antes de iniciar la transición. */
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    toast.style.opacity = '1';
                    toast.style.transform = 'translateY(0)';
                });
            });

            /* Después de 3 segundos, animamos la salida y eliminamos el toast */
            setTimeout(function () {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(12px)';

                /* Eliminamos el elemento del DOM después de que termine la animación */
                setTimeout(function () {
                    if (toast.parentNode) toast.remove();
                }, 400); /* 400ms = duración de la transición CSS */

            }, 3000); /* 3000ms = 3 segundos visible */
        }

    }; /* fin del objeto retornado */

})(); /* IIFE: se ejecuta inmediatamente al cargar el archivo */


/* ══════════════════════════════════════════════════════════════════════
   INICIALIZACIÓN AUTOMÁTICA
   Al cargar cualquier página que incluya carrito.js,
   actualizamos el badge del header con el conteo actual.
   Esto asegura que el badge esté correcto al navegar entre páginas.
   ══════════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    Carrito.actualizarBadge();
});