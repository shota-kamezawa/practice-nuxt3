import type { Meta, StoryObj } from '@storybook/vue3';

import CounterButton from './counter-button.vue';

type Story = StoryObj<typeof CounterButton>;

const meta: Meta<typeof CounterButton> = {
  title: 'CounterButton',
  component: CounterButton,
};

export const Default: Story = {
  render: () => ({
    components: { CounterButton },
    template: /* html */ `
      <CounterButton />
    `,
  }),
};

export default meta;
