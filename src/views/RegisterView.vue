<template>
  <RegisterForm
    title="Registro de usuario"
    description="Completa tus datos. Te enviaremos un correo para activar tu cuenta."
    button-text="Crear cuenta"
  />
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import RegisterForm from "../components/auth/RegisterForm.vue";
import { sanitizeExternalReturnTo } from "../utils/redirects";

const route = useRoute();

onMounted(() => {
  const returnTo = sanitizeExternalReturnTo(typeof route.query.returnTo === "string" ? route.query.returnTo : "");
  if (returnTo) {
    sessionStorage.setItem("auth_return_to", returnTo);
  }
});
</script>
