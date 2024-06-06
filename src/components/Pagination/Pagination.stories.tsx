import type { Meta, StoryObj } from '@storybook/react';
import { sanitizeStringFn } from 'utils';
import { Pagination, Search } from 'components';
import postsData from 'data/posts.mock.json';
import { CustomizedResetButton as SearchStory } from 'components/Search/Search.stories';
import { RecordI } from 'mocks';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recordsData: postsData.posts,
    showRecordsPerPage: 10
  }
};

export const SearchByKey: Story = {
  args: {
    ...Default.args,
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Default.args?.recordsData?.filter((record: RecordI) =>
      sanitizeStringFn(record.title).includes(sanitizedQuery)
    ) || []
  );
};

export const PaginationHandleSearch: Story = {
  args: {
    ...Default.args,
    handleSearch
  },
  render: (args) => (
    <Pagination {...args}>
      <Search {...SearchStory.args} />
    </Pagination>
  )
};
