<template>
  <section class="form-page">
    <div class="form-card">
      <h1>{{ title }}</h1>
      <p v-if="!submitted">{{ description }}</p>
      <p v-else>Revisa tu bandeja de entrada y confirma tu cuenta para activar el acceso.</p>

      <form v-if="!submitted" class="clean-form" @submit.prevent="submitRegister">
        <label>
          Nombre de usuario
          <input v-model.trim="username" type="text" placeholder="usuario123" required minlength="3" />
        </label>

        <label>
          Nombre
          <input v-model.trim="firstName" type="text" placeholder="Nombre" required />
        </label>

        <label>
          Apellido
          <input v-model.trim="lastName" type="text" placeholder="Apellido" required />
        </label>

        <label>
          Correo
          <input v-model.trim="email" type="email" placeholder="nombre@correo.com" required />
        </label>

        <label>
          Teléfono
          <input v-model.trim="phone" type="tel" placeholder="+34 600 000 000" required />
        </label>

        <label>
          Contraseña
          <input v-model="password" type="password" placeholder="********" required minlength="6" />
        </label>

        <label>
          Repetir contraseña
          <input v-model="passwordConfirmation" type="password" placeholder="********" required minlength="6" />
        </label>

        <p v-if="error" class="feedback error">{{ error }}</p>
        <p v-if="success" class="feedback success">{{ success }}</p>

        <button class="btn-primary" type="submit" :disabled="loading">
          {{ loading ? "Creando..." : buttonText }}
        </button>
      </form>

      <div v-else class="feedback-card">
        <p class="feedback success">
          Se ha enviado un correo de confirmación a tu dirección de correo. Por favor, confírmalo para continuar.
        </p>

        <button class="btn-outline" type="button" @click="resetFormState">
          Volver al formulario de registro
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../../services/auth";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Guardar",
  },
});

const username = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const loading = ref(false);
const error = ref("");
const success = ref("");
const submitted = ref(false);

async function submitRegister() {
  loading.value = true;
  error.value = "";
  success.value = "";

  if (password.value !== passwordConfirmation.value) {
    error.value = "Las contraseñas no coinciden.";
    loading.value = false;
    return;
  }

  try {
    await auth.register({
      username: username.value,
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    });

    submitted.value = true;
    success.value = "";
    password.value = "";
    passwordConfirmation.value = "";
  } catch (err) {
    error.value = err instanceof Error ? err.message : "No fue posible registrar el usuario.";
  } finally {
    loading.value = false;
  }
}

function resetFormState() {
  submitted.value = false;
  error.value = "";
  success.value = "";
}
</script>

<style scoped>
.feedback-card {
  display: grid;
  gap: 0.9rem;
}

.btn-outline {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 0.72rem 1rem;
  color: var(--text);
  background: #fff;
  cursor: pointer;
  font-weight: 600;
}
</style>

