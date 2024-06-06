import postsData from 'data/posts.mock.json';
// import { Pagination, PaginationPropsI } from 'components';

export interface RecordI {
  id: number;
  title: string;
  important?: boolean;
  userId?: number;
  body?: string;
}

// export function PaginationMock(props: PaginationPropsI<RecordI>) {
//   const { children } = props;
//   return <Pagination<RecordI> {...props}>{children}</Pagination>;
// }

export const paginationPropsMock = {
  recordsData: postsData.posts
};
