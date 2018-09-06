function addUsuario(){
            
    window.location.href = '/usuarios/add';
}

function cancelAddUsuario(){
    
    window.location.href = '/usuarios';
}

function buscarUsuario(){
    var busqueda = $("#buscarUsuario").val();
    console.log(busqueda)
    if(busqueda == ''){
        alert('Ingrese un parametro de busqueda valido');
    }else{     
        window.location.href = '../../usuarios/buscar/' + busqueda
    }
    // alert($("#buscarEmpresa").val();)
}

// detect enter keypress
function usuario(){
    $(document).keypress(function(e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            buscarUsuario();
            // alert('You pressed enter! - keypress');
        }
    });
}

// detect enter keypress
function empleado(){
    $(document).keypress(function(e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            buscarEmpleado();
            // alert('You pressed enter! - keypress');
        }
    });
}

function borrarUsuario(id){
    if(confirm("Desea eliminar el usuario?")){
        window.location.href = '../../usuarios/delete/' + id;
    }
}