<template>
  <a class="portal-card" :href="href" target="_blank" rel="noreferrer">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </a>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>
