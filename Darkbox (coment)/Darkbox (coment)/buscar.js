// ════════════════════════════════════════════════════════════════
// FUNCIONALIDAD DE BÚSQUEDA DE JUEGOS
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los inputs de búsqueda que haya en la página
    const buscadores = document.querySelectorAll('header .buscador input');
    
    buscadores.forEach(buscador => {
        // Búsqueda en tiempo real (solo en home)
        buscador.addEventListener('input', function() {
            // Solo filtrar en tiempo real si no es la página de home
            if (!window.location.pathname.includes('resultados-busqueda')) {
                realizarBusqueda(this.value);
            }
        });

        // Redireccionar al presionar Enter
        buscador.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const termino = this.value.trim();
                if (termino !== '') {
                    // Redirigir a la página de resultados con el término de búsqueda
                    window.location.href = `resultados-busqueda.html?busqueda=${encodeURIComponent(termino)}`;
                }
            }
        });
    });

    // Tecla ESC para limpiar
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const buscadores = document.querySelectorAll('header .buscador input');
            buscadores.forEach(b => {
                b.value = '';
                if (!window.location.pathname.includes('resultados-busqueda')) {
                    realizarBusqueda('');
                }
            });
        }
    });

    // Si estamos en la página de resultados, cargar los resultados
    if (window.location.pathname.includes('resultados-busqueda')) {
        cargarResultados();
    }
});

/**
 * Realiza el filtrado de juegos basado en el texto de búsqueda
 * @param {string} textoBusqueda - Texto a buscar
 */
function realizarBusqueda(textoBusqueda) {
    // Convertir el texto de búsqueda a minúsculas para comparación insensible a mayúsculas
    const busqueda = textoBusqueda.toLowerCase().trim();
    
    // Obtener todas las tarjetas de juegos
    const tarjetas = document.querySelectorAll('.tarjeta');
    let juegosEncontrados = 0;
    
    tarjetas.forEach(tarjeta => {
        // Extraer información del juego
        const nombre = tarjeta.querySelector('.nombre')?.textContent.toLowerCase() || '';
        const genero = tarjeta.querySelector('.genero')?.textContent.toLowerCase() || '';
        const descripcion = tarjeta.querySelector('.descripcion')?.textContent.toLowerCase() || '';
        const textoTarjeta = tarjeta.textContent.toLowerCase();
        
        // Buscar coincidencias en nombre, género, descripción o características
        const coincidir = 
            textoTarjeta.includes(busqueda) ||
            nombre.includes(busqueda) ||
            genero.includes(busqueda) ||
            descripcion.includes(busqueda);
        
        // Mostrar u ocultar la tarjeta
        if (busqueda === '' || coincidir) {
            tarjeta.style.display = '';
            if (tarjeta.parentElement) {
                tarjeta.parentElement.style.display = '';
            }
            tarjeta.classList.remove('tarjeta-oculta');
            juegosEncontrados++;
        } else {
            tarjeta.style.display = 'none';
            tarjeta.classList.add('tarjeta-oculta');
        }
    });
    
    // Mostrar mensaje de "sin resultados" si es apropiado
    mostrarMensajeSinResultados(busqueda, juegosEncontrados);
}

/**
 * Carga y muestra los resultados de búsqueda en la página de resultados
 */
function cargarResultados() {
    // Obtener el parámetro de búsqueda de la URL
    const params = new URLSearchParams(window.location.search);
    const termino = params.get('busqueda');

    if (!termino) {
        window.location.href = 'home.html';
        return;
    }

    // Actualizar el input de búsqueda con el término
    const buscadores = document.querySelectorAll('header .buscador input');
    buscadores.forEach(b => b.value = termino);

    // Obtener todos los juegos y filtrar
    const todosLosJuegos = obtenerTodosLosJuegos();
    const resultados = filtrarJuegos(todosLosJuegos, termino);

    // Mostrar resultados en la página
    mostrarResultados(resultados, termino);
}

/**
 * Obtiene todos los juegos disponibles
 * @returns {Array} Array de objetos con datos de juegos
 */
function obtenerTodosLosJuegos() {
    // Primero intentar obtener del DOM (para compatibilidad con home.html)
    const juegosDOM = [];
    const tarjetas = document.querySelectorAll('.tarjeta');

    if (tarjetas.length > 0) {
        tarjetas.forEach(tarjeta => {
            const nombre = tarjeta.querySelector('.nombre')?.textContent || '';
            const genero = tarjeta.querySelector('.genero')?.textContent || '';
            const descripcion = tarjeta.querySelector('.descripcion')?.textContent || '';
            const precio = tarjeta.querySelector('.precio')?.textContent || '';
            const puntuacion = tarjeta.querySelector('.puntuacion')?.textContent || '0';
            const imagen = tarjeta.querySelector('img')?.src || '';
            const link = tarjeta.closest('a')?.href || '#';

            juegosDOM.push({
                nombre,
                genero,
                descripcion,
                precio,
                puntuacion,
                imagen,
                link,
                elemento: tarjeta.closest('a')
            });
        });
        return juegosDOM;
    }

    // Si no hay DOM, usar la base de datos global si está disponible
    if (typeof juegosDatabase !== 'undefined') {
        return juegosDatabase;
    }

    return [];
}

/**
 * Filtra un array de juegos según un término de búsqueda
 * @param {Array} juegos - Array de objetos de juegos
 * @param {string} termino - Término de búsqueda
 * @returns {Array} Array filtrado de juegos
 */
function filtrarJuegos(juegos, termino) {
    const busqueda = termino.toLowerCase().trim();
    
    return juegos.filter(juego => {
        const nombre = String(juego.nombre || '').toLowerCase();
        const genero = String(juego.genero || '').toLowerCase();
        const descripcion = String(juego.descripcion || '').toLowerCase();
        const caracteristicas = String(juego.caracteristicas || juego.features || juego.tags || juego.plataforma || juego.platform || '').toLowerCase();

        return (
            nombre.includes(busqueda) ||
            genero.includes(busqueda) ||
            descripcion.includes(busqueda) ||
            caracteristicas.includes(busqueda)
        );
    });
}

/**
 * Muestra los resultados de búsqueda en la página de resultados
 * @param {Array} resultados - Array de juegos encontrados
 * @param {string} termino - Término de búsqueda
 */
function mostrarResultados(resultados, termino) {
    const contenedor = document.querySelector('.resultados-container');
    
    if (!contenedor) return;

    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Mostrar encabezado con el término de búsqueda
    const header = document.createElement('div');
    header.className = 'resultados-header';
    header.innerHTML = `
        <h2>Resultados de búsqueda para: "<span class="termino-busqueda">${escapeHtml(termino)}</span>"</h2>
        <p class="cantidad-resultados">${resultados.length} juego${resultados.length !== 1 ? 's' : ''} encontrado${resultados.length !== 1 ? 's' : ''}</p>
    `;
    contenedor.appendChild(header);

    if (resultados.length === 0) {
        const mensaje = document.createElement('div');
        mensaje.className = 'sin-resultados';
        mensaje.innerHTML = `
            <p>No se encontraron juegos que coincidan con "<strong>${escapeHtml(termino)}</strong>"</p>
            <p><a href="home.html" class="btn-volver">← Volver al inicio</a></p>
        `;
        contenedor.appendChild(mensaje);
        return;
    }

    // Crear grid de resultados
    const grid = document.createElement('div');
    grid.className = 'resultados-grid';

    resultados.forEach(juego => {
        const tarjetaHTML = `
            <a href="${juego.link}" class="tarjeta-link">
                <article class="tarjeta">
                    <div class="imagen">
                        <img src="${juego.imagen}" alt="${juego.nombre}">
                    </div>
                    <div class="info">
                        <p class="nombre">${juego.nombre}</p>
                        <div class="meta">
                            <span class="estrella">★</span>
                            <span class="puntuacion">${juego.puntuacion}</span>
                            <span class="separador">•</span>
                            <span class="genero">${juego.genero}</span>
                        </div>
                        <p class="descripcion">${juego.descripcion}</p>
                        <div class="pie">
                            <span class="precio">${juego.precio}</span>
                            <button class="btn-agregar">🛒 Agregar</button>
                        </div>
                    </div>
                </article>
            </a>
        `;
        grid.innerHTML += tarjetaHTML;
    });

    contenedor.appendChild(grid);
}

/**
 * Muestra o oculta un mensaje cuando no hay resultados de búsqueda
 * @param {string} busqueda - Texto de búsqueda
 * @param {number} juegosEncontrados - Cantidad de juegos que coinciden
 */
function mostrarMensajeSinResultados(busqueda, juegosEncontrados) {
    // Eliminar mensaje anterior si existe
    const mensajeAnterior = document.querySelector('.mensaje-sin-resultados');
    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }
    
    // Crear mensaje si no hay resultados
    if (busqueda !== '' && juegosEncontrados === 0) {
        const main = document.querySelector('main');
        if (main) {
            const mensaje = document.createElement('div');
            mensaje.className = 'mensaje-sin-resultados';
            mensaje.innerHTML = `
                <p>No se encontraron juegos que coincidan con "<strong>${escapeHtml(busqueda)}</strong>"</p>
                <small>Intenta buscar por nombre del juego, género o características</small>
            `;
            main.insertBefore(mensaje, main.firstChild);
        }
    }
}

/**
 * Escapa caracteres especiales HTML para evitar inyección XSS
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
