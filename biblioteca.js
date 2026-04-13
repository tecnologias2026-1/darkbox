/* ══════════════════════════════════════════════════
   DARKBOX — biblioteca.js
   Gestión de la biblioteca de juegos adquiridos.
   Con sistema de códigos de licencia integrado.
   ══════════════════════════════════════════════════ */

(function() {
    'use strict';

    const CLAVE_BIBLIOTECA = 'darkbox_biblioteca';

    // Referencias a elementos del DOM
    const bibliotecaGrid = document.getElementById('biblioteca-grid');
    const totalJuegos = document.getElementById('total-juegos');
    const totalGastado = document.getElementById('total-gastado');
    const ultimaCompra = document.getElementById('ultima-compra');

    function leerBibliotecaDirecta() {
        const datos = localStorage.getItem(CLAVE_BIBLIOTECA);
        if (!datos) return [];

        try {
            const biblioteca = JSON.parse(datos);
            return Array.isArray(biblioteca) ? biblioteca : Object.values(biblioteca);
        } catch (error) {
            return [];
        }
    }

    // Función para formatear precio
    function formatearPrecio(precio) {
        if (precio === undefined || precio === null || precio === '') {
            return '$0';
        }

        if (typeof precio === 'string') {
            precio = parseFloat(precio.replace(/\$/g, '').replace(/\./g, ''));
        }

        precio = Number(precio) || 0;
        return '$' + precio.toLocaleString('es-CO');
    }

    // Función para formatear fecha
    function formatearFecha(fecha) {
        if (!fecha) return '-';
        const date = new Date(fecha.split('/').reverse().join('-'));
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    // Reconstruir datos de juego si faltan campos
    function reconstruirJuego(juego) {
        return {
            id: juego.id,
            nombre: juego.nombre || 'Juego desconocido',
            genero: juego.genero || 'Acción',
            descripcion: juego.descripcion || '',
            imagen: juego.imagen || 'https://via.placeholder.com/320x180?text=Sin+imagen',
            precio: (juego.precio !== undefined && juego.precio !== null && juego.precio !== '')
                ? juego.precio
                : 0,
            puntuacion: juego.puntuacion || '0',
            codigo: juego.codigo || null,
            fechaCompra: juego.fechaCompra || '-'
        };
    }

    // Modal para mostrar código de licencia
    function mostrarModalCodigo(juego) {
        const juegoCompleto = reconstruirJuego(juego);
        const codigo = juegoCompleto.codigo || 'N/A';
        const fechaCompra = juegoCompleto.fechaCompra || '-';

        const modal = document.createElement('div');
        modal.className = 'modal-codigo';
        modal.innerHTML = `
            <div class="modal-contenido">
                <button class="btn-cerrar" onclick="this.closest('.modal-codigo').remove()">✕</button>
                <h2>Código de Licencia</h2>
                <p class="titulo-juego">${juegoCompleto.nombre}</p>
                
                <div class="info-compra">
                    <p><strong>Fecha de compra:</strong> ${fechaCompra}</p>
                    <p><strong>Precio pagado:</strong> ${formatearPrecio(juegoCompleto.precio)}</p>
                </div>
                
                <div class="codigo-container">
                    <label>Tu código de licencia:</label>
                    <div class="codigo-box">
                        <input type="text" readonly value="${codigo}" class="input-codigo" id="input-codigo">
                        <button class="btn-copiar" onclick="copiarCodigo(event)">Copiar</button>
                    </div>
                </div>
                
                <p class="aviso">Guarda este código en un lugar seguro. Lo necesitarás para activar el juego.</p>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Copiar código al portapapeles
    window.copiarCodigo = function(event) {
        const input = document.getElementById('input-codigo');
        input.select();
        document.execCommand('copy');
        
        const btn = event ? event.target : null;
        if (btn) {
            const textoOriginal = btn.textContent;
            btn.textContent = '¡Copiado!';
            btn.style.background = '#22c55e';

            setTimeout(() => {
                btn.textContent = textoOriginal;
                btn.style.background = '';
            }, 2000);
        }
    };

    // Crear tarjeta de juego en biblioteca
    function crearTarjetaJuego(juego) {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'biblioteca-item';
        
        const juegoCompleto = reconstruirJuego(juego);
        const nombre = juegoCompleto.nombre;
        const imagen = juegoCompleto.imagen;
        const genero = juegoCompleto.genero;
        const descripcion = juegoCompleto.descripcion || 'No hay descripción disponible.';
        const puntuacion = juegoCompleto.puntuacion || '0';
        const precio = formatearPrecio(juegoCompleto.precio);

        tarjeta.innerHTML = `
            <div class="imagen">
                <img src="${imagen}" alt="${nombre}">
                <div class="badge">Comprado</div>
            </div>
            <div class="info">
               <p class="nombre">${nombre}</p>
                <div class="meta">
                    <span class="estrella">★</span>
                    <span class="puntuacion">${puntuacion}</span>
                    <span class="separador">•</span>
                    <span class="genero">${genero}</span>
                </div>
                <p class="descripcion" style="font-size: 0.85rem; color: #aaa; margin: 8px 0;">${descripcion}</p>
                <div class="codigo-line">
                    <span class="codigo-label">Código:</span>
                    <span class="codigo-text">${juegoCompleto.codigo || 'N/A'}</span>
                </div>
                <div class="pie">
                    <span class="precio">${precio}</span>
                    <button class="btn-codigo" onclick="event.stopPropagation()">Ver Código</button>
                </div>
            </div>
        `;
        
        // Agregar evento para mostrar código
        const btnCodigo = tarjeta.querySelector('.btn-codigo');
        btnCodigo.addEventListener('click', () => mostrarModalCodigo(juego));
        
        return tarjeta;
    }

    // Actualizar la biblioteca
    function actualizarBiblioteca() {
        if (!bibliotecaGrid) return;
        
        let biblioteca = [];
        if (typeof Compras !== 'undefined' && typeof Compras.obtenerBiblioteca === 'function') {
            biblioteca = Compras.obtenerBiblioteca() || [];
        } else {
            biblioteca = leerBibliotecaDirecta();
        }

        if (!Array.isArray(biblioteca)) {
            biblioteca = Object.values(biblioteca);
        }

        if (biblioteca.length === 0) {
            biblioteca = leerBibliotecaDirecta();
        }

        const juegos = Array.isArray(biblioteca) ? biblioteca : Object.values(biblioteca);
        
        bibliotecaGrid.innerHTML = '';

        if (juegos.length === 0) {
            bibliotecaGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                    <p style="color: #888; font-size: 1.1rem;">Aún no has comprado ningún juego</p>
                    <a href="home-sesion.html" style="color: #C27AFF; text-decoration: none;">Explorar juegos →</a>
                </div>
            `;
            totalJuegos.textContent = '0';
            totalGastado.textContent = '$0';
            ultimaCompra.textContent = '-';
            return;
        }

        let totalPrecio = 0;
        let fechas = [];

        juegos.forEach(juegoData => {
            const juego = reconstruirJuego(juegoData);
            const tarjeta = crearTarjetaJuego(juego);
            bibliotecaGrid.appendChild(tarjeta);
            
            const precioNum = typeof juego.precio === 'string'
                ? parseFloat(juego.precio.replace(/\$/g, '').replace(/\./g, ''))
                : Number(juego.precio);
            totalPrecio += precioNum || 0;
            if (juego.fechaCompra) {
                fechas.push(new Date(juego.fechaCompra.split('/').reverse().join('-')));
            }
        });

        // Actualizar estadísticas
        totalJuegos.textContent = juegos.length;
        totalGastado.textContent = formatearPrecio(totalPrecio);
        
        if (fechas.length > 0) {
            const ultimaFecha = new Date(Math.max(...fechas));
            ultimaCompra.textContent = ultimaFecha.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } else {
            ultimaCompra.textContent = '-';
        }
    }

    // Inicializar biblioteca cuando carga la página
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', actualizarBiblioteca);
    } else {
        actualizarBiblioteca();
    }

})();