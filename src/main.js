import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import DetallesSeries from './components/series/DetallesSeries.vue';
import Personajes from './components/series/Personajes.vue';
import Home from './components/series/Home.vue';
import NuevoPersonaje from './components/series/NuevoPersonaje.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/detallesserie/:id', component: DetallesSeries },
  { path: '/home', component: Home },
  { path: '/personajes/:idSer', component: Personajes },
  {path: '/nuevopersonaje',component: NuevoPersonaje }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
