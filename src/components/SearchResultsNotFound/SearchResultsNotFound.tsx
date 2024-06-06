import { usePaginationContext } from 'contexts';
import { ReactElement } from 'react';

interface SearchResultsNotFoundPropsI {
  children?: ReactElement;
  keywords: string[];
  classNames: {
    listClassName?: string;
    itemClassName?: string;
    buttonClassName?: string;
  };
}

export function SearchResultsNotFound({
  children,
  keywords,
  classNames: { listClassName = '', itemClassName = '', buttonClassName = '' } = {}
}: SearchResultsNotFoundPropsI) {
  const { setSearchQuery } = usePaginationContext();

  return (
    <div>
      {children || (
        <section>
          <h2 className="text-xl">Results not found</h2>
          <p className="my-8">Try these keywords</p>
        </section>
      )}

      <ul className={listClassName}>
        {keywords.map((keyword, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`search_keyword_${index}`} className={itemClassName}>
            <button
              type="button"
              onClick={() => setSearchQuery(keyword)}
              className={buttonClassName}
            >
              {keyword}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
