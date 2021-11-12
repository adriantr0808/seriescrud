<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Series</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="/nuevopersonaje">Nuevo personaje</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="/modificarpersonaje">Modificar personaje</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Series
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-if='series.length==0'>Cargando...</li>
              <li v-else v-for="(s, index) in series" :key="index">
                <router-link :to="'/detallesserie/' + s.idSerie">{{
                  s.nombre
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Seriesservice from "./../services/Seriesservice";
const service = new Seriesservice();
export default {
  name: "Menu",
  data() {
    return {
      series: [],
    };
  },

  mounted() {
    this.getSeries();
  },

  methods: {
    getSeries() {
      service.getSeries().then((result) => {
        this.series = result;
      });
    },
  },
};
</script>