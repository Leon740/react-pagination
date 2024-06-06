import type { Meta, StoryObj } from '@storybook/react';
import { paginationPropsMock } from 'mocks';
import { Pagination, PrevButton } from 'components';
import { BsChevronLeft } from 'react-icons/bs';

const meta: Meta<typeof PrevButton> = {
  component: PrevButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Styled: Story = {
  args: {
    className: 'text-xl p-2 border border-black rounded-full mr-8'
  }
};

function PrevButtonCustom() {
  return (
    <span className="flex items-center gap-2">
      <span>Prev</span>
      <BsChevronLeft />
    </span>
  );
}

export const WithChildren: Story = {
  args: {
    children: <PrevButtonCustom />
  }
};

export const StyledWithChildren: Story = {
  args: {
    ...Styled.args,
    ...WithChildren.args
  }
};
