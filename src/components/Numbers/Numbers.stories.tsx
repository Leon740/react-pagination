import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, Numbers } from 'components';
import { paginationPropsMock } from 'mocks';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const meta: Meta<typeof Numbers> = {
  component: Numbers,
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
    classNames: {
      parent: 'flex gap-2 items-center',
      buttonBase: 'p-2 mx-2 border border-black',
      buttonActive: 'bg-slate-700'
    }
  }
};

function PrevSeparator() {
  return (
    <div>
      <BsChevronLeft />
    </div>
  );
}
function NextSeparator() {
  return (
    <div>
      <BsChevronRight />
    </div>
  );
}

export const CustomizedSeparators: Story = {
  args: {
    prevSeparator: PrevSeparator,
    nextSeparator: NextSeparator
  }
};

export const StyledWithCustomizedSeparators: Story = {
  args: {
    ...Styled.args,
    ...CustomizedSeparators.args
  }
};
