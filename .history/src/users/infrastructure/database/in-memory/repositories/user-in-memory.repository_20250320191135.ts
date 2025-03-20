import { ConflictError } from '@/shared/domain/errors/conflict-error';
import { NotFoundError } from '@/shared/domain/errors/not-found-error';
import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository';
import { InMemorySearchableRepository } from '@/shared/domain/repositories/in-memory.searchable.repository';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { UserRepository } from '@/users/domain/repositories/user.repository';

export class UserInMemoryRepository
  extends InMemorySearchableRepository<UserEntity>
  implements UserRepository.Repository
{
  so
  protected applyFilter(items: UserEntity[], filter: string | null): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<UserEntity> {
    const _email = `${email}`;
    const entity = this.items.find((item) => item.email === _email);
    if (!entity) {
      throw new NotFoundError(`Entity not found using email ${email}`);
    }
    return entity;
  }
  async emailExists(email: string): Promise<void> {
    const _email = `${email}`;
    const entity = this.items.find((item) => item.email === _email);
    if (entity) {
      throw new ConflictError('Email address already used');
    }
  }
}
