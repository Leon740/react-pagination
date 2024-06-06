import type { Meta, StoryObj } from '@storybook/react';
import { SearchResultsNotFound } from 'components';

const meta: Meta<typeof SearchResultsNotFound> = {
  component: SearchResultsNotFound,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keywords: ['Mercedes', 'Audi', 'BMW']
  }
};

export const Styled: Story = {
  args: {
    ...Default.args,
    classNames: {
      listClassName: 'flex flex-row flex-wrap gap-4',
      buttonClassName: 'px-2 py-1 rounded-lg border border-black'
    }
  }
};

export const WithChildren: Story = {
  args: {
    ...Default.args,
    ...Styled.args,
    children: <h2>Children</h2>
  }
};
