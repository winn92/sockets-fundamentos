var socket = io();
//los .on sobre socket son para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//los .emit sobre socket son para emitir o enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Erwin',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});