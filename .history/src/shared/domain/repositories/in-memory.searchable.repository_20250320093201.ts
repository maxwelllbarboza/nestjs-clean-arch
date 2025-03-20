import { Entity } from '../entities/entity';
import { NotFoundError } from '../errors/not-found-error';

import { SerchableRepositoryInterface } from './searchable-repository-contracts';

export abstract class InMemorySearchableRepository<E extends Entity>
  implements SerchableRepositoryInterface<E, any, any>
{
 
}
