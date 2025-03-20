import { Entity } from '../entities/entity';

export interface SerchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SerchOutPut,
> {
  serdelete(id: string): Promise<void>;
}
