const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {});
}

let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({ transparent: true, frame: false, fullscreen: true, resizable: false });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/Home.html'),
        protocol: 'file',
        slashes: true
    }));
});