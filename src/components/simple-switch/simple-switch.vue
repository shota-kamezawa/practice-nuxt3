<script setup lang="ts">
import { computed } from 'vue';

import { VSwitch } from 'vuetify/components/VSwitch';

const props = defineProps<{ modelValue: boolean; label?: string }>();

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: boolean): void;
}>();

const modelValueSync = computed({
  get: () => props.modelValue,
  set: (newValue: boolean) => emit('update:modelValue', newValue),
});
</script>

<template>
  <VSwitch v-model="modelValueSync" :label="label" />
</template>
