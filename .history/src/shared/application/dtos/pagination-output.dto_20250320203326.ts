import { SortDirection } from '@/shared/domain/repositories/searchable-repository-contracts';

export type PaginationoutputDto<Item = any> = {
  items: Item[];
  total
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: Filter | null;
};
