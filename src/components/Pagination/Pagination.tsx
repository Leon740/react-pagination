import { useState, useEffect, ReactElement } from 'react';
import { useSearchParams } from 'hooks';
import { PaginationContextProvider } from 'contexts';
import { sanitizeStringFn } from 'utils';

export interface PaginationPropsI<Record> {
  children: ReactElement;
  recordsData: Record[];
  defaultActivePageId?: number;
  showRecordsPerPage?: number;
  // eslint-disable-next-line no-unused-vars
  paginationOnChange?: (pageId: number, recordsPerPage: number) => void;
  isSearchParams?: boolean;
  searchByKey?: keyof Record;
  // eslint-disable-next-line no-unused-vars
  handleSearch?: (query: string) => Record[];
}

interface SearchParamsI {
  [key: string]: string;
  search: string;
  pageId: string;
  recordsPerPage: string;
}

interface getSearchResultsI<Record> {
  searchByKey?: keyof Record;
  // eslint-disable-next-line no-unused-vars
  handleSearch?: (query: string) => Record[] | [];
  query: string;
  records: Record[];
}

function getSearchResults<Record>({
  searchByKey,
  handleSearch,
  query,
  records
}: getSearchResultsI<Record>): Record[] | [] {
  if (searchByKey) {
    const sanitizedQuery = sanitizeStringFn(query);

    return records.filter((record) =>
      sanitizeStringFn(String(record[searchByKey])).includes(sanitizedQuery)
    );
  }

  if (handleSearch) {
    return handleSearch(query);
  }

  return records;
}

export function Pagination<Record>({
  children,
  recordsData,
  defaultActivePageId = 0,
  showRecordsPerPage = 10,
  paginationOnChange,
  isSearchParams = false,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  searchByKey = 'title',
  handleSearch
}: PaginationPropsI<Record>) {
  const initialParams: SearchParamsI = {
    search: '',
    pageId: String(2),
    recordsPerPage: String(showRecordsPerPage)
  };

  const [searchParams, setSearchParams] = useSearchParams(initialParams, isSearchParams);

  const [searchQuery, setSearchQuery] = useState(isSearchParams ? searchParams.search : '');
  const isSearchQuery = searchQuery.length > 1;

  const foundRecords = isSearchQuery
    ? getSearchResults({ searchByKey, handleSearch, query: searchQuery, records: recordsData })
    : recordsData;

  // -1 for the pageId in the url to match with controlsActivePageId
  const [activePageId, setActivePageId] = useState(
    isSearchParams ? Number(searchParams.pageId) - 1 : defaultActivePageId
  );
  const [recordsPerPage, setRecordsPerPage] = useState(
    isSearchParams ? Number(searchParams.recordsPerPage) : showRecordsPerPage
  );

  const pagesQty = Math.ceil(foundRecords.length / recordsPerPage);

  useEffect(() => {
    setActivePageId((id) => {
      // console.log('id', id);
      // console.log('pagesQty', pagesQty);
      // console.log(id < pagesQty);
      // console.log(id < pagesQty ? id : 0);
      if (id > 0) {
        if (pagesQty === 0) {
          return id;
        }
        return id < pagesQty ? id : 0;
      }

      return 0;
    });
  }, [pagesQty]);

  useEffect(() => {
    setSearchParams({
      search: searchQuery,
      // +1 for the pageId in the url to match with controlsActivePageId
      pageId: String(activePageId + 1),
      recordsPerPage: String(recordsPerPage)
    });
    // setSearchParams
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, activePageId, recordsPerPage]);

  useEffect(() => {
    if (paginationOnChange) {
      paginationOnChange(activePageId, recordsPerPage);
    }
    // paginationOnChange
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePageId, recordsPerPage]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    activePageId,
    setActivePageId,

    recordsPerPage,
    setRecordsPerPage,

    searchQuery,
    setSearchQuery,
    isSearchQuery,

    pagesQty,
    recordsData: foundRecords,
    recordsLength: foundRecords.length
  };

  return (
    <PaginationContextProvider<Record> value={contextValue}>{children}</PaginationContextProvider>
  );
}
