<template>
  <footer class="site-footer">
    <div class="container footer-layout">
      <div class="footer-main"></div>

      <div class="bottom">
        <div class="small">© {{ year }} Reglado Energy. Todos los derechos reservados.</div>
        <div class="small">Transparencia · Rigor técnico · Acompañamiento</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.9);
  min-height: 130px;
  display: flex;
  align-items: stretch;
  padding-inline: clamp(1rem, 2.5vw, 2rem);
}

.container {
  width: min(1100px, 100%);
  margin: 0 auto;
}

.footer-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.footer-main {
  min-height: 20px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0 1.1rem;
  border-top: 1px solid var(--line);
}

.small {
  font-size: 0.9rem;
  color: var(--muted);
}

@media (max-width: 760px) {
  .bottom {
    flex-direction: column;
    gap: 0.4rem;
  }
}
</style>
