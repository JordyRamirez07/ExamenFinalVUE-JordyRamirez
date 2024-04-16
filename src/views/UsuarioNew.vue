<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Registrar Usuario
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="guardar">
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="nombres" id="nombres" placeholder="Ingrese el Nombre del Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="apellidos" id="apellidos" placeholder="Ingrese el Apellido del Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="email" id="email" placeholder="Ingrese un Email para el Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="password" id="password" placeholder="Ingrese una Contraseña para el Correo" required maxlengths="50" class="form-control">
                  </div>
                  <div class="d-grid col-6 mx-auto mb-3">
                      <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Registrar Usuario</button>
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
        nombres:'',
        apellidos:'',
        email:'',
        password:'',
        url:'http://examenfinalvue.test/api/v1/usuarios',
        cargando:false
      }
    },
    methods:{
      guardar(){
        if(this.nombres.trim()===''){
          mostrarAlerta('Ingrese un Nombre Adecuado','warning','nombres')
        } else  if(this.apellidos.trim()===''){
          mostrarAlerta('Ingrese un Apellido Adecuado','warning','apellidos')
        } else  if(this.email.trim()===''){
          mostrarAlerta('Ingrese un Correo Adecuado','warning','email')
        }else  if(this.password.trim()===''){
          mostrarAlerta('Ingrese una Contraseña Correcta','warning','password')
        }else{
          var parametros = {nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),email:this.email.trim(),password:this.password.trim()}
          enviarSolicitud('POST',parametros,this.url,'Usuario Registrado!!');
          this.$router.push('/listarU');
        }
      }
    }
  }
</script>
