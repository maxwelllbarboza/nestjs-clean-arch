import { SortDirection } from '@/shared/domain/repositories/searchable-repository-contracts';
import { ListUserUseCase } from '@/users/application/usecases/list-users.usecase';

export class ListUsersDto implements ListUserUseCase.Input<> {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: Filter | null;
}
