<template>
  <section class="form-page">
    <div class="form-card">
      <h1>Restablecer contraseña</h1>
      <p>Escribe tu nueva contraseña y confirma el cambio.</p>

      <form class="clean-form" @submit.prevent="submitReset">
        <label>
          Nueva contraseña
          <input v-model="newPassword" type="password" placeholder="********" required minlength="6" />
        </label>

        <label>
          Confirmar contraseña
          <input
            v-model="newPasswordConfirmation"
            type="password"
            placeholder="********"
            required
            minlength="6"
          />
        </label>

        <p v-if="error" class="feedback error">{{ error }}</p>
        <p v-if="success" class="feedback success">{{ success }}</p>

        <button class="btn-primary" type="submit" :disabled="loading || !token">
          {{ loading ? "Guardando..." : "Guardar nueva contraseña" }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { auth } from "../services/auth";

const route = useRoute();
const router = useRouter();
const token = computed(() => (typeof route.query.token === "string" ? route.query.token.trim() : ""));
const newPassword = ref("");
const newPasswordConfirmation = ref("");
const error = ref("");
const success = ref("");
const loading = ref(false);

async function submitReset() {
  error.value = "";
  success.value = "";

  if (!token.value) {
    error.value = "No se encontró el token de recuperación.";
    return;
  }

  if (newPassword.value !== newPasswordConfirmation.value) {
    error.value = "Las contraseñas no coinciden.";
    return;
  }

  loading.value = true;

  try {
    const response = await auth.resetPassword(token.value, newPassword.value, newPasswordConfirmation.value);
    success.value = (response.message || "Contraseña actualizada.") + " Redirigiendo al inicio de sesión...";
    newPassword.value = "";
    newPasswordConfirmation.value = "";
    setTimeout(() => {
      router.push("/login");
    }, 1200);
  } catch (err) {
    error.value = err instanceof Error ? err.message : "No fue posible restablecer la contraseña.";
  } finally {
    loading.value = false;
  }
}
</script>
