const { app, BrowserWindow, Menu } = require('electron')
Menu.setApplicationMenu(null);
app.on('ready', ()=>{
	let win = new BrowserWindow()
	win.loadURL('https://dida365.com/signin')
})
