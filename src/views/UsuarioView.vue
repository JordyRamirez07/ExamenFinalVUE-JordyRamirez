<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Detelles del Usuario
            </div>
            <div class="card-body">
              <div class="d-grid col-6 mx-auto mb-3">
                <router-link :to="{path:'/'}" class="btn btn-info">
                  <i class="fa-solid fa-arrow-left"></i> Regresar a la Lista
                </router-link>
              </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <label v-text="nombres" class="form-control"></label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <label v-text="apellidos" class="form-control"></label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <label v-text="email" class="form-control"></label>
                  </div>
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
        url:'http://examenfinalvue.test/api/v1/usuarios',
        cargando:false
      }
    },
    mounted(){
      const route = useRoute();
      this.id = route.params.id;
      this.url += '/'+this.id;
      this.getUsuarios();
    },
    methods:{
      getUsuarios(){
        axios.get(this.url).then(
          res=>{
            this.nombres = res.data.data.nombres;
            this.apellidos = res.data.data.apellidos;
            this.email = res.data.data.email;
          }
        );
      },
      actualizar(){
        event.preventDefault();
  
        if(this.nombres.trim()===''){
          mostrarAlerta('Ingrese un Nombre Adecuado para el Usuario','warning','nombres')
        } else  if(this.apellidos.trim()===''){
          mostrarAlerta('Ingrese un Apellido Adecuado para el Usuario','warning','apellidos')
        }else  if(this.email.trim()===''){
          mostrarAlerta('Ingrese un Correo Adecuado para el Usuario','warning','email')
        }else{
        var parametros = {nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),email:this.email.trim()}
          enviarSolicitud('POST',parametros,this.url,'Usuario Registrado!!');
        }
      }
    }
  }
  </script>
  