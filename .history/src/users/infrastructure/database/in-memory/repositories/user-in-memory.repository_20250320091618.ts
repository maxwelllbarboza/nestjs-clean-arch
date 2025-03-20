import { NotFoundError } from '@/shared/domain/errors/not-found-error';
import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { UserRepository } from '@/users/domain/repositories/user.repository';

export class UserInMemoryRepository
  extends InMemoryRepository<UserEntity>
  implements UserRepository
{
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
      throw new NotFoundError(`Entity not found using email ${email}`);
    }
  }
}
