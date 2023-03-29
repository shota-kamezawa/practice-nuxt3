<script setup lang="ts">
/**
 * @see https://nuxt.com/docs/api/components/nuxt-loading-indicator/
 */

import { VOverlay } from 'vuetify/components/VOverlay';
import { VProgressCircular } from 'vuetify/components/VProgressCircular';

const props = defineProps<{ modelValue: boolean }>();
</script>

<template>
  <VOverlay
    content-class="w-100 h-100 d-flex justify-center align-center"
    :model-value="props.modelValue"
    persistent
  >
    <VProgressCircular color="white" indeterminate size="100" width="10" />
  </VOverlay>
</template>
