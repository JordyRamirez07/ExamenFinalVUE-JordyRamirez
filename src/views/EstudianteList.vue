<template>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
          <table class="table table-bordered table-secondary table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Foto</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Lugar de Procedencia</th>
                  <th>Fecha Registro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="table-group-divider" id= "contenido"> 
                <tr v-if="this.cargando">
                  <td colspan="7"><h3>Cargando...</h3></td>
                </tr>
                <tr v-esle v-for="est, i in this.estudiantes" :key="est.id">
                  <td v-text="(i+1)"></td>
                  <td v-text="est.id"></td>
                  <td>
                    <img v-if="est.foto" style="width: 150 !important;" :src="est.foto" 
                    class="img-thumbnail" alt="">
                    <img v-else style="width: 150 !important;" src="https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/student-fill-256.png" 
                    class="img-thumbnail" alt="">
                  </td>
                  <td v-text="est.nombre"></td>
                  <td v-text="est.apellido"></td>
                  <td v-text="est.lugar"></td>
                  <td v-text="new Date(est.created_at).toLocaleDateString('en-US')"></td>
                  <td>
                    <router-link :to="{path:'viewE/'+est.id}" class="btn btn-outline-info">
                      <i class="fa-solid fa-eye"></i>
                    </router-link>
                    &nbsp;
                    <router-link :to="{path:'editE/'+est.id}" class="btn btn-outline-warning">
                      <i class="fa-solid fa-edit"></i>
                    </router-link>
                    &nbsp;
                    <button class="btn btn-outline-danger" v-on:click="$event =>eliminar(est.id,est.nombre,est.apellido)">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
          </table>  
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    import { confirmar } from '../Funciones'
    export default{
      data(){
        return{
          estudiantes:null,
          cargando:false
        }
      },
      mounted(){
        this.getEstudiantes();
      },
      methods:{
        getEstudiantes(){
          this.cargando=true;
          axios.get('http://examenfinalvue.test/api/v1/estudiantes').then(
            res => {
              this.estudiantes = res.data;
              this.cargando = false;
            }
          );
        },
        eliminar(id,nombre,apellido){
          confirmar('http://examenfinalvue.test/api/v1/estudiantes/',id,'Eliminar Estudiante','¿Realmente Desea Eliminar a '+nombre+' '+apellido+'?')
          this.cargando = false;  
        }
      }
    }
  </script>