<template>
  <header ref="headerRef" class="topbar">
    <RouterLink class="brand-link" to="/" aria-label="Ir al inicio">
      <img :src="logoSrc" alt="Reglado Energy" class="brand-logo" />
      <span class="brand">Grupo Reglado</span>
    </RouterLink>

    <nav class="menu">
      <RouterLink to="/">Portal</RouterLink>
      <a href="#portales">Portales</a>
      <a href="#ayuda">Ayuda</a>
    </nav>

    <div class="session-box">
      <template v-if="user">
        <div class="user-menu-wrap">
          <button
            class="user-pill user-menu-trigger"
            @click="toggleUserMenu"
            aria-haspopup="menu"
            :aria-expanded="userMenuOpen ? 'true' : 'false'"
          >
            {{ displayUsername }}
          </button>

          <div v-if="userMenuOpen" class="user-menu" role="menu" aria-label="Menu de usuario">
            <button class="user-menu-item" type="button" role="menuitem" @click="goToSettings">
              Configuracion
            </button>
            <button class="user-menu-item danger" type="button" role="menuitem" @click="logout">
              Cerrar sesion
            </button>
          </div>
        </div>
      </template>
      <button v-else class="btn-primary" @click="$emit('open-login')">Login</button>
    </div>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import logoSrc from "../assets/reglado-energy-logo.svg";

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["open-login", "logout"]);
const router = useRouter();

const userMenuOpen = ref(false);
const headerRef = ref(null);

const displayUsername = computed(() => {
  const username = props.user?.username;
  if (typeof username === "string" && username.trim() !== "") {
    return username.trim();
  }
  return props.user?.name || "Usuario";
});

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value;
}

function logout() {
  userMenuOpen.value = false;
  emit("logout");
}

function goToSettings() {
  userMenuOpen.value = false;
  router.push("/configuracion");
}

function handlePointerDown(event) {
  if (!userMenuOpen.value) {
    return;
  }

  const headerEl = headerRef.value;
  if (headerEl && !headerEl.contains(event.target)) {
    userMenuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("pointerdown", handlePointerDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", handlePointerDown);
});
</script>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(6px);
}

.brand {
  font-weight: 700;
  letter-spacing: 0.03em;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  justify-self: start;
}

.brand-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.menu {
  display: flex;
  gap: 1rem;
  justify-self: center;
}

.session-box {
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.user-menu-wrap {
  position: relative;
}

.user-pill {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.9rem;
  background: #fff;
}

.user-menu-trigger {
  cursor: pointer;
}

.user-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 170px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  padding: 0.35rem;
  display: grid;
  gap: 0.25rem;
  z-index: 60;
}

.user-menu-item {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 9px;
  background: #fff;
  color: var(--text);
  text-align: left;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
}

.user-menu-item:hover {
  background: var(--surface-soft);
}

.user-menu-item.danger {
  color: #b42318;
}

.menu a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 500;
}

.menu a:hover {
  color: var(--text);
}

@media (max-width: 760px) {
  .topbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .menu {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.2rem;
  }
}
</style>
