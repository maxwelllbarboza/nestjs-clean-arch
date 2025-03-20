import { Entity } from '../entities/entity';

export interface SerchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SerchOutPut,
> {

  delete(id: string): Promise<void>;
}
