import { createRouter, createWebHistory } from "vue-router";
import PortalView from "../views/PortalView.vue";
import RegisterView from "../views/RegisterView.vue";

const routes = [
  { path: "/", name: "portal", component: PortalView },
  { path: "/registro", name: "registro", component: RegisterView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
