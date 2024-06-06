/* eslint-disable no-unused-vars */
import { useState, useEffect, FC, ReactNode } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { usePaginationContext } from 'contexts';

interface BodyPropsI<Record> {
  className?: string;
  renderRecords: (
    recordsToShow: Record[],
    recordsLength: number,
    searchQuery: string,
    isSearchQuery: boolean
  ) => ReactNode;
  isLoader: boolean;
  // 1: no loader
  // 2: default loader
  // 3: custom loader
  loader?: FC;
  loaderOverlayClassName?: string;
}

export function Body<Record>({
  className = '',
  renderRecords,
  isLoader = true,
  // 1: no loader
  // 2: default loader
  // 3: custom loader
  loader: Loader,
  loaderOverlayClassName = ''
}: BodyPropsI<Record>) {
  const { recordsData, activePageId, recordsPerPage, recordsLength, searchQuery, isSearchQuery } =
    usePaginationContext();

  const [recordsToShow, setRecordsToShow] = useState<typeof recordsData>([]);

  const [pageIsLoading, setPageIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isLoader && setPageIsLoading(true);

    setTimeout(() => {
      setRecordsToShow(
        recordsData.slice(recordsPerPage * activePageId, recordsPerPage * (activePageId + 1))
      );

      // eslint-disable-next-line no-unused-expressions
      isLoader && setPageIsLoading(false);
    }, 300);

    return () => {
      if (isLoader) setPageIsLoading(false);
    };

    // isLoader
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordsData, activePageId, recordsPerPage]);

  return (
    <div className={`relative ${className}`}>
      {/* 1: no loader */}
      {pageIsLoading && (
        <>
          {/* 3: custom loader */}
          {Loader ? (
            <Loader />
          ) : (
            // 2: default loader
            <div className="flex items-center gap-4">
              <BiLoaderAlt className="animate-spin text-3xl" />
              <span>Loading ...</span>
            </div>
          )}
        </>
      )}

      <div className="relative">
        {pageIsLoading && <div className={loaderOverlayClassName} />}

        {renderRecords(recordsToShow, recordsLength, searchQuery, isSearchQuery)}
      </div>
    </div>
  );
}
