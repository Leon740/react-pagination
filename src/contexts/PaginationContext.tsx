import { createContext, useContext, ReactNode } from 'react';

export interface PaginationContextValueI<RecordI> {
  activePageId: number;
  setActivePageId: React.Dispatch<React.SetStateAction<number>>;
  recordsPerPage: number;
  setRecordsPerPage: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isSearchQuery: boolean;
  pagesQty: number;
  recordsData: Array<RecordI>;
  recordsLength: number;
}

export const PaginationContext = createContext<PaginationContextValueI<any>>({
  activePageId: 0,
  setActivePageId: () => {},
  recordsPerPage: 10,
  setRecordsPerPage: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  isSearchQuery: false,
  pagesQty: 0,
  recordsData: [],
  recordsLength: 0
});

interface PaginationContextProviderPropsI<RecordI> {
  value: PaginationContextValueI<RecordI>;
  children: ReactNode;
}

export function PaginationContextProvider<RecordI>({
  value,
  children
}: PaginationContextProviderPropsI<RecordI>) {
  return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>;
}

export const usePaginationContext = () => useContext(PaginationContext);
