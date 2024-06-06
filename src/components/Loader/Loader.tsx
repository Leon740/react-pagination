import React, { useState, useEffect, ReactElement } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

interface LoaderPropsI {
  children: ReactElement;
  timeout?: number;
}

export function Loader({ children, timeout = 2000 }: LoaderPropsI) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // will be executed on mount
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
      }, timeout);
    }
    // isMounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isMounted ? <BiLoaderAlt className="animate-spin" /> : children;
}
export default Loader;
