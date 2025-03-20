import { Entity } from '../entities/entity';
import { RepositoryInterface } from './repository-contracts';

export interface SerchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SerchOutPut,
> extends RepositoryInterface<> {
  search(props: SearchInput): Promise<SerchOutPut>;
}
