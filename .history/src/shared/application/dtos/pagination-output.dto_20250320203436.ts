import { SortDirection } from '@/shared/domain/repositories/searchable-repository-contracts';

export type PaginationoutputDto<Item = any> = {
  items: Item[];
  total: number;
  currentPage: number;
  lastPage: number;
  perPage?: number;

};
