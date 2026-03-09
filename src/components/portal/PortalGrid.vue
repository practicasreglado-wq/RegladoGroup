<template>
  <section id="portales" class="portal-grid">
    <PortalCard
      v-for="portal in portals"
      :key="portal.title"
      :title="portal.title"
      :description="portal.description"
      :href="portal.href"
    />
  </section>
</template>

<script setup>
import PortalCard from "./PortalCard.vue";

defineProps({
  portals: {
    type: Array,
    required: true,
  },
});
</script>
