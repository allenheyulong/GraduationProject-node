import { IPaginationOptions } from 'nestjs-typeorm-paginate';

export const parameterTransformation = (
  start: number,
  count: number,
): IPaginationOptions => {
  let limit: number, page: number;
  //   XXX:这里的start 和 count指代不清楚
  page = start;
  limit = count;
  return {
    limit,
    page,
  };
};
