<template>
  <div>
    <h1 class="m-4">Modificar personaje</h1>
    <form
      style="width: 500px; margin: 0 auto; padding: 1em; background: beige"
      method="post" v-on:submit.prevent='modificarPersonaje()'
    >
      <div>
        <label>Seleccione una serie: </label>
        <select  @change='cargarSerieSeleccionada()' class="form-control" v-model='serieSelec'>
          <option v-for='(s,index) in series' :key='index' :value='s.idSerie' >{{s.nombre}}</option>
        </select>
      </div>
      <div>
        <label>Seleccione un personaje: </label>
        <select @change='cargarPersonajeSelecciconado()' class="form-control" v-model='personajeSelec'>
           <option v-for='(p, index) in personajes' :key='index' :value='p.idPersonaje'>{{p.nombre}}</option>
        </select>
      </div>
      <button class="btn btn-outline-info mt-4">Modificar personaje</button>
    </form>
   <div class='m-4'>
     <h2>{{serieSelecArr.nombre}}</h2>
     <img :src='serieSelecArr.imagen' height="200px">
   </div>
   <div class='m-4'>
     <h2>{{personajeSelecObj.nombre}}</h2>
     <img :src='personajeSelecObj.imagen' height="200px">
   </div>
  </div>
</template>

<script>
import Seriesservices from './../../services/Seriesservice';
const service = new Seriesservices();
export default {
  name: "ModificarPersonaje",
  data(){
    return{
      series:[],
      personajes:[],
      serieSelec:0,
      personajeSelec:0,
      serieSelecArr:{},
      personajeSelecObj:{},
      

    }
  },

  mounted(){
    this.cargarSeries();
    this.cargarPersonajes();
   
  },
  methods:{
      cargarSeries(){
            service.getSeries().then((result) =>{
                this.series=result;
                
            });
        },

        cargarPersonajes(){
          service.getPersonajes().then((result) => {
            this.personajes=result;
            
          });
        },
         cargarSerieSeleccionada(){
           service.getSeriesbyId(this.serieSelec).then((result)=>{
             this.serieSelecArr=result;
              console.log(this.serieSelecArr);
           });
        },

        cargarPersonajeSelecciconado(){
          service.getPersonajeById(this.personajeSelec).then((result)=>{
            this.personajeSelecObj = result;
            console.log(this.personajeSelecObj);
          });
        },

        modificarPersonaje(){
          service.updatePersonaje(this.personajeSelec, this.serieSelec).then((res) => {
              console.log(res);
              this.$router.push('/detallesserie/'+this.serieSelec);
          });
        }
  }

};


</script>

<style>
</style>