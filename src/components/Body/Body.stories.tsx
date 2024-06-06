import type { Meta, StoryObj } from '@storybook/react';
import { paginationPropsMock, RecordI } from 'mocks';
import { sanitizeStringFn } from 'utils';
import { Pagination, Body, SearchResultsNotFound } from 'components';
import { BiLoaderAlt } from 'react-icons/bi';

const meta: Meta<typeof Body<RecordI>> = {
  component: Body,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    loaderOverlayClassName: '',
    renderRecords: (recordsToShow, recordsLength, searchQuery, isSearchQuery) =>
      recordsLength ? (
        <ul className="flex flex-col gap-8 pb-16">
          {recordsToShow.map(({ id, title }, index) => (
            <li key={`post_${id}`} className="p-4 rounded-lg border border-black">
              <h2 className="text-yellow-500">{index}</h2>
              <h3 className="text-red-600">{id}</h3>
              <h4 className="text-lg">
                {isSearchQuery ? (
                  <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: sanitizeStringFn(title).replace(
                        sanitizeStringFn(searchQuery),
                        `<span class='bg-yellow-500'>${searchQuery}</span>`
                      )
                    }}
                  />
                ) : (
                  title
                )}
              </h4>
            </li>
          ))}
        </ul>
      ) : (
        <SearchResultsNotFound
          keywords={['Mercedes', 'Audi', 'BMW']}
          classNames={{
            listClassName: 'flex flex-row flex-wrap gap-4',
            buttonClassName: 'px-2 py-1 rounded-lg border border-black'
          }}
        />
      )
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};

export const CustomizedLoader: Story = {
  args: {
    ...Default.args,
    loader: BiLoaderAlt
  },
  decorators: [
    (Story) => (
      <Pagination {...paginationPropsMock}>
        <Story />
      </Pagination>
    )
  ]
};
