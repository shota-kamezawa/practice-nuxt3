import type { App } from 'vue';
import { Decorator, Parameters, setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';

import '../src/assets/styles/vuetify.scss';

/**
 * @see https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/pinia
 */

setup((vueApp: App) => {
  const setupSymbol = Symbol();

  if (vueApp[setupSymbol]) return;
  vueApp[setupSymbol] = setupSymbol;

  const vuetify = createVuetify({
    ssr: false,
  });

  vueApp.use(vuetify);
});

export const decorators: Decorator[] = [];

export const parameters: Parameters = {};
