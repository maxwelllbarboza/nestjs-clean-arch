import { Entity } from '../entities/entity';

export interface SerchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SerchOutPut,
> exte {
  search(props: SearchInput): Promise<SerchOutPut>;
}
