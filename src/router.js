import Vue from "vue";
import VueRouter from 'vue-router';
import Docs from './components/Docs.vue';
import Home from './components/Home.vue';


Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/docs', component: Docs},
  ]
  
const router = new VueRouter({
    routes
  })


export default router;