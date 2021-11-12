<template>
<div class='container'>
    <h1 class='m-4'>Nuevo personaje</h1>
     <form style='width:500px; margin: 0 auto; padding:1em; background:beige' method="post" v-on:submit.prevent="insertarPersonaje()">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" 
                     class="form-control" v-model='personaje.nombre' />
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type="text" 
                    class="form-control" v-model='personaje.imagen'/>
                </div>
                <div>
                    <label>Serie</label>
                    <select
                    class="form-control" v-model='personaje.idSerie'>
                    <option v-for='(s,index) in series' :key='index' :value='s.idSerie'>{{s.nombre}}</option>
                    </select>
                </div>
                <button class="btn btn-outline-info mt-4">
                    Agregar personaje
                </button>
            </form>
            </div>
</template>
<script>
import Seriesservices from './../../services/Seriesservice';
const service = new Seriesservices();
export default {
    name:'NuevoPersonaje',
    data(){
        return{
            series:[],
            personaje:{
                idPersonaje:0,
                nombre:'',
                imagen:'',
                idSerie:0
            }
        }
    },
    mounted(){
        this.cargarSeries();
    },
    methods:{
        cargarSeries(){
            service.getSeries().then((result) =>{
                this.series=result;
                console.log(this.series);
            });
        },

        insertarPersonaje(){
            this.personaje.idPersonaje = parseInt(this.personaje.idPersonaje);
            this.personaje.idSerie = parseInt(this.personaje.idSerie);
            service.postPersonaje(this.personaje).then((result)=>{
                console.log(result);
                this.$router.push('/personajes/'+this.personaje.idSerie);
            });
        }

       
    }
}
</script>