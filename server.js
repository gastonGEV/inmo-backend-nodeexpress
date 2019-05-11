import express from 'express'; 
import mongoose from 'mongoose';

const server = express(); //traemos todo el framework express

//conexion con mongodb
var mongoDB = 'mongodb://localhost:27017/inmo';
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.listen(3010, () => { console.log('Escuchando el puerto 3010') });  //levantamos el sv, abrimos el puerto 3010 y escuchamos cualquier http

module.exports = server;



