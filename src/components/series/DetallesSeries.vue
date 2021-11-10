<template>
  <div class="container">
    <h1 class="m-4">Detalles de la serie</h1>
    <div class="card" style="width: 18rem">
      <img width="auto" height="400px" :src="serie.imagen" />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">IMBD:</p>
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
        this.buscarSerie();
      }
    },
  },
  methods: {
    buscarSerie() {
      service.getSeriesbyId(this.id).then((result) => {
        this.serie = result;
        console.log(this.serie);
      });
    },
  },
};
</script>