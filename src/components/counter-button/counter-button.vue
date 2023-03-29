<script setup lang="ts">
import { useCounter } from '@/composables/counter';

import { VBtn } from 'vuetify/components/VBtn';

const props = withDefaults(defineProps<{ initialValue?: number }>(), {
  initialValue: 0,
});

const { count, increment } = useCounter(props.initialValue);
</script>

<template>
  <VBtn color="primary" @click="() => increment()">{{ count }}</VBtn>
</template>
