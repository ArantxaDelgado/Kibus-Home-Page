import Vue from "vue";
import VueRouter from 'vue-router'

import ProductosVue from "./components/views/Productos.vue";
import FooterVue from "./components/views/Footer.vue";
import HomeVue from "./components/views/Home.vue";
import HomeVue from "./components/views/Typeform.vue";
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeVue
    },

    {
      path: "/productos",
      name: "productos",
      component: ProductosVue
    },

    {
      path: "/footer",
      name: "footer",
      component: FooterVue
    },

    {
      path: "/Typeform",
      name: "Typeform",
      component: TypeformVue
    },
  ];
  
  export default router;