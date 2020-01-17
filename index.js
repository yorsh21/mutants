var express = require('express');
var mutant = require('./mutant');
var app = express();

app.get('/', function (req, res) {
    res.send('Send POST request to determine if a person is mutant from their DNA');
});

app.get('/mutant', function (req, res) {
	let dns = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
	let test = mutant.isMutant(dns);

    res.send(test);
});

app.use(function(req, res, next) {
    res.status(404).send("Esta ruta no existe.");
});

app.listen(3000, function () {
    console.log('APP escuchando en el puerto 3000.');
});