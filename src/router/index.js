import { createRouter, createWebHistory } from "vue-router";
import PortalView from "../views/PortalView.vue";
import RegisterView from "../views/RegisterView.vue";
import EmailVerifiedView from "../views/EmailVerifiedView.vue";
import LoginView from "../views/LoginView.vue";
import SettingsView from "../views/SettingsView.vue";

const routes = [
  { path: "/", name: "portal", component: PortalView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/registro", name: "registro", component: RegisterView },
  { path: "/configuracion", name: "configuracion", component: SettingsView },
  {
    path: "/verificacion-exitosa",
    name: "verificacion-exitosa",
    component: EmailVerifiedView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
