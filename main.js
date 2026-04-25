const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

// ==========================================
// CONFIGURACIÓN PRINCIPAL
// ==========================================
const APP_URL = 'https://example.com';  // Cambia a tu URL deseada
const IS_FULLSCREEN = false; // Cambia a true para modo kiosko/videojuego

function createWindow() {
    // Obtenemos el tamaño de la pantalla del usuario
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        width: width,   // Por defecto usa el ancho total
        height: height, // Por defecto usa el alto total
        minWidth: 1000,
        minHeight: 700,
        show: false,    // No mostrar hasta que esté lista (evita el flash blanco)
        autoHideMenuBar: true, 
        fullscreen: IS_FULLSCREEN, 
        icon: path.join(__dirname, 'public', 'icon.ico'), 
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            spellcheck: true
        }
    });

    // Carga la URL
    win.loadURL(APP_URL);

    // ESTRATEGIA DE VISUALIZACIÓN PROFESIONAL
    win.once('ready-to-show', () => {
        win.maximize(); // Maximiza respetando la barra de tareas
        win.show();    // Muestra la ventana solo cuando el contenido ya cargó
    });

    // Opcional: Abrir DevTools solo en desarrollo
    // win.webContents.openDevTools();
}

// ==========================================
// CICLO DE VIDA DE LA APP
// ==========================================

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});