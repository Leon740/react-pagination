import { ReactElement } from 'react';
import { Button } from 'components';
import { usePaginationContext } from 'contexts';
import { BsChevronRight } from 'react-icons/bs';

interface NextButtonPropsI {
  className?: string;
  children?: ReactElement;
}

export function NextButton({ className = '', children }: NextButtonPropsI) {
  const { setActivePageId, pagesQty } = usePaginationContext();

  return (
    <Button
      onClick={() => setActivePageId((prev) => (prev + 1 < pagesQty ? prev + 1 : 0))}
      className={className}
    >
      {children || <BsChevronRight />}
    </Button>
  );
}
