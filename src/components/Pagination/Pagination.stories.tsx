import type { Meta, StoryObj } from '@storybook/react';
import { sanitizeStringFn } from 'utils';
import { paginationPropsMock, RecordI } from 'mocks';
import { Pagination, Search } from 'components';
import { CustomizedResetButton as SearchStory } from 'components/Search/Search.stories';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const SearchByKey: Story = {
  args: {
    ...paginationPropsMock,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    searchByKey: 'title'
  },
  render: (args) => (
    <Pagination {...args}>
      <Search {...SearchStory.args} />
    </Pagination>
  )
};

const handleSearch = (query: string): RecordI[] => {
  const sanitizedQuery = sanitizeStringFn(query);
  return (
    paginationPropsMock.recordsData.filter((record: RecordI) =>
      sanitizeStringFn(record.title).includes(sanitizedQuery)
    ) || []
  );
};

export const HandleSearch: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    ...paginationPropsMock,
    handleSearch
  },
  render: (args) => (
    <Pagination {...args}>
      <Search {...SearchStory.args} />
    </Pagination>
  )
};
