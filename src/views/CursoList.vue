<template>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
          <table class="table table-bordered table-secondary table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Nombre del Curso</th>
                  <th>Horas</th>
                  <th>Fecha Registro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="table-group-divider" id= "contenido"> 
                <tr v-if="this.cargando">
                  <td colspan="7"><h3>Cargando...</h3></td>
                </tr>
                <tr v-esle v-for="est, i in this.cursos" :key="est.id">
                  <td v-text="(i+1)"></td>
                  <td v-text="est.id"></td>
                  <td v-text="est.nombre"></td>
                  <td v-text="est.horas"></td>
                  <td v-text="new Date(est.created_at).toLocaleDateString('en-US')"></td>
                  <td>
                    <router-link :to="{path:'viewC/'+est.id}" class="btn btn-outline-info">
                      <i class="fa-solid fa-eye"></i>
                    </router-link>
                    &nbsp;
                    <router-link :to="{path:'editC/'+est.id}" class="btn btn-outline-warning">
                      <i class="fa-solid fa-edit"></i>
                    </router-link>
                    &nbsp;
                    <button class="btn btn-outline-danger" v-on:click="$event =>eliminar(est.id,est.horas)">
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
          cursos:null,
          cargando:false
        }
      },
      mounted(){
        this.getCursos();
      },
      methods:{
        getCursos(){
          this.cargando=true;
          axios.get('http://examenfinalvue.test/api/v1/cursos').then(
            res => {
              this.cursos = res.data;
              this.cargando = false;
            }
          );
        },
        eliminar(id,nombre){
          confirmar('http://examenfinalvue.test/api/v1/cursos/',id,'Eliminar Curso','¿Realmente Desea Eliminar el '+nombre+' ?')
          this.cargando = false;  
        }
      }
    }
  </script>