
const express = require('express')
const cors = require('cors')

class Server {

    constructor() {//en el constructor se le crean las propiedades de la clase app, port
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares: funciones que añaden otra funcionalidad a mi web servcer
        //Es una funcion que siempre se va a ajecutar cuando levantemos nuestro servidor
        this.middlewares();

        //Rutas de mi aplicacion 

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json);

        //'use' palabra clave para decir que es un middleware
        this.app.use(express.static('public'));//Directorio publico

    }

    routes() { //metodo
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en ', this.port);
        });
    }
}

module.exports = Server;