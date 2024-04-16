<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
          <div class="card-header bg-dark text-white text-center">
              Detelles del Estudiante
          </div>
          <div class="card-body">
            <div class="d-grid col-6 mx-auto mb-3">
              <router-link :to="{path:'/'}" class="btn btn-info">
                <i class="fa-solid fa-arrow-left"></i> Regresar a la Lista
              </router-link>
            </div>
                <div class="d-grid col-6 mx-auto mb-3">
                  <img v-if="this.foto" height="100":src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                  <img v-else height="100" src="https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/student-fill-256.png" 
                class="img-thumbnail" id="fotoimg" alt="">
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                  <label v-text="nombre" class="form-control"></label>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                  <label v-text="apellido" class="form-control"></label>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                  <label v-text="lugar" class="form-control"></label>
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
      apellido:'',
      lugar:'',
      foto:'',
      url:'http://examenfinalvue.test/api/v1/estudiantes',
      cargando:false
    }
  },
  mounted(){
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/'+this.id;
    this.getEstudiante();
  },
  methods:{
    getEstudiante(){
      axios.get(this.url).then(
        res=>{
          this.nombre = res.data.data.nombre;
          this.apellido = res.data.data.apellido;
          this.lugar = res.data.data.lugar;
          this.foto = res.data.data.foto;
        }
      );
    },
    actualizar(){
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
