🌐 DARKBOX – E-commerce especializado en videojuegos

👥 Integrantes

Jorge Andrés Gutiérrez Suárez – 1202731
David Espitia Velásquez – 1202510

1. Objetivo General

Desarrollar una plataforma web tipo e-commerce especializada en la compra y venta de videojuegos, que permita a los usuarios publicar, buscar y adquirir productos de manera segura, rápida e intuitiva.

El sistema busca optimizar el proceso de comercialización digital dentro del contexto local, brindando herramientas como filtros de búsqueda, mensajería interna y sistema de reputación.

2. Contexto de Uso

### ¿Quién usa el sistema?

La plataforma será utilizada por:

-Usuarios compradores: Personas interesadas en adquirir videojuegos físicos o digitales.
-Usuarios vendedores: Personas que desean publicar y vender videojuegos.
-Administrador: Encargado de moderar contenido y gestionar usuarios.

Entorno de uso

### El sistema funcionará en:

-Navegadores web
-Dispositivos: computador, tablet y smartphone
-Requiere conexión a internet

### Requisitos del entorno

-Seguridad en autenticación y datos
-Interfaz intuitiva
-Disponibilidad 24/7
-Tiempo de respuesta rápido

### Módulos funcionales

-Módulo de registro e inicio de sesión
-Módulo de publicación de videojuegos
-Módulo de búsqueda y filtrado
-Módulo de mensajería interna
-Módulo de reputación
-Módulo administrativo

---

## 3. Requerimientos del Sistema

### 3.1 Requerimientos Funcionales

-RF-01: El sistema debe permitir el registro de usuario mediante correo electrónico y contraseña.
-RF-02: El sistema debe permitir iniciar sesión.
-RF-03: El sistema debe permitir publicar videojuegos.
-RF-04: El sistema debe permitir buscar videojuegos.
-RF-05: El sistema debe permitir filtrar por consola, precio y estado.
-RF-06: El sistema debe permitir visualizar el detalle del producto.
-RF-07: El sistema debe permitir enviar mensajes entre usuarios.
-RF-08: El sistema debe permitir realizar el proceso de compra.
-RF-09: El sistema debe permitir calificar usuarios.
-RF-10: El sistema debe permitir gestionar el perfil.
-RF-11: El sistema debe permitir la administración de usuarios y publicaciones.

---

### 3.2 Requerimientos No Funcionales

-RNF-01: El sistema debe estar disponible 24/7.
-RNF-02: El tiempo de respuesta debe ser menor a 3 segundos.
-RNF-03: El sistema debe ser responsive.
-RNF-04: El sistema debe garantizar la seguridad de los datos.
-RNF-05: La interfaz debe ser intuitiva.
-RNF-06: El sistema debe ser escalable.

---

##  4. Diagramas UML

###  Diagrama de Casos de Uso

Este diagrama representa la interacción entre los actores del sistema (usuario y administrador) y las funcionalidades principales, como registro, inicio de sesión, publicación de videojuegos, búsqueda, compra, mensajería y calificación.

---

###  Diagrama de Secuencia

Este diagrama muestra el proceso de compra de un videojuego:

1. El usuario busca un videojuego
2. El sistema consulta la base de datos
3. El usuario selecciona un producto
4. El sistema registra la transacción
5. El usuario califica la compra

---

##  5. Prototipo

https://www.figma.com/make/yEkSc4tGKqrXq5diXWdbuD/E-commerce-tienda-videojuegos?p=f
---

##  6. Diseño de Base de Datos

###  Tablas principales

###  Usuario

-id_usuario (PK)
-nombre
-correo
-contraseña
-reputación
-fecha_registro

---

###  Videojuego

-id_videojuego (PK)
-titulo
-consola
-estado
-precio
-descripcion
-id_usuario (FK)

---

###  Mensaje

-id_mensaje (PK)
-contenido
-fecha
-id_emisor (FK)
-id_receptor (FK)

---

###  Calificación

-id_calificacion (PK)
-puntuacion
-comentario
-id_comprador (FK)
-id_vendedor (FK)

---

###  Transacción

-id_transaccion (PK)
-fecha
-estado
-id_comprador (FK)
-id_videojuego (FK)

---

###  Administrador

-id_admin (PK)
-nombre
-correo

---

## 🔗 Relaciones

-Un usuario puede publicar múltiples videojuegos
-Un usuario puede enviar y recibir mensajes
-Un usuario puede realizar múltiples transacciones
-Un videojuego pertenece a una transacción
-Un usuario puede recibir múltiples calificaciones
-El administrador gestiona usuarios y publicaciones

---

##  7. Documentación del Sistema

###  Estructura de carpetas

-/css → Contiene los estilos visuales del sistema
-/js → Contiene la lógica del sistema
-/assets → Contiene imágenes e iconos

---

## 8. Instalación y Ejecución

1. Descargar o clonar el proyecto
2. Abrir la carpeta del proyecto
3. Ejecutar el archivo index.html en un navegador
4. Configurar la base de datos (si aplica)
5. Usar el sistema desde el navegador

---

