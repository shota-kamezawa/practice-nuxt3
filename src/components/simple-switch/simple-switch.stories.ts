import type { Meta, StoryObj } from '@storybook/vue3';
import { useArgs } from '@storybook/client-api';

import SimpleSwitch from './simple-switch.vue';

type Story = StoryObj<typeof SimpleSwitch>;

const meta: Meta<typeof SimpleSwitch> = {
  title: 'SimpleSwitch',
  component: SimpleSwitch,

  render: (args) => {
    const [, updateArgs] = useArgs();

    return {
      components: { SimpleSwitch },
      setup: () => ({
        args,
        updateArgs,
      }),
      template: /* html */ `
        <SimpleSwitch
          v-bind="args"
          @update:modelValue="updateArgs({ modelValue: $event })"
        />
      `,
    };
  },

  args: {
    modelValue: false,
  },
};

export default meta;

export const Default: Story = {
  args: {
    // modelValue: false,
  },
};

export const Enabled: Story = {
  args: {
    modelValue: true,
  },
};

export const Labeled: Story = {
  args: {
    label: 'Simple Switch',
  },
};
