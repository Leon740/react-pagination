import { FC } from 'react';
import { usePaginationContext } from 'contexts';
import { Button } from 'components';

export interface NumbersPropsI {
  classNames?: {
    parent?: string;
    buttonBase?: string;
    buttonActive?: string;
  };
  prevSeparator?: FC;
  nextSeparator?: FC;
}

export function Numbers({
  classNames: {
    parent: parentClassName = '',
    buttonBase: buttonBaseClassName = '',
    buttonActive: buttonActiveClassName = ''
  } = {},
  prevSeparator: PrevSeparator,
  nextSeparator: NextSeparator
}: NumbersPropsI) {
  const { pagesQty, activePageId, setActivePageId } = usePaginationContext();

  return (
    <div className={parentClassName}>
      {/* (first) */}
      <Button
        id={0}
        onClick={() => setActivePageId(0)}
        className={`${buttonBaseClassName} ${activePageId === 0 ? buttonActiveClassName : ''}`}
      />

      {/* (prev) */}
      {activePageId > 1 && (
        <>
          {PrevSeparator ? <PrevSeparator /> : <span>...</span>}
          <Button
            id={activePageId - 1}
            onClick={() => setActivePageId(activePageId - 1)}
            className={buttonBaseClassName}
          />
        </>
      )}

      {/* (active) */}
      {activePageId > 0 && activePageId < pagesQty - 1 && (
        <Button
          id={activePageId}
          onClick={() => setActivePageId(activePageId)}
          className={`${buttonBaseClassName} ${buttonActiveClassName}`}
        />
      )}

      {/* (next) */}
      {activePageId < pagesQty - 2 && (
        <>
          <Button
            id={activePageId + 1}
            onClick={() => setActivePageId(activePageId + 1)}
            className={buttonBaseClassName}
          />
          {NextSeparator ? <NextSeparator /> : <span>...</span>}
        </>
      )}

      {/* (last) */}
      {pagesQty > 1 && (
        <Button
          id={pagesQty - 1}
          onClick={() => setActivePageId(pagesQty - 1)}
          className={`${buttonBaseClassName} ${
            activePageId === pagesQty - 1 ? buttonActiveClassName : ''
          }`}
        />
      )}
    </div>
  );
}
