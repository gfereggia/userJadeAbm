/*
 * GET usuarios list
 */

exports.list = function(req, res){
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM usuarios ORDER BY nombre ASC',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            //res.json(rows);
            res.render('usuarios.jade',{page_title:"Listado de usuarios",data:rows});
                
           
         });
         
         console.log(query.sql);
    }); 
};

exports.add = function(req, res){
    res.render('add_usuarios.jade',{page_title:"Agregar Usuarios"}); 
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM usuarios WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );

            if (rows.length == 0){
              alert ("Usuario inexistente");
            }else{
              res.render('edit_usuarios.jade',{page_title:"Editar Usuario",data:rows});
            }
                     
         });
         
         //console.log(query.sql);
    });      
};

/* Save producto */
exports.save = function(req,res,next){

  console.log(req.body.nombre);
  console.log(req.body.apellido);
  console.log(req.body.email);
  console.log(req.body.password);

  req.getConnection(function (err, connection) {

  var data = {

    nombre : req.body.nombre,
    apellido : req.body.apellido,
    email : req.body.email,
    password : req.body.password

  
  };

  console.log(data);

  var query = connection.query("INSERT INTO usuarios set ? ",data, function(err, rows)
    {

    if (err)
      console.log("Error inserting : %s ",err );

      console.log(query.sql); //get raw query
      res.redirect('/usuarios');

    });

  });

};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
  
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.email);
    console.log(req.body.password);

    req.getConnection(function (err, connection) {
        
        var data = {
            
         nombre : req.body.nombre,
         apellido : req.body.apellido,
         email : req.body.email,
         password : req.body.password
        
        };
        
        connection.query("UPDATE usuarios set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/usuarios');
          
        });
    
    });
};


exports.delete_usuarios = function(req,res){
          
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM usuarios WHERE id = ? ",[id], function(err, rows)
        {
            
            if(err)
               console.log("Error deleting : %s ",err );

            
            res.redirect('/usuarios');
             
        });
        
     });
};

exports.buscar = function(req, res){

    var busqueda = req.params.busqueda;
    console.log("req.params.busqueda: "+req.params.busqueda)

    req.getConnection(function(err,connection){
       
     
      var query = connection.query("SELECT * FROM usuarios where nombre LIKE ? ;",['%' + busqueda + '%'],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            
            console.log(query.sql);    
            res.render('usuarios.jade',{page_title:"Listado de usuarios",data:rows});
                
         });
         
          console.log(query.sql);
    });
  
};

