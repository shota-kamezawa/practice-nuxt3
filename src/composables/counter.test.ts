import { describe, test, expect } from 'vitest';
import { useCounter } from './counter';

describe('composables/counter', () => {
  describe('increment', () => {
    test.concurrent('increment', () => {
      const { count, increment } = useCounter();
      expect(count.value).toEqual(0);

      increment();
      expect(count.value).toEqual(1);

      increment();
      expect(count.value).toEqual(2);
    });

    test.concurrent('increment with initial value', () => {
      const { count, increment } = useCounter(50);
      expect(count.value).toEqual(50);

      increment();
      expect(count.value).toEqual(51);
    });
  });
});
