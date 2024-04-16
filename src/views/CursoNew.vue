<template>
    <div class="row mt-3">
      <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Registrar Curso
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="guardar">
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese el Nombre del Curso" required maxlengths="50" class="form-control">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="text" v-model="horas" id="horas" placeholder="Ingrese las horas para el Curso" required maxlengths="50" class="form-control">
                  </div>
                  <div class="d-grid col-6 mx-auto mb-3">
                      <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Registrar Curso</button>
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
        horas:'',
        url:'http://examenfinalvue.test/api/v1/cursos',
        cargando:false
      }
    },
    methods:{
      guardar(){
        if(this.nombre.trim()===''){
          mostrarAlerta('Ingrese un Nombre Adecuado','warning','nombre')
        } else  if(this.horas.trim()===''){
          mostrarAlerta('Ingrese un Horas Adecuadas','warning','horas')
        }else{
          var parametros = {nombre:this.nombre.trim(),horas:this.horas.trim()}
          enviarSolicitud('POST',parametros,this.url,'Curso Registrado!!');
          this.$router.push('/listarC');
        }
      }
    }
  }
</script>
