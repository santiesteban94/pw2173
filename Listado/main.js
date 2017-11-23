const {app, BrowserWindow}=require('electron');
const path=require('path');
const url=require('url');
// const $ = require('jquery');
// constantes para PDF
const electron = require('electron')
//Sistema de archivos
const fs =require('fs')
//Acceso al sistema operativo
const os = require('os');
//Para declarar una función remota
const ipc = electron.ipcMain;
//Acceso a la terminal-linea de comandos
const shell = electron.shell;


//ECMASCRIPT = 6
let PantallaDetalle;
//Objeto global para compartir datos
//entre pantallas
global.infoUsuarios ={
	nombre: '',
	genero: '',
	foto: '',
	direccion: '',
	telefono: ''
}

function muestraPantallaPrincipal(){
	PantallaPrincipal=new BrowserWindow({width:320,height:425});
	PantallaPrincipal.loadURL({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
//PantallaDetalle.webContents.openDevTools();
PantallaDetalle.show();
}

//Evento para PDF (declaración)
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
			fs.writeFile(pdfPath,data,function(error){})
		if(error){
			throw error
		}
		shell.openExternal('file://'+pdfPath)
		win.close()
	})
});

app.on('ready',muestraPantallaPrincipal)
	// if(error){
	// 		throw error
	// 	}
	// 	shell.openExternal('file://'+pdfPath)
	// 	win.close()
// function datos(nombre,genero,foto,direccion,telefono)
// {
// 	this.nombre    = nombre;
// 	this.genero    = genero;
// 	this.foto      = foto;
// 	this.direccion = direccion;
// 	this.telefono  = telefono;
// }

// var usuarios = new Array(20);
// function inicia()
// {
// 	$.ajax({
// 	  url: 'https://randomuser.me/api/?results=20',
// 	  dataType: 'json',
// 	  success: function(data) {
// 	  	var resultado ="";
// 	  	var nombre    ="";
// 	  	var genero    ="";
// 	  	var direccion ="";
// 	  	var telefono  ="";
// 	  	for(var i=0;i<20;i++)
// 	  	{
// 	  		nombre = data.results[i].name.first+" "+data.results[i].name.last;
// 	  		genero = data.results[i].gender;
// 	  		direccion  = data.results[i].location.street;
// 	  		telefono = data.results[i].phone;
// 	  		foto = data.results[i].picture.medium;
// 	  		resultado="<li><img src="+foto+">"+nombre+"<button id='"+i+"'>Detalle</button></li>";
// 	  		$("#lstUsuarios").append(resultado);
// 	  		usuarios[i] = new datos(nombre,genero,foto,direccion,telefono);
// 	  	}	  	
// 	  }
// 	});
// }

// function botonDetalle(){
// 	// alert(usuarios[this.id].nombre);
// 	// alert(usuarios[this.id].genero);
// 	// alert(usuarios[this.id].foto);
// 	PantallaDetalle=new BrowserWindow({width:320,height:425});
// 	PantallaDetalle.loadURL({
// 		pathname: path.join(__dirname,'detalleusuarios.html'),
// 		protocol: 'file',
// 		slashes: true
// 	}));
// }


// $("body").on("click","li > button",botonDetalle);

// inicia();
