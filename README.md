# AdminLibros

# Documentación de la Aplicación: AdminLibros

## Descripción General
**AdminLibros** es una aplicación Angular diseñada para la gestión de libros y publicaciones. La aplicación permite a los usuarios visualizar listas de libros y publicaciones, cambiar el estado de disponibilidad de los libros, y navegar entre diferentes páginas. Utiliza Angular como framework principal, Bootstrap para el diseño responsivo, y `HttpClient` para consumir APIs externas.

---

## Estructura del Proyecto
La estructura del proyecto sigue el estándar de Angular, con carpetas organizadas para componentes, servicios, modelos, y páginas.

```
src/
├── index.html
├── main.ts
├── styles.css
├── app/
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   ├── app.routes.ts
│   ├── app.spec.ts
│   ├── app.ts
│   ├── components/
│   │   ├── book-detail/
│   │   ├── book-list/
│   │   ├── footer/
│   │   ├── nav/
│   │   ├── post-list/
│   ├── models/
│   ├── pages/
│   │   ├── admin/
│   │   ├── home/
│   ├── services/
```

---

## Componentes

### 1. **BookListComponent**
- **Ubicación:** `src/app/components/book-list/`
- **Descripción:** Muestra una lista de libros con la opción de seleccionar un libro.
- **Archivos:**
  - `book-list.ts`: Lógica del componente.
  - `book-list.html`: Plantilla HTML para mostrar la lista de libros.
  - `book-list.css`: Estilos específicos del componente.

### 2. **BookDetailComponent**
- **Ubicación:** `src/app/components/book-detail/`
- **Descripción:** Muestra los detalles de un libro seleccionado y permite cambiar su estado de disponibilidad.
- **Archivos:**
  - `book-detail.ts`: Lógica del componente.
  - `book-detail.html`: Plantilla HTML para mostrar los detalles del libro.
  - `book-detail.css`: Estilos específicos del componente.

### 3. **PostListComponent**
- **Ubicación:** `src/app/components/post-list/`
- **Descripción:** Muestra una lista de publicaciones obtenidas de una API externa.
- **Archivos:**
  - `post-list.ts`: Lógica del componente.
  - `post-list.html`: Plantilla HTML para mostrar la lista de publicaciones.
  - `post-list.css`: Estilos específicos del componente.

### 4. **NavComponent**
- **Ubicación:** `src/app/components/nav/`
- **Descripción:** Barra de navegación con enlaces a las páginas principales.
- **Archivos:**
  - `nav.ts`: Lógica del componente.
  - `nav.html`: Plantilla HTML para la barra de navegación.
  - `nav.css`: Estilos específicos del componente.

### 5. **FooterComponent**
- **Ubicación:** `src/app/components/footer/`
- **Descripción:** Pie de página con información básica.
- **Archivos:**
  - `footer.ts`: Lógica del componente.
  - `footer.html`: Plantilla HTML para el pie de página.
  - `footer.css`: Estilos específicos del componente.

---

## Servicios

### 1. **BookService**
- **Ubicación:** `src/app/services/book.service.ts`
- **Descripción:** Proporciona métodos para gestionar libros, como obtener la lista de libros y cambiar su estado de disponibilidad.

### 2. **ApiPostService**
- **Ubicación:** `src/app/services/post.service.ts`
- **Descripción:** Consume una API externa para obtener publicaciones. Utiliza `HttpClient` para realizar solicitudes HTTP.

---

## Modelos

### 1. **Book**
- **Ubicación:** `src/app/models/book.model.ts`
- **Descripción:** Define la estructura de un libro con propiedades como `id`, `title`, `author`, y `available`.

### 2. **Post**
- **Ubicación:** `src/app/models/post.model.ts`
- **Descripción:** Define la estructura de una publicación con propiedades como `userId`, `id`, `title`, y `body`.

---

## Páginas

### 1. **Home**
- **Ubicación:** `src/app/pages/home/`
- **Descripción:** Página principal que muestra la lista de libros.
- **Archivos:**
  - `home.ts`: Lógica de la página.
  - `home.html`: Plantilla HTML para la página.
  - `home.css`: Estilos específicos de la página.

### 2. **Admin**
- **Ubicación:** `src/app/pages/admin/`
- **Descripción:** Página de administración que permite gestionar libros y ver sus detalles.
- **Archivos:**
  - `admin.ts`: Lógica de la página.
  - `admin.html`: Plantilla HTML para la página.
  - `admin.css`: Estilos específicos de la página.

---

## Configuración

### 1. **Rutas**
- **Archivo:** `src/app/app.routes.ts`
- **Descripción:** Define las rutas principales de la aplicación:
  - `/home`: Página principal.
  - `/admin`: Página de administración.

### 2. **Configuración de la Aplicación**
- **Archivo:** `src/app/app.config.ts`
- **Descripción:** Configura los proveedores principales, como `HttpClient` y las rutas.

---

## Estilos Globales
- **Archivo:** `src/styles.css`
- **Descripción:** Contiene estilos globales para la aplicación, como el color de fondo y estilos para encabezados.

---

## Dependencias
- **Angular:** Versión 20.0.0.
- **Bootstrap:** Versión 5.3.7 para estilos y diseño responsivo.
- **RxJS:** Para manejar flujos de datos reactivos.

---

## Scripts Disponibles
- **Iniciar el servidor de desarrollo:**
  ```bash
  npm start
  ```
- **Construir la aplicación:**
  ```bash
  npm run build
  ```

---

## Créditos
- **Autor:** Dardo Camaño
- **Año:** 2025
