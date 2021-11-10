<template>
  <div class="container">
    <h1 class="m-4">Detalles de la serie</h1>
    <div class="card" style="width: 18rem">
      <img width="auto" height="auto" :src="serie.imagen" />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">IMBD: {{serie.puntuacion}}</p>
        <router-link class='btn btn-success' :to="'/personajes/'+serie.idSerie">Personajes</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Seriesservice from "./../../services/Seriesservice";

const service = new Seriesservice();
export default {
  name: "DetallesSerie",
  data() {
    return {
      serie: [],
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.buscarSerie();
    
  },
  watch: {
    "$route.params.id"(nextVal, prevVal) {
      if (nextVal != prevVal) {
         this.id = this.$route.params.id;
    this.buscarSerie();
      }
    },
  },
  methods: {
    buscarSerie() {
      service.getSeriesbyId(this.id).then((result) => {
        this.serie = result;
       
      });
    },
  },
};
</script>