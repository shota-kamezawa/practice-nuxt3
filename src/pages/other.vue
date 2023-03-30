<script setup>
await new Promise((resolve) => {
  console.log(`loading other page... [server: ${process.server}]`);
  setTimeout(resolve, 1000);
});

definePageMeta({
  layout: 'plain',
});
</script>

<template>
  <div>
    <div>This is other page.</div>
    <NuxtLink to="/">Go to index</NuxtLink>
  </div>
</template>
