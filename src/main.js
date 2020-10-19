import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueScrollTo from "vue-scrollto";


// list locations of the to-be-routed-components and append individual name for reference.
import Home from "@/pages/home";
import Info from "@/pages/info";
import Nike from "@/components/nike";
import Adidas from "@/components/adidas";
import Idgaf from "@/components/idgaf";

Vue.use(VueScrollTo);
// append filepath; which component will render when the user is on this URL-path?
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/adidas",
        component: Adidas
      },
      {
        path: "/nike",
        component: Nike
      },
      {
        path: "/idgaf",
        component: Idgaf
      }
    ]
  },
  {
    path: "/info",
    component: Info
  }
];

// state which routes to be used
const router = new VueRouter({
  routes
});

// disable the annoying 'running vue in production mode'-warning
Vue.config.productionTip = false;

// render app, append routed and mount to #app
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
