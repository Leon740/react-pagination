import { ReactElement } from 'react';
import { Button } from 'components';
import { usePaginationContext } from 'contexts';
import { BsChevronLeft } from 'react-icons/bs';

interface PrevButtonPropsI {
  className?: string;
  children?: ReactElement;
}

export function PrevButton({ className = '', children }: PrevButtonPropsI) {
  const { setActivePageId } = usePaginationContext();

  return (
    <Button
      onClick={() => setActivePageId((prev) => (prev - 1 > 0 ? prev - 1 : 0))}
      className={className}
    >
      {children || <BsChevronLeft />}
    </Button>
  );
}
