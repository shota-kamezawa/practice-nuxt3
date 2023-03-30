<script setup>
import { VBtn } from 'vuetify/components/VBtn';
import { VIcon } from 'vuetify/components/VIcon';

// メタタグ
useHead({ title: 'サンプルページ' });

// 外部からJSONを取得
const response = await useAsyncData('httpbin', () =>
  $fetch('https://httpbin.org/get'),
);
</script>

<template>
  <div>
    <!-- JSONをそのまま画面に表示 -->
    <pre v-text="response.data.value" />

    <VBtn to="/">
      <VIcon icon="mdi-magnify" start />
      Go to index
    </VBtn>
  </div>
</template>
