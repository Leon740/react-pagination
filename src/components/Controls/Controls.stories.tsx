import type { Meta, StoryObj } from '@storybook/react';
import { paginationPropsMock } from 'mocks';
import { Pagination, Controls } from 'components';
import {
  CustomizedSeparators as CustomizedNumbersSeparators,
  Styled as StyledNumbers
} from 'components/Numbers/Numbers.stories';

const meta: Meta<typeof Controls> = {
  component: Controls,
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
      parent:
        'flex items-center justify-between gap-8 py-4 border-t-2 border-black sticky bottom-0 bg-white',
      prevButton: 'text-xl p-2 border border-black rounded-full mr-8',
      nextButton: 'text-xl p-2 border border-black rounded-full ml-8'
    },
    numbersClassNames: StyledNumbers.args?.classNames
  }
};

export const StyledWithCustomizedNumbersSeparators: Story = {
  args: {
    classNames: Styled.args?.classNames,
    numbersClassNames: StyledNumbers.args?.classNames,
    prevNumbersSeparator: CustomizedNumbersSeparators.args?.prevSeparator,
    nextNumbersSeparator: CustomizedNumbersSeparators.args?.nextSeparator
  }
};
