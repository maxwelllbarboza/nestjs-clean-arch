import { SortDirection } from '@/shared/domain/repositories/searchable-repository-contracts';

export type PaginationoutputDto<Item = any> = {
  item?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: Filter | null;
};
