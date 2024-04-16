<template>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
          <table class="table table-bordered table-secondary table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Nombre Usuario</th>
                  <th>Apellido Usuario</th>
                  <th>Correo</th>
                  <th>Contraseña</th>
                  <th>Fecha Registro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="table-group-divider" id= "contenido"> 
                <tr v-if="this.cargando">
                  <td colspan="7"><h3>Cargando...</h3></td>
                </tr>
                <tr v-esle v-for="est, i in this.usuarios" :key="est.id">
                  <td v-text="(i+1)"></td>
                  <td v-text="est.id"></td>
                  <td v-text="est.nombres"></td>
                  <td v-text="est.apellidos"></td>
                  <td v-text="est.email"></td>
                  <td v-text="est.password"></td>
                  <td v-text="new Date(est.created_at).toLocaleDateString('en-US')"></td>
                  <td>
                    <router-link :to="{path:'viewU/'+est.id}" class="btn btn-outline-info">
                      <i class="fa-solid fa-eye"></i>
                    </router-link>
                    &nbsp;
                    <router-link :to="{path:'editU/'+est.id}" class="btn btn-outline-warning">
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
          usuarios:null,
          cargando:false
        }
      },
      mounted(){
        this.getUsuarios();
      },
      methods:{
        getUsuarios(){
          this.cargando=true;
          axios.get('http://examenfinalvue.test/api/v1/usuarios').then(
            res => {
              this.usuarios = res.data;
              this.cargando = false;
            }
          );
        },
        eliminar(id,nombre){
          confirmar('http://examenfinalvue.test/api/v1/usuarios/',id,'Eliminar Curso','¿Realmente Desea Eliminar al Usuario '+nombre+' ?')
          this.cargando = false;  
        }
      }
    }
  </script>