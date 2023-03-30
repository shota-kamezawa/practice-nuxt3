<template>
  <button @click="() => onClick()">{{ text }} : {{ count }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  // 親コンポーネントから受け取るデータ
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  // コンポーネントで発生するイベント
  emits: ['counted'],

  // コンポーネントの初期化
  setup(props, { emit }) {
    // コンポーネントが持つ状態
    const count = ref(0);

    // 計算されたデータ
    const doubleCount = computed(() => count.value * 2);

    // メソッド
    const onClick = (): void => {
      count.value += 1;
      emit('counted', count.value);
    };

    return {
      count,
      doubleCount,
      onClick,
    };
  },
});
</script>
