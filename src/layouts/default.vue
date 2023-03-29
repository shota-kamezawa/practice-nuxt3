<script setup>
import { VApp } from 'vuetify/components/VApp';
import { VMain } from 'vuetify/components/VMain';
import { useLoadingIndicator } from '@/stores/loading-indicator';

import CustomLoadingIndicator from '@/components/custom-loading-indicator/custom-loading-indicator.vue';

const loadingIndicatorStore = useLoadingIndicator();
</script>

<template>
  <CustomLoadingIndicator v-model="loadingIndicatorStore.isLoading" />
  <VApp>
    <VMain>
      <NuxtPage />
    </VMain>
  </VApp>
</template>
