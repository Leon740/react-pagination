import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from 'components';

const meta: Meta<typeof Loader> = {
  component: Loader,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h2>UI</h2>,
    timeout: 5000
  }
};
