import type { Meta, StoryObj } from '@storybook/react';
import { paginationPropsMock } from 'mocks';
import { Pagination, NextButton } from 'components';
import { BsChevronRight } from 'react-icons/bs';

const meta: Meta<typeof NextButton> = {
  component: NextButton,
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
    className: 'text-xl p-2 border border-black rounded-full ml-8'
  }
};

function NextButtonCustom() {
  return (
    <span className="flex items-center gap-2">
      <span>Next</span>
      <BsChevronRight />
    </span>
  );
}

export const WithChildren: Story = {
  args: {
    children: <NextButtonCustom />
  }
};

export const StyledWithChildren: Story = {
  args: {
    ...Styled.args,
    ...WithChildren.args
  }
};
