require('dotenv').config();//el .config() toma todo el archivo dotenv y establece las variables de entorno

const Server = require('./models/server');


const server = new Server();


server.listen();

