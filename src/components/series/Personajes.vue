<template>
    <div class='container'>
    <h1 class='m-4'>Personajes</h1>
    <router-link class='btn btn-danger' :to="'/detallesserie/'+this.idSerie">Volver</router-link>
    <table v-if='personajes' class='table table-dark table-striped'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(p, index) in personajes" :key='index'>
                <td>{{p.nombre}}</td>
                <td><img width='auto' height='200px' :src='p.imagen'></td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
import Seriesservice from './../../services/Seriesservice';
const service = new Seriesservice();
export default {
    name:'Personajes',
    data(){
        return{
            personajes:null,
            idSerie:0
        }
    },
    mounted(){
         this.idSerie=this.$route.params.idSer;
        this.cargarPersonajes();
       
    },
    methods: {
        cargarPersonajes(){
            service.getPersonajesbyIdSerie(this.idSerie).then((result) => {
                this.personajes = result;
                
            });
        }
    }
}
</script>