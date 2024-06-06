import type { Meta, StoryObj } from '@storybook/react';
import { paginationPropsMock } from 'mocks';
import { Pagination, Search } from 'components';
import { BsXLg } from 'react-icons/bs';

const meta: Meta<typeof Search> = {
  component: Search,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};

export const Styled: Story = {
  args: {
    classNames: {
      input: 'border border-black rounded-lg w-full p-2',
      paragraph: 'mt-4',
      resetButton: 'absolute top-1/2 -translate-y-1/2 right-2'
    }
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};

export const StyledWithPlaceholder: Story = {
  args: {
    classNames: Styled.args?.classNames,
    placeholder: 'Search'
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};

function ResetButton() {
  return (
    <span className="flex items-center gap-2">
      <span>Reset</span>
      <BsXLg />
    </span>
  );
}

export const CustomizedResetButton: Story = {
  args: {
    ...StyledWithPlaceholder.args,
    resetButton: ResetButton
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};
