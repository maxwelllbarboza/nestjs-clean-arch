import { Entity } from '../entities/entity';

export interface SerchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SerchOutPut,
> extends Reposi {
  search(props: SearchInput): Promise<SerchOutPut>;
}
