# 09_PFF_SanchezArias
📚 Sistema de Gestión de Biblioteca

Aplicación web desarrollada con Angular para gestionar las principales operaciones de una biblioteca, permitiendo administrar libros, ventas, inventario, contactos, reservas y citas desde una interfaz sencilla y organizada.

---

📝 Descripción

El proyecto consiste en el desarrollo de una aplicación web para reforzar conceptos fundamentales de Angular, como:

- Componentes
- Directivas
- Manejo de datos
- Interpolación
- Eventos
- Two-way Data Binding
- Formularios
- Interfaces de TypeScript
- Listados dinámicos
- Gestión de información

La aplicación está orientada a la gestión de una biblioteca y cuenta con diferentes módulos funcionales.

---

🎯 Objetivo

Desarrollar una aplicación web utilizando Angular, aplicando los conceptos aprendidos durante el curso mediante la creación de un pequeño sistema de gestión de biblioteca.

---

🚀 Funcionalidades

📚 Libros

Permite administrar los libros registrados en la biblioteca.

- Registrar libros.
- Visualizar libros.
- Buscar libros.
- Mostrar autor y categoría.
- Registrar ISBN.
- Registrar año de publicación.
- Controlar stock.
- Registrar precio.
- Eliminar libros.

🛒 Tienda

Permite visualizar los libros disponibles para la venta.

- Mostrar título.
- Mostrar autor.
- Mostrar categoría.
- Mostrar precio.
- Mostrar disponibilidad.
- Mostrar stock disponible.

💰 Ventas

Permite registrar las ventas de libros.

- Seleccionar un libro.
- Indicar cantidad.
- Calcular automáticamente el total.
- Descontar unidades del inventario.
- Mostrar historial de ventas.
- Mostrar fecha de venta.

📦 Inventario

Permite controlar las existencias de los libros.

- Visualizar stock.
- Mostrar precio.
- Mostrar categoría.
- Identificar libros disponibles.
- Identificar libros agotados.

👥 Contactos

Permite registrar información de los clientes.

- Nombre.
- Correo electrónico.
- Teléfono.
- Mensaje.
- Eliminar contactos.

📅 Reservas

Permite gestionar reservas de libros.

- Registrar cliente.
- Seleccionar libro.
- Registrar fecha.
- Consultar reservas.
- Cancelar reservas.

🕐 Citas

Permite gestionar citas de los usuarios.

- Registrar cliente.
- Seleccionar fecha.
- Registrar hora.
- Registrar motivo.
- Consultar citas.
- Cancelar citas.

---

🛠️ Tecnologías utilizadas

Tecnología| Uso
🅰️ Angular| Framework principal
📘 TypeScript| Lenguaje de programación
🌐 HTML5| Estructura de la aplicación
🎨 CSS3| Diseño y estilos
📦 Node.js| Entorno de ejecución
🔧 Git| Control de versiones
🐙 GitHub| Repositorio del proyecto

---

🧩 Conceptos de Angular utilizados

Componentes

La aplicación utiliza un componente principal definido mediante "@Component".

Directivas

Se utilizan directivas para controlar dinámicamente la interfaz:

- "*ngIf"
- "*ngFor"
- "[class]"

Interpolación

Se utiliza para mostrar información dinámica:

{{ libro.titulo }}

Two-way Data Binding

Se utiliza "[(ngModel)]" para sincronizar los formularios con los datos:

<input [(ngModel)]="nuevoLibro.titulo">

Eventos

Se utilizan eventos como "(click)" para ejecutar acciones:

<button (click)="agregarLibro()">
  Registrar libro
</button>

Manejo de datos

La información se administra mediante arreglos e interfaces de TypeScript:

Libro
Venta
Contacto
Reserva
Cita

---

📁 Estructura principal

S01-biblioteca/
│
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── styles.css
│   └── index.html
│
├── public/
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md

---

⚙️ Instalación

1. Clonar el repositorio

git clone URL_DEL_REPOSITORIO

2. Entrar al proyecto

cd S01-biblioteca

3. Instalar dependencias

npm install

4. Ejecutar el proyecto

ng serve

También puedes utilizar:

npm start

5. Abrir en el navegador

http://localhost:4200/

Si el puerto "4200" está ocupado, Angular puede preguntarte:

Would you like to use a different port?

Puedes responder:

Y

---

💻 Comandos útiles

Iniciar servidor

ng serve

Crear un componente

ng generate component nombre-componente

Compilar proyecto

ng build

Verificar versión de Angular

ng version

---

🔀 Control de versiones

El proyecto utiliza Git para controlar las versiones del código.

Ver estado

git status

Agregar cambios

git add .

Crear commit

git commit -m "feat: implementar sistema de biblioteca"

Subir cambios a main

git push origin main

---

📌 Estado del proyecto

Estado: 🟢 En desarrollo

Actualmente la aplicación cuenta con:

- ✅ Registro de libros
- ✅ Búsqueda de libros
- ✅ Eliminación de libros
- ✅ Tienda de libros
- ✅ Registro de ventas
- ✅ Control de inventario
- ✅ Registro de contactos
- ✅ Registro de reservas
- ✅ Registro de citas
- ✅ Interfaz responsive
- ✅ Navegación entre secciones

---

👨‍💻 Autor

Oscar Heyton Sánchez Arias

Proyecto académico desarrollado utilizando Angular.

---

📄 Licencia

Este proyecto fue desarrollado con fines educativos y académicos.
