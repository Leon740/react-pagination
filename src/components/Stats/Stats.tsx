/* eslint-disable no-nested-ternary */
import { usePaginationContext } from 'contexts';

interface StatsPropsI {
  className?: string;
  options?: number[];
}

export function Stats({ className = '', options }: StatsPropsI): JSX.Element {
  const { activePageId, recordsPerPage, setRecordsPerPage, recordsLength } = usePaginationContext();

  const isOptions = typeof options !== 'undefined';

  return (
    <p className={className}>
      {isOptions ? (
        <>
          <select
            value={recordsPerPage}
            onChange={(event) => setRecordsPerPage(Number(event.target.value))}
          >
            {options.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={`rpp_option_${index}`} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span> per page of {recordsLength} results</span>
        </>
      ) : (
        <>
          {/* Instead of  */}
          {/* Showing 0 to 20 of 13 results */}
          {/* Use */}
          {/* Showing 1 to 13 of 13 results */}
          Showing {activePageId === 0 ? 1 : recordsPerPage * activePageId} to{' '}
          {recordsPerPage * (activePageId + 1) > recordsLength
            ? recordsLength
            : recordsPerPage * (activePageId + 1)}{' '}
          of {recordsLength} results
        </>
      )}
    </p>
  );
}
