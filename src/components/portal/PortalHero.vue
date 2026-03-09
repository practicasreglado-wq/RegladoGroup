<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>
