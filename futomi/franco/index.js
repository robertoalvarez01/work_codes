const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/', (req, res) => {
    console.log('Se ha hecho uns peticion...');
    res.send('Te has loggeado al servidor');
});


app.listen(app.get('port'), (req, res) => {
    console.log('Server on port: ' + app.get('port'));
});