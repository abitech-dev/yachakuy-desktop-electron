# 🖥️ [PROYECTO] · Desktop Application

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org/)
[![Electron](https://img.shields.io/badge/framework-Electron-blue)](https://www.electronjs.org/)
[![Maintenance](https://img.shields.io/badge/maintained-yes-brightgreen.svg)](https://github.com/[usuario]/[proyecto])

> **🗂️ Navegación:** **[Ir a la GUÍA TECNICA](./CONFIG.md)**

Contenedor nativo de escritorio para la plataforma **[Nombre del Proyecto]**. Este software actúa como un *Dedicated Web Wrapper* optimizado, proporcionando una experiencia de usuario aislada, segura y de alto rendimiento fuera del navegador convencional.

---

## 💎 Características Principales

* **Instancia Dedicada:** Ejecución independiente del navegador del sistema.
* **Seguridad Reforzada:** Aislamiento de contexto y restricción de integración de Node en el renderizador.
* **Optimización de Ventana:** Gestión inteligente de estados (maximizado, redimensionamiento y persistencia).
* **Branding Nativo:** Integración de íconos en tiempo de ejecución y en el instalador del sistema operativo.

---

## 🛠️ Requisitos del Entorno

Antes de iniciar, asegúrese de cumplir con los siguientes requisitos técnicos:

* **Entorno de Ejecución:** [Node.js](https://nodejs.org/) v22.0.0 o superior.
* **Gestor de Paquetes:** npm (incluido con Node.js).
* **Servidor Backend:** La plataforma web de [Nombre del Proyecto] debe estar accesible vía HTTP/HTTPS.

---

## 🚀 Ciclo de Desarrollo

Siga estos pasos para levantar el entorno de pruebas local:

1. **Clonación y Dependencias:**
   ```bash
   git clone https://github.com/[usuario]/[proyecto]-desktop-electron.git
   cd [proyecto]-desktop-electron
   npm install
   ```

2. **Ejecución en Modo Debug:**
   ```bash
   npm start
   ```

> **Tip de Debugging:** Para inspeccionar el DOM o la red, habilite las herramientas de desarrollador en `main.js` mediante el método `win.webContents.openDevTools()`.

---

## 📦 Despliegue y Distribución (Make)

El empaquetado utiliza **Electron Forge** para generar binarios instalables (.exe, .dmg, .deb) y versiones ejecutables portátiles. Para iniciar la compilación:

```bash
npm run make
```

* **Directorio de Salida:** Los artefactos generados se ubicarán en el directorio `/out/`.
* **Regla de Plataforma:** Por defecto, Forge compila solo para el sistema operativo desde el cual se ejecuta el comando.

---

## 🔒 Arquitectura de Seguridad

La integridad de la aplicación es prioridad. Este contenedor implementa las siguientes capas de protección:

* `contextIsolation: true`: Asegura que tanto los scripts de Electron como la lógica de la página web corran en contextos separados.
* `nodeIntegration: false`: Evita que scripts maliciosos de terceros tengan acceso a las APIs del sistema operativo.
* `spellcheck: true`: Validación nativa de ortografía y gramática en campos de entrada.

---

## 👨‍💻 Autoría

* **Desarrollador:** Abimael Fernandez / ABItech PERU
* **Soporte:** [peruabitech@gmail.com]
* **Website:** [https://abitech.com.pe]

---
© 2026 **ABItech PERU**. Todos los derechos reservados.