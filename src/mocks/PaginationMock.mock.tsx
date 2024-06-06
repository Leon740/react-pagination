import POSTS from '../../public/posts.mock.json';
import { PaginationPropsI } from 'components';

export interface RecordI {
  id: number;
  title: string;
  important?: boolean;
  userId?: number;
  body?: string;
}

export const paginationPropsMock: Omit<PaginationPropsI<RecordI>, 'children'> = {
  recordsData: POSTS
};
