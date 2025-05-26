> # 🧱 `create-express-pro-mvc`

Estructura Profesional Moderna (Express + MVC + Clean Architecture)

Generador de proyectos **Express.js** con estructura profesional basado en el Patrón de Diseño **MVC**,
separación por capas, lista para escalar, testear y mantener fácilmente.
Ideal para desarrollo profesional con Node.js.

> 🛠️ **Instalación rápida:**  
> Ejecutá en tu terminal:
>
> ```bash
> npx create-express-pro-mvc nombre-de-tu-app
> ```

---

## 🚀 ¿Qué genera?

Una estructura completa con:

- Rutas, controladores y vistas organizadas
- Separación clara de responsabilidades
- Código limpio, modular y preparado para trabajar en equipo

📁 Estructura del proyecto generado:

```

📁 myapp/
├── 📁 src/
│   ├── 📁 config/        ← Configuraciones generales
│   ├── 📁 controllers/   ← Controladores de rutas
│   ├── 📁 models/        ← Modelos (ej. con Mongoose, Sequelize, etc.)
│   ├── 📁 routes/        ← Definición de rutas
│   ├── 📁 services/      ← Lógica de negocio
│   ├── 📁 middlewares/   ← Middlewares personalizados
│   ├── 📁 utils/         ← Funciones auxiliares
│   ├── 📁 views/         ← Vistas (EJS, etc.)
│   └── 📄 app.js         ← Configuración principal de Express
├── 📄 public/            ← Archivos estáticos (CSS, JS cliente, imágenes)
├── 📄 server.js          ← Punto de entrada del servidor
├── 📄 .env               ← Variables de entorno
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md

```

---

## 📦 Instalación y uso

### 1. Requisitos previos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

### 2. Crear un nuevo proyecto

```bash
npx create-express-pro-mvc nombre-de-tu-app
```

Esto generará la carpeta `nombre-de-tu-app` con toda la estructura base.

### 3. Entrar al proyecto y levantar el servidor

```bash
cd nombre-de-tu-app
npm install
npm run dev
```

---

## 🎯 ¿Por qué usar esta estructura?

✅ **Escalable**: lista para crecer sin volverse caótica

✅ **Organizada**: cada carpeta tiene una responsabilidad clara

✅ **Profesional**: similar a estructuras usadas en empresas

✅ **Amigable para testing**

✅ **Fácil de extender**: se integra fácil con bases de datos, auth, logging, etc.

---

## 🧪 Comandos disponibles

```bash
npm run dev     # Ejecuta el servidor con recarga automática
npm start       # Ejecuta el servidor normalmente
npm prettier    # Setea los archivos del Proyecto con Prettier
```

---

## 📜 Licencia

MIT License - © 2025 Dante Marcos Delprato
¡Gracias por visitar este proyecto!

---

## 💬 ¿Dudas o sugerencias?

Podés abrir un issue en el repositorio o contactarme por GitHub.

https://github.com/YoElDante/express-pro-mvc

😄 ¡Estoy feliz de compartir este generador con la comunidad!
