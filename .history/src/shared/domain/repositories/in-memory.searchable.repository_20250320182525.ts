import { Entity } from '../entities/entity';
import { InMemoryRepository } from './in-memory.repository';

import { SearchParams, SearchResult, SerchableRepositoryInterface } from './searchable-repository-contracts';

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SerchableRepositoryInterface<E, any, any>
{
  async search(props: SearchParams): Promise<SearchResult<E>> {
    throw new Error('Method not implemented.');
  }
}
