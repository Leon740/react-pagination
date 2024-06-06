import type { Meta, StoryObj } from '@storybook/react';
import { Example } from 'components';

const meta: Meta<typeof Example> = {
  component: Example,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
