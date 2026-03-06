<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">Grupo Reglado</div>

      <nav class="menu">
        <RouterLink to="/">Portal</RouterLink>
        <a href="#portales">Portales</a>
        <a href="#ayuda">Ayuda</a>
      </nav>

      <button class="btn-primary" @click="showLogin = true">Login</button>
    </header>

    <main class="content">
      <RouterView />
    </main>

    <SiteFooter />

    <LoginModal :open="showLogin" @close="showLogin = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import LoginModal from "./components/LoginModal.vue";
import SiteFooter from "./components/SiteFooter.vue";

const showLogin = ref(false);
</script>
