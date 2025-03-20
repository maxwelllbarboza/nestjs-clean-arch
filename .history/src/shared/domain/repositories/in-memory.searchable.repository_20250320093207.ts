import { Entity } from '../entities/entity';
import { NotFoundError } from '../errors/not-found-error';

import { SerchableRepositoryInterface } from './searchable-repository-contracts';

export abstract class InMemorySearchableRepository<E extends Entity>
  implements SerchableRepositoryInterface<E, any, any>
{
  search(props: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  insert(entity: E): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<E> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<E[]> {
    throw new Error('Method not implemented.');
  }
  update(entity: E): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
 
}
