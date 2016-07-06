const path = require("path");
const express = require("express");

const app = express();
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));

const clientes = require(path.join(__dirname, 'clientes.json'));

app.use('/public', publicPath);
app.get('/', function (req, res) {
    res.sendFile(indexPath);
});

app.get('/clientes', function(req, res){
    res.json(clientes);
});

app.listen(3000, function () {
   console.log("listening on port 3000"); 
});
