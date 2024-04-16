<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Registrar Estudiante
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="guardar">
                  <div class="d-grid col-6 mx-auto mb-3">
                    <img v-if="this.foto" height="100":src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                    <img v-else height="100"src="https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/student-fill-256.png" 
                  class="img-thumbnail" id="fotoimg" alt="">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese los Nombres del Estudiante" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="apellido" id="apellido" placeholder="Ingrese Los Apellidos del Estudiante" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="lugar" id="lugar" placeholder="Ingrese La Procedencia del Estudiante" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input v-on:change="previsualizarfoto" type="file"  accept="image/png , imgae/jpeg , image/gift"  class="form-control">
                  </div>
                  <div class="d-grid col-6 mx-auto mb-3">
                      <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Registrar Estudiante</button>
                  </div>
                </form>
            </div>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  import { mostrarAlerta,enviarSolicitud } from '../Funciones'

  export default{
    data(){
      return{
        nombre:'',
        apellido:'',
        lugar:'',
        foto:'',
        url:'http://examenfinalvue.test/api/v1/estudiantes',
        cargando:false
      }
    },
    methods:{
      guardar(){
        event.preventDefault();
        var mifoto = document.getElementById('fotoimg');
        this.foto=mifoto.src;

        if(this.nombre.trim()===''){
          mostrarAlerta('Ingrese un Nombre Adecuado','warning','nombre')
        } else  if(this.apellido.trim()===''){
          mostrarAlerta('Ingrese un Apellido Adecuado','warning','apellido')
        } else  if(this.lugar.trim()===''){
          mostrarAlerta('Ingrese una Procedencia Adecuada','warning','lugar')
        }else {
          var parametros = {nombre:this.nombre.trim(),apellido:this.apellido.trim(),lugar:this.lugar.trim(),foto:this.foto.trim()}
          enviarSolicitud('POST',parametros,this.url,'Estudiante Registrado!!');
        }

      },
      previsualizarfoto(event){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function(){
          var mifoto = document.getElementById('fotoimg');
          mifoto.src = reader.result;
          this.foto = mifoto.src;
        } 
      }
    }
  }
</script>
