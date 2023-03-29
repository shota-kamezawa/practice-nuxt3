import { defineStore } from 'pinia';
import { useNuxtApp } from 'nuxt/app';
import { ref } from 'vue';

export const useLoadingIndicator = defineStore('loadingIndicator', () => {
  const isLoading = ref(false);
  const start = () => {
    isLoading.value = true;
  };
  const finish = () => {
    isLoading.value = false;
  };

  const nuxtApp = useNuxtApp();
  nuxtApp.hook('page:start', start);
  nuxtApp.hook('page:finish', finish);

  return {
    isLoading,
    start,
    finish,
  };
});
