<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Detelles del Curso
            </div>
            <div class="card-body">
              <div class="d-grid col-6 mx-auto mb-3">
                <router-link :to="{path:'/'}" class="btn btn-info">
                  <i class="fa-solid fa-arrow-left"></i> Regresar a la Lista
                </router-link>
              </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <label v-text="nombre" class="form-control"></label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <label v-text="horas" class="form-control"></label>
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
        nombre:'',
        horas:'',
        url:'http://examenfinalvue.test/api/v1/cursos',
        cargando:false
      }
    },
    mounted(){
      const route = useRoute();
      this.id = route.params.id;
      this.url += '/'+this.id;
      this.getCurso();
    },
    methods:{
      getCurso(){
        axios.get(this.url).then(
          res=>{
            this.nombre = res.data.data.nombre;
            this.horas = res.data.data.horas;
          }
        );
      },
      actualizar(){
        event.preventDefault();
  
        if(this.nombre.trim()===''){
          mostrarAlerta('Ingrese un Nombre Adecuado para el Curso','warning','nombre')
        } else  if(this.horas.trim()===''){
          mostrarAlerta('Ingrese las Horas Adecuadas','warning','horas')
        }else {
          var parametros = {nombre:this.nombre.trim(),horas:this.horas.trim()}
          enviarSolicitud('POST',parametros,this.url,'Curso Registrado!!');
        }
      }
    }
  }
  </script>
  