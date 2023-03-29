import { StorybookConfig } from '@storybook/vue3-vite';
import { loadConfigFromFile, mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../src/**/*.stories.@(js|ts)'],

  staticDirs: [{ from: '../src/public', to: '/' }],

  viteFinal: async (config, { configType }) => {
    /**
     * @see https://github.com/storybookjs/builder-vite/issues/85
     */
    // const vitestConfig = await loadConfigFromFile(
    //   {
    //     command: isBuild ? 'build' : 'serve',
    //     mode: isBuild ? 'production' : 'development',
    //   },
    //   path.resolve(__dirname, '../vitest.config.ts'),
    // );

    config!.resolve!.alias!['@'] = path.resolve(__dirname, '../src');
    config!.resolve!.alias!['~'] = path.resolve(__dirname, '../src');

    return mergeConfig(config, {
      // ...vitestConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};

export default config;
