<template>
  <button @click="() => onClick()">{{ text }} : {{ count }}</button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 親コンポーネントから受け取るデータ
const props = defineProps<{ text: string }>();

// コンポーネントで発生するイベント
const emit = defineEmits<{
  (e: 'counted', value: number): void;
}>();

// コンポーネントが持つ状態
const count = ref(0);

// 計算されたデータ
const doubleCount = computed(() => count.value * 2);

// メソッド
const onClick = (): void => {
  count.value += 1;
  emit('counted', count.value);
};
</script>
