import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary, ErrorBoundaryFallback } from 'components';

const meta: Meta<typeof ErrorBoundary> = {
  component: ErrorBoundary,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h2>Children</h2>,
    fallback: ErrorBoundaryFallback
  }
};
