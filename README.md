Para Completar por grupo

🌐 Kiddo Finance – Plataforma Web de Educación Financiera para Niños

Kiddo Finance es una plataforma web educativa que permite a los niños aprender a administrar el dinero mediante un monedero virtual, registro de ingresos y gastos, y metas de ahorro. El sistema utiliza elementos visuales e interactivos para enseñar hábitos financieros básicos de forma sencilla, segura y divertida

👥 Integrantes

Maria Paula Suarez Bastias – 1202689
Paula Katalina Daza Fuentes – 1202701

🎯 1. Objetivo General

Desarrollar un e-commerse especializado en videojuegos, el cual permitirá la comercialización de juegos digitales.

Este e-commerse tiene como objetivo optimizar el proceso de compra en línea y garantizar una experiencia segura, rápida e intuitiva para el usuario. 

🌍 2. Contexto de Uso

¿Quién va a usar el sistema?

Este e-commerce será utilizado en un entorno web por clientes interesados en adquirir juegos digitales desde cualquier dispositivo con conexión a internet (computador, Tablet o smartphone).

Está dirigido a:
-Clientes que buscan comprar juegos digitales, evitando el procedmiento usual para uno fisico.
-Administradores encargados de actualizar inventario, precios y promociones.


El entorno de uso exige:
-Seguridad en el manejo de datos personales y financieros.
-Actualización constante de stock y precios.
-Presentación clara de especificaciones técnicas.

Solución propuesta
Módulos funcionales:

-Módulo de catalogo.
-Módulo de detalle del producto. 
-Módulo de carrito de compras.
-Modulo de biblioteca.
-Módulo de pagos y seguridad.


📋 3. Requerimientos del Sistema
3.1 Requerimientos Funcionales

RF-01: El sistema debe permitir al usuario registrarse mediante correo electrónico y contraseña.
RF-02: El sistema debe permitir al usuario iniciar sesión.
RF-03: El sistema debe mostrar un catálogo de productos disponibles.
RF-04: El sistema debe permitir buscar productos por nombre o palabra clave.
RF-05: El sistema debe permitir visualizar el detalle completo de un producto.
RF-06: El sistema debe permitir agregar productos al carrito de compras.
RF-07: El sistema debe permitir eliminar productos del carrito.
RF-08: El sistema debe permitir iniciar el proceso de compra (checkout).
RF-09: El sistema debe permitir seleccionar un método de pago (simulado).
RF-10: El sistema debe permitir confirmar la compra.
RF-11: El sistema debe permitir que se vean los podructos comprados en la biblioteca.


3.2 Requerimientos No Funcionales

RNF01: La página debe ser responsive y funcionar en celular, tablet y computador.
RNF02: La interfaz debe ser amigable y fácil de usar.
RNF03: El sistema debe cargar rápidamente.
RNF04: El sistema debe proteger la información del usuario.
RNF05: El sistema debe tener una interfaz visual con iconos.
RNF06: El sistema debe usar una base de datos relacional para almacenar usuarios y productos.

🧠 4. Diagramas UML

Diagrama de Casos de Uso

<img width="1534" height="732" alt="image" src="https://github.com/user-attachments/assets/fc91e56a-26f9-449b-8468-a09adc51e6f6" />

Este diagrama muestra las interacciones entre el usuario (niño o padre/madre) y el sistema. Permite visualizar las principales funciones del sistema, como registrarse, iniciar sesión, registrar ingresos y gastos, crear metas de ahorro y ver el progreso financiero.

Diagrama de Secuencia

<img width="1524" height="733" alt="image" src="https://github.com/user-attachments/assets/d521a1ce-7380-4ca0-8ac7-608e50263ae7" />

Este diagrama muestra el proceso que ocurre cuando el usuario registra un ingreso o gasto. Representa la interacción entre el usuario, la interfaz web y la base de datos, mostrando cómo se guarda la información y se actualiza el saldo.

🎨 5. URL del Prototipo

Colocar aquí el enlace público de Figma:
https://www.figma.com/make/hnhFjeeFNXSH2zgtuYpCka/Colorful-Kids-Finance-Page?t=15g4YsdyFJH8shao-1

🗄️ 6. Diseño de Base de Datos

<img width="1291" height="821" alt="image" src="https://github.com/user-attachments/assets/46b28d79-cd3a-47f9-9590-0a3a726ae7d5" />

Tablas principales
1. Tabla: Role (enum)
Qué es: Define los tipos de usuario del sistema.
Campos:
id: identificador único
email: correo del usuario
role: tipo de usuario
Valores posibles:
KID → Niño

2. Tabla: User
Qué es: Guarda la información de la cuenta del usuario.
Campos:
id: identificador único del usuario
email: correo electrónico
role: tipo de usuario
Función:
Permite que el usuario pueda registrarse e iniciar sesión.

3. Tabla: KidProfile
Qué es: Guarda la información del perfil del niño.
Campos:
id: identificador del perfil
email: correo asociado
role: tipo de usuario
Función:
Representa al niño dentro del sistema.

4. Tabla: WalletEntry
Qué es: Guarda todos los movimientos de dinero del niño.
Campos:
id: identificador del movimiento
kidprofile: referencia al niño
transactionType: tipo (ingreso o gasto)
amount: cantidad de dinero

5. Tabla: TransactionType
Qué es: Define el tipo de movimiento.
Tipos:
income → ingreso
expense → gasto

6. Tabla: SavingGoal
Qué es: Guarda las metas de ahorro del niño.
Campos:
id: identificador de la meta
kidprofile: niño
title: nombre de la meta
targetAmount: cantidad objetivo
dueDate: fecha límite

7. Tabla: Badge
Qué es: Guarda las recompensas o logros.
Campos:
id: identificador
name: nombre de la recompensa

8. Relación entre las tablas (cómo se conectan)
Relación principal:
- User
↓
KidProfile
↓
WalletEntry
↓
TransactionType

- KidProfile
↓
SavingGoal

- KidProfile
↓
Badge

🧩 7. Documentación del Sistema
Estructura de Carpetas

/css
Contiene los archivos de estilos de la página, como colores, diseño, botones y estructura visual.
/js
Contiene los archivos JavaScript que controlan la lógica del sistema, como registro, cálculo de saldo y manejo de datos.
/assets
Contiene imágenes, iconos y recursos gráficos utilizados en la interfaz.

Explicar brevemente qué contiene cada carpeta.

🚀 8. Instalación y Ejecución

Pasos para ejecutar el proyecto:
1. Descargar o clonar el proyecto desde el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir el archivo index.html en un navegador web.
4. Si el sistema utiliza base de datos, configurar la conexión en el archivo correspondiente.
5. Ejecutar el proyecto en el navegador.
