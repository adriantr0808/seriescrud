import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import DetallesSeries from './components/series/DetallesSeries.vue';
import Home from './components/series/Home.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/detallesserie/:id', component: DetallesSeries },
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
