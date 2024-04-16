import axios from "axios";
import Swal from "sweetalert2";

export function mostrarAlerta(titulo,icono,foco=''){
    if(foco!=''){
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary',popup:'animated zoonIn'},
        buttonsStyling:false    
    });
}

export function confirmar(urlconSlash, id, titulo, mensaje) {
    var url = urlconSlash + id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' }
    });

    swalWithBootstrapButton.fire({
        title: titulo,
        text: mensaje,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-chek"></i> Si, Eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'}).then((res) => {
        if (res.isConfirmed) {
            enviarSolicitud('DELETE', { id: id }, url, 'Eliminado con Éxito');
        } else {
            mostrarAlerta('Operación Cancelada', 'info');
        }
    });

}

export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(res){
        var estado = res.status;
        if(estado == 200){
            mostrarAlerta(mensaje,'success');
            window.setTimeout(function(){
                window.location.href='/'
            },1000);
        }else{
        mostrarAlerta('Error de Servidor','error');
        }
    }).catch(function(error){
        mostrarAlerta('Servidor no Disponible','error')
        });
}   