import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 0,
    onClick: action('onClick')
  }
};

export const WithChildren: Story = {
  args: {
    id: 0,
    onClick: action('onClick'),
    children: <p>children</p>
  }
};

export const Prev: Story = {
  args: {
    onClick: action('onClick'),
    children: <BsChevronLeft />
  }
};

export const Next: Story = {
  args: {
    onClick: action('onClick'),
    children: <BsChevronRight />
  }
};
