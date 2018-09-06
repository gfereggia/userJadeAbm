
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var session = require('express-session');

//load admin route
var usuarios = require('./routes/usuarios');
var dolar = require('./routes/dolar');


var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');


// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.favicon());

app.use(function(req, res, next) { 
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'); 
    next(); 
});

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: '123456', resave: true, saveUninitialized: true}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

app.use(
    
    connection(mysql,{

        host: 'localhost',
        user: 'root',
        password : 'root',
        database:'abm'

    },'pool') 

);


app.get('/', routes.index);

app.get('/usuarios', usuarios.list);
app.get('/usuarios/add', usuarios.add);
app.post('/usuarios/add', usuarios.save);
app.get('/usuarios/delete/:id', usuarios.delete_usuarios);
app.get('/usuarios/edit/:id', usuarios.edit);
app.get('/usuarios/buscar/:busqueda', usuarios.buscar);
app.post('/usuarios/edit/:id',usuarios.save_edit);

app.get('/dolar', dolar.list);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
