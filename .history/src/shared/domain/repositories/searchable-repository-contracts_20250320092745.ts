import { Entity } from '../entities/entity';

export interface SerchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SerchOutPut,
> extends Re {
  search(props: SearchInput): Promise<SerchOutPut>;
}
