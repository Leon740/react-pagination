import { FC } from 'react';
import { usePaginationContext } from 'contexts';
import { PrevButton, NumbersPropsI, Numbers, NextButton } from 'components';

interface ControlsPropsI {
  classNames?: {
    parent?: string;
    prevButton?: string;
    nextButton?: string;
  };
  prevButton?: FC;
  nextButton?: FC;
  numbersClassNames: NumbersPropsI['classNames'];
  prevNumbersSeparator?: FC;
  nextNumbersSeparator?: FC;
}

export function Controls({
  classNames: {
    parent: parentClassName = '',
    prevButton: prevButtonClassName = '',
    nextButton: nextButtonClassName = ''
  } = {},
  prevButton: PrevButtonCustom,
  nextButton: NextButtonCustom,
  numbersClassNames,
  prevNumbersSeparator,
  nextNumbersSeparator
}: ControlsPropsI) {
  const { pagesQty, activePageId, recordsLength } = usePaginationContext();

  return recordsLength ? (
    <nav className={parentClassName}>
      {activePageId > 0 && (
        <PrevButton className={prevButtonClassName}>
          {PrevButtonCustom && <PrevButtonCustom />}
        </PrevButton>
      )}

      <Numbers
        classNames={numbersClassNames}
        prevSeparator={prevNumbersSeparator}
        nextSeparator={nextNumbersSeparator}
      />

      {activePageId < pagesQty - 1 && (
        <NextButton className={nextButtonClassName}>
          {NextButtonCustom && <NextButtonCustom />}
        </NextButton>
      )}
    </nav>
  ) : null;
}
