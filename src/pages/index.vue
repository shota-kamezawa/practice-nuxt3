<script setup>
await new Promise((resolve) => {
  console.log(`loading index page... [server: ${process.server}]`);
  setTimeout(resolve, 1000);
});

definePageMeta({
  // layout: 'none',
});
</script>

<template>
  <div>This is index page.</div>
  <NuxtLink to="/other">Go to other</NuxtLink>
</template>
