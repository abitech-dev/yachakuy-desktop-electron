# ⚙️ Configuración Técnica

Este documento contiene las instrucciones detalladas para inicializar, configurar y compilar proyectos basados en este Web Wrapper.

---

## 🏗️ 1. Estándar de nomenclatura

Para mantener la integridad del ecosistema de desarrollo, todos los repositorios y directorios deben seguir el patrón de nombrado establecido:

> **`[proyecto]-[plataforma]-[tipo]`**

| Componente | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **Proyecto** | Nombre del producto, cliente o plataforma | `mi-sistema`, `erp-ventas`, `app-cliente` |
| **Plataforma** | Sistema de destino | `desktop` |
| **Tipo** | Tecnología principal | `electron` |

*Resultado esperado:* `mi-sistema-desktop-electron`

---

## 🛠️ 2. Variables de entorno y código (`main.js`)

La lógica principal reside en la raíz del proyecto. Debe ajustar los siguientes parámetros según el entorno del cliente o producto:

### Conexión Web
Localice la constante `APP_URL` al inicio del archivo:
* **Desarrollo:** `const APP_URL = 'http://mi-sistema.test';` (Ruta del servidor local).
* **Producción:** `const APP_URL = 'https://mi-sistema.com';` (Dominio real en producción).

### Comportamiento de Ventana
Ajuste las dimensiones en el constructor de `BrowserWindow`:
* `minWidth` / `minHeight`: Define el límite para que la interfaz web no se rompa según el diseño responsive.
* `autoHideMenuBar: true`: Mantiene la estética limpia ocultando los menús clásicos del sistema operativo.

---

## 🎨 3. Activos visuales (Branding)

Los recursos gráficos de la marca o cliente deben ubicarse en la carpeta `/public` con nombres estandarizados:

1. **`icon.ico`**: Ícono oficial para Windows (Resolución recomendada: 256x256 o superior).
2. **`icon.png`**: Ícono para Linux y Mac (Resolución: 512x512 px con transparencia).

**Importante:** Puede validar el icono maskable como se vera en https://maskable.app.

---

## ⌨️ 4. Comandos de flujo de trabajo

| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `npm install` | Instalación | Descarga las dependencias y el motor de Chromium. |
| `npm start` | Desarrollo | Lanza la aplicación en modo debug para pruebas locales. |
| `npm run make` | Compilación | Genera el instalador final (.exe) en la carpeta `/out`. |

---

## 📦 5. Configuración del Empaquetador (`forge.config.js`)

Este archivo gestiona cómo se crea el instalador final para los distintos sistemas operativos. Modificar este archivo permite generar artefactos para Windows, Linux y macOS.

### Parámetros Centrales
* **`packagerConfig`**: Controla el nombre del ejecutable y la ruta del ícono general.
* **`makers`**: Define qué motores (compiladores) se usarán para generar los instaladores según la plataforma destino.

### Reglas de Compilación Cruzada (Cross-Compilation)
Es vital entender las limitaciones del entorno al momento de ejecutar `npm run make`. **No es posible compilar todos los instaladores automáticamente desde Windows.**

| Sistema Destino | Formato | ¿Compilable desde Windows? | Detalles Técnicos |
| :--- | :--- | :--- | :--- |
| **Windows** | `.exe` | ✅ **Sí** | Compilación nativa directa mediante `maker-squirrel`. |
| **Linux** | `.deb`, `.rpm` | ⚠️ **Sí (con dependencias)** | Requiere tener configurado **WSL** (Subsistema de Windows para Linux) y herramientas como `dpkg`. |
| **macOS** | `.dmg`, `.app` | ❌ **No** | Restricción del ecosistema Apple. Requiere compilar físicamente desde una computadora con macOS. |


## 🚀 6. Pasos de inicialización (Setup)

Si acaba de clonar esta plantilla para un nuevo proyecto, siga este orden de trabajo:

1. **Renombrar:** Actualice el campo `"name"` en el `package.json` respetando el estándar de nomenclatura.
2. **Conectar:** Configure la variable `APP_URL` en `main.js`.
3. **Identidad:** Reemplace los archivos en la carpeta `/public` con el logo del nuevo proyecto.
4. **Instalar:** Ejecute `npm install` en su terminal.
5. **Verificar:** Ejecute `npm start` para validar la correcta conexión con la plataforma web.
6. **Limpiar:** Elimine este archivo `CONFIG.md` si no desea mantener la guía técnica en el repositorio final del cliente.

---