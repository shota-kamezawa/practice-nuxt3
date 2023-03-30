import type { Meta, StoryObj } from '@storybook/vue3';

import SampleButton from './script-setup-sample-button.vue';

type Story = StoryObj<typeof SampleButton>;

const meta: Meta<typeof SampleButton> = {
  title: 'SampleButton',
  component: SampleButton,

  render: (args: unknown) => ({
    components: { SampleButton },
    setup: () => {
      return { args };
    },
    template: /* html */ `
      <SampleButton v-bind="args" />
    `,
  }),

  args: {
    text: 'サンプル',
  },
};

export const Default: Story = {
  args: {},
};

export default meta;
