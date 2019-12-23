const { io } = require('../server')
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', { usuario: 'Administrador', mensaje: 'Bienvenido a esta aplicacio' });

    client.on('disconnect', (client) => {
        console.log('usuario desconectado');
    })

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!'
        //     });

        // }
    });

});