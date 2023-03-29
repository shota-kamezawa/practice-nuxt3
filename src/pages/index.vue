<script setup>
import { VBtn } from 'vuetify/components/VBtn';
import { VIcon } from 'vuetify/components/VIcon';

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
  <VBtn to="/other">
    <VIcon icon="mdi-magnify" start />
    Go to other
  </VBtn>
</template>
