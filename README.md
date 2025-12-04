
# SEGUROS GIANELLI 🏠💼

Cotizador de planes de seguros inmobiliarios desarrollado en **React**.  
El proyecto permite a los usuarios ingresar datos de un inmueble y obtener cotizaciones estimadas según la provincia y el tipo de propiedad. Además, ofrece distintas opciones de cobertura y guarda un historial de consultas realizadas.

---

## 🚀 Instalación de dependencias

Clona el repositorio y ejecuta:

```bash
npm install

Inicialización del proyecto
Para correr el proyecto en modo desarrollo:

npm run dev
```

📂 Estructura de carpeta

/src
 ├── App.css
 ├── App.jsx
 ├── componentes/
 │    ├── formulariodeusuario.jsx
 │    ├── Coberturas.jsx
 │    ├── Costos.jsx
 ├── imagenes/
 │    └── logo achicado.png
 ├── estilos/
 │    ├── formulariodeusuario.css
 │    ├── costos.css
 │    ├── coberturas.css


## 📖 Descripción del proyecto

**SEGUROS GIANELLI** es un cotizador de seguros inmobiliarios que permite a los usuarios:

- 📝 Completar un **formulario** con datos del titular e inmueble (nombre, apellido, teléfono, email, provincia, ciudad, tipo de inmueble y mensaje).
- 💰 Obtener un **costo estimado mensual** según la provincia y el tipo de propiedad.
- 📊 Visualizar distintas **opciones de cobertura** (Plan Básico, Intermedio y Premium) con diferentes niveles de protección.
- 📜 Consultar un **historial de cotizaciones** guardado en el navegador mediante LocalStorage, con opción de borrado.

El sistema está diseñado para brindar una experiencia clara y rápida a quienes buscan conocer el costo aproximado de asegurar su propiedad.

---

## 🛠️ Tecnologías utilizadas

- **React** → Framework principal para la construcción de la interfaz.
- **Formik + Yup** → Manejo y validación de formularios.
- **CSS** → Estilos personalizados para cada componente.
- **LocalStorage** → Persistencia del historial de cotizaciones en el navegador.

## 🚀 Deploy en GitHub Pages

Este proyecto usa **Vite** y el paquete **gh-pages** para desplegar en GitHub Pages.


¡De una Gonza! 🙌 Te armo un texto cortito y claro para tu README.md, explicando cómo desplegar la app en GitHub Pages con Vite. Lo podés copiar y pegar directo:
## 🚀 Deploy en GitHub Pages

Este proyecto usa **Vite** y el paquete **gh-pages** para desplegar en GitHub Pages.

### Pasos para desplegar
1. Asegurate de tener configurado en `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/cotizadordeseguros/',
     plugins: [react()],
   })


El base debe coincidir con el nombre del repositorio.

- Generá el build de producción:
npm run build
- Publicá el contenido de la carpeta dist/ en GitHub Pages:
npm run deploy


- Tu sitio quedará disponible en:
https://<tu-usuario>.github.io/<nombre-del-repo>/


En este caso:
👉 https://gonzalogianelli.github.io/cotizadordeseguros/



