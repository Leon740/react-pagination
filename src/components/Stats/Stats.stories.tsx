import type { Meta, StoryObj } from '@storybook/react';
import { paginationPropsMock } from 'mocks';
import { Pagination, Stats } from 'components';

const meta: Meta<typeof Stats> = {
  component: Stats,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: ''
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};

export const isOptions: Story = {
  args: {
    className: '',
    options: [10, 15, 20]
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
  // decorators: [
  //   (Story) => (
  //     <Pagination {...PaginationDefault.args}>
  //       <Story />
  //     </Pagination>
  //   )
  // ]
};
