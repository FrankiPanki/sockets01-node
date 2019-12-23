var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('fin de la conexion');
});

socket.emit('enviarMensaje', {
    usuario: 'FrankiPanki',
    mensaje: 'Boradcast!'
}, function (resp) {
    console.log('Respuesta server',resp);
 })

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});