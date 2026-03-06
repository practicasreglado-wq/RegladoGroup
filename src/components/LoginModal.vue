<template>
  <div v-if="open" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="Login">
      <div class="modal-head">
        <h2>Iniciar sesión</h2>
        <button class="icon-btn" @click="$emit('close')" aria-label="Cerrar">x</button>
      </div>

      <form class="clean-form" @submit.prevent>
        <label>
          Email
          <input type="email" placeholder="usuario@tuempresa.com" required />
        </label>

        <label>
          Contraseña
          <input type="password" placeholder="********" required />
        </label>

        <button class="btn-primary" type="submit">Entrar</button>
      </form>

      <p class="register-text">
        ¿No tienes cuenta?
        <RouterLink to="/registro" @click="$emit('close')">Regístrate</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);
</script>
