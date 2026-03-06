<template>
  <section class="form-page">
    <div class="form-card">
      <h1>Registro de usuario</h1>
      <p>Completa tus datos para solicitar acceso al portal corporativo.</p>

      <form class="clean-form" @submit.prevent>
        <label>
          Nombre completo
          <input type="text" placeholder="Tu nombre" required />
        </label>

        <label>
          Email corporativo
          <input type="email" placeholder="nombre@tuempresa.com" required />
        </label>

        <label>
          Departamento
          <input type="text" placeholder="Ej. Operaciones" required />
        </label>

        <label>
          Contraseña
          <input type="password" placeholder="********" required />
        </label>

        <button class="btn-primary" type="submit">Crear cuenta</button>
      </form>
    </div>
  </section>
</template>
