<template>
  <button @click="() => onClick()">{{ text }} : {{ count }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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

  // コンポーネントが持つ状態
  data() {
    return {
      count: 0,
    };
  },

  // 計算されたデータ
  computed: {
    doubleCount(): number {
      return this.count * 2;
    },
  },

  // メソッド
  methods: {
    onClick(): void {
      this.count += 1;
      this.$emit('counted', this.count);
    },
  },
});
</script>
