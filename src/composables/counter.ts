import { ref, readonly } from 'vue';

export const useCounter = (initialValue: number = 0) => {
  const count = ref(initialValue);

  const increment = () => {
    count.value += 1;
  };

  return {
    count: readonly(count),
    increment,
  };
};
