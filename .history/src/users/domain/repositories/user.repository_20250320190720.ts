import { UserEntity } from '../entities/user.entity';
import {
  SearchParams as DefaultSearchParams,
  SearchResult as De,
  SerchableRepositoryInterface,
} from '@/shared/domain/repositories/searchable-repository-contracts';

export namespace UserRepository {
  export type Filter = string;

  export class SearchParams {}

  export class SearchResult {}
  export interface Repository
    extends SerchableRepositoryInterface<UserEntity, any, any> {
    findByEmail(email: string): Promise<UserEntity>;
    emailExists(email: string): Promise<void>;
  }
}
