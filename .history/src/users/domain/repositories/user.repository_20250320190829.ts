import { UserEntity } from '../entities/user.entity';
import {
  SearchParams as DefaultSearchParams,
  SearchResult as DefaultSearchResult,
  SerchableRepositoryInterface,
} from '@/shared/domain/repositories/searchable-repository-contracts';

export namespace UserRepository {
  export type Filter = string;

  export class SearchParams extends DefaultSearchParams<Filter> {}

  export class SearchResult extends DefaultSearchResult<UserEntity, Filter> {}
  export interface Repository
    extends SerchableRepositoryInterface<UserEntity, any, any> {
    findByEmail(email: string): Promise<UserEntity>;
    emailExists(email: string): Promise<void>;
  }
}
