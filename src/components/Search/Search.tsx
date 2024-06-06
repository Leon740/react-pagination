import { FC } from 'react';
import { usePaginationContext } from 'contexts';
import { BsXLg } from 'react-icons/bs';

interface SearchPropsI {
  classNames?: {
    parent?: string;
    input?: string;
    paragraph?: string;
    resetButton?: string;
  };
  placeholder?: string;
  resetButton?: FC;
}

export function Search({
  classNames: {
    parent: parentClassName = '',
    input: inputClassName = '',
    paragraph: paragraphClassName = '',
    resetButton: resetButtonClassName = ''
  } = {},
  placeholder = 'Placeholder',
  resetButton: ResetButton
}: SearchPropsI): JSX.Element {
  const { searchQuery, setSearchQuery, isSearchQuery, recordsLength } = usePaginationContext();

  return (
    <div className={parentClassName}>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder={placeholder}
          className={inputClassName}
        />
        <button type="button" className={resetButtonClassName} onClick={() => setSearchQuery('')}>
          {ResetButton ? <ResetButton /> : <BsXLg />}
        </button>
      </div>
      {isSearchQuery && (
        <p className={paragraphClassName}>
          {recordsLength === 0 ? 'No' : recordsLength} results found
        </p>
      )}
    </div>
  );
}
