import { ReactElement } from 'react';

interface ButtonPropsI {
  /**
   * number of the page to go
   */
  id?: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (id?: number) => void;
  className?: string;
  children?: ReactElement;
}
export function Button({ id = 0, onClick = () => {}, className = '', children }: ButtonPropsI) {
  return (
    <button type="button" onClick={() => (id ? onClick(id) : onClick())} className={className}>
      {children || id + 1}
    </button>
  );
}
