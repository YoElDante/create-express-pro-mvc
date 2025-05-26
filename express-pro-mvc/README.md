# 🧱 Estructura Profesional Moderna (Express + MVC + Clean Architecture)

Proyecto con Express.js, organizado siguiendo el patrón **MVC** + separaciones de lógica por responsabilidad. Está pensada para **escalar**, **testear**, y **mantener** fácilmente.

```
📁 myapp/
├── 📁 src/
│   ├── 📁 config/              ← Configuraciones generales (DB, variables, etc.)
│   │   └── 📄 index.js
│   ├── 📁 controllers/         ← Controladores: lógica de control de rutas
│   │   └── 📄 user.controller.js
│   ├── 📁 models/              ← Modelos (ej. con Mongoose, Sequelize o clases simples)
│   │   └── 📄 user.model.js
│   ├── 📁 routes/              ← Definición de rutas y vinculación con controladores
│   │   └── 📄 user.routes.js
│   ├── 📁 services/            ← Lógica de negocio: validaciones, reglas, etc.
│   │   └── 📄 user.service.js
│   ├── 📁 middlewares/         ← Middlewares personalizados (auth, logger, etc.)
│   │   └── 📄 auth.middleware.js
│   ├── 📁 utils/               ← Funciones auxiliares (helpers, logger, etc.)
│   │   └── 📄 logger.js
│   ├── 📁 views/               ← Vistas EJS, Pug, Handlebars, etc.
│   │   ├── 📄 index.ejs
│   │   └── 📄 layout.ejs
│   └── 📄 app.js               ← Configura Express, middlewares y rutas
├── 📁 public/                  ← Archivos estáticos (CSS, JS del cliente, imgs)
│   ├── 📁 assets/    
│   ├── 📁 images/
│   ├── 📁 javascripts/      
│   └── 📁 stylesheets/
│       └── 📄 style.css
├── 📄 server.js                ← Punto de entrada principal del servidor
├── 📄 .env                     ← Variables de entorno
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
```
---

## ⚠️ Recomendaciones importantes antes de ejecutar

1. **Renombrá el archivo** `.env.example` a `.env`
   Esto es necesario para que las variables de entorno se carguen correctamente en tu aplicación.

   ```bash
   mv .env.example .env
   ```

2. **Instalá las dependencias** antes de correr el servidor:

   ```bash
   npm install
   ```

---

### 🎯 Ventajas de esta estructura

✅ Escalable: podés agregar fácilmente nuevas funcionalidades.

✅ Separación de responsabilidades: cada capa tiene su función.

✅ Legible y mantenible.

✅ Ideal para testing automatizado.

✅ Facilita la integración de bases de datos, autenticación, logging, etc.

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

```

```