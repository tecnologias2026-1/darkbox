/*
   ══════════════════════════════════════════════════════════════════════
   DARKBOX — compras.js
   Sistema de procesamiento de compras.
   
   Maneja la transición del carrito a la biblioteca cuando el usuario
   completa una compra, generando códigos de licencia para cada juego.
   ══════════════════════════════════════════════════════════════════════
*/

var Compras = (function () {
    const CLAVE_BIBLIOTECA = 'darkbox_biblioteca';

    // Leer biblioteca
    function leerBiblioteca() {
        const datos = localStorage.getItem(CLAVE_BIBLIOTECA);
        if (!datos) {
            return [];
        }

        const biblioteca = JSON.parse(datos);
        if (Array.isArray(biblioteca)) {
            return biblioteca;
        }

        // Compatibilidad con el formato antiguo de objeto por id
        return Object.values(biblioteca);
    }

    // Guardar biblioteca
    function guardarBiblioteca(biblioteca) {
        localStorage.setItem(CLAVE_BIBLIOTECA, JSON.stringify(biblioteca));
    }

    function formatearPrecio(valor) {
        if (valor === undefined || valor === null) {
            return 0;
        }

        if (typeof valor === 'string') {
            var limpio = valor.replace(/[^0-9]/g, '');
            return Number(limpio) || 0;
        }

        return Number(valor) || 0;
    }

    // API Pública
    return {
        // Procesar compra: mover juegos del carrito a la biblioteca
        procesarCompra: function(juegosDelCarrito) {
            if (!Array.isArray(juegosDelCarrito) || juegosDelCarrito.length === 0) {
                return false;
            }

            const biblioteca = leerBiblioteca();

            juegosDelCarrito.forEach(juego => {
                const nombreJuego = juego.nombre || juego.titulo || juego.id || 'Juego desconocido';
                const juegoId = juego.id || String(nombreJuego).toLowerCase().replace(/\s+/g, '-');
                const licencia = Licencias.crearLicencia({
                    id: juegoId,
                    nombre: nombreJuego,
                    precio: juego.precio,
                    imagen: juego.imagen
                });

                const precioNumerico = formatearPrecio(juego.precio);

                biblioteca.push({
                    compraId: licencia.id,
                    juegoId: juegoId,
                    id: licencia.id,
                    nombre: nombreJuego,
                    genero: juego.genero || juego.tipo || '',
                    precio: precioNumerico,
                    imagen: juego.imagen || licencia.imagen || 'https://via.placeholder.com/320x180?text=Sin+imagen',
                    puntuacion: juego.puntuacion || '0',
                    descripcion: juego.descripcion || '',
                    codigo: licencia.codigo,
                    fechaCompra: licencia.fechaCompra,
                    horaCompra: licencia.horaCompra
                });
            });

            guardarBiblioteca(biblioteca);

            // Vaciar carrito después de la compra exitosa
            localStorage.removeItem('darkbox_carrito');

            return true;
        },

        // Obtener la biblioteca
        obtenerBiblioteca: function() {
            return leerBiblioteca();
        }
    };
})();
