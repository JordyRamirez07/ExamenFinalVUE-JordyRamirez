<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Editar Usuario
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="actualizar">
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="nombres" id="nombres" placeholder="Ingrese Nombre del Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="apellidos" id="apellidos" placeholder="Ingrese Apellido del Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="email" id="email" placeholder="Ingrese correro del Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="password" id="password" placeholder="Ingrese uns Contraseña del Usuario" required maxlengths="50" class="form-control">
                  </div>
                  <div class="d-grid col-6 mx-auto mb-3">
                      <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Actualizar Usuario</button>
                  </div>
                </form>
            </div>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  import { mostrarAlerta,enviarSolicitud } from '../Funciones'
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  export default{
    data(){
      return{
        id:0,
        nombres:'',
        apellidos:'',
        email:'',
        password:'',
        url:'http://examenfinalvue.test/api/v1/usuarios',
        cargando:false
      }
    },
    mounted(){
      const route = useRoute();
      this.id = route.params.id;
      this.url += '/'+this.id;
      this.getUsuario();
    },
    methods:{
      getUsuario(){
        axios.get(this.url).then(
          res=>{
            this.nombres = res.data.data.nombres;
            this.apellidos = res.data.data.apellidos;
            this.email = res.data.data.email;
            this.password = res.data.data.password;
          }
        );
      },
      actualizar(){
        event.preventDefault();
  
        if(this.nombres.trim()===''){
          mostrarAlerta('Ingrese un Nombre Adecuado','warning','nombres')
        } else  if(this.apellidos.trim()===''){
          mostrarAlerta('Ingrese las Horas Adecuadas','warning','apellidos')
        }else  if(this.email.trim()===''){
          mostrarAlerta('Ingrese las Horas Adecuadas','warning','email')
        }else  if(this.password.trim()===''){
          mostrarAlerta('Ingrese las Horas Adecuadas','warning','password')
        }else {
          var parametros = {nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),email:this.email.trim(),password:this.password.trim()}
          enviarSolicitud('PUT',parametros,this.url,'Usuario Actualizado!!');
        }
      }
    }
  }
  </script>
  