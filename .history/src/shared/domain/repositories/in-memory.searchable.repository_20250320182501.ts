import { Entity } from '../entities/entity';
import { InMemoryRepository } from './in-memory.repository';

import { SerchableRepositoryInterface } from './searchable-repository-contracts';

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SerchableRepositoryInterface<E, any, any>
{
  async search(props: Se): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
