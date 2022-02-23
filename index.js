const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
//importamos nuestro archivo de rutas 
const routes = require('./routes');

//creamos el servidor
const app = express();

/*hacemos uso de las sigueintes 2 lineas de codigo para las solicitudes POST y PUT,
 porque en ambas solicitudes está enviando datos  al servidor y le está pidiendo 
 al servidor que acepte o almacene esos datos, que se incluyen en el cuerpo
(es decir, cuerpo requerido) de esa solicitud (POST o PUT)*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:300']
    })
);

//incluimos las rutas
app.use('/', routes());

//habilitar puerto de escucha (listening port)
app.listen(process.env.APP_PORT, () => {
    console.log("Aplicacion en ejecucion");
});