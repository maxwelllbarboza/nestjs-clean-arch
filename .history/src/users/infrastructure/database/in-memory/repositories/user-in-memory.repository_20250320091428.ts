import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { UserRepository } from '@/users/domain/repositories/user.repository';

export class UserInMemoryRepository
  extends InMemoryRepository<UserEntity>
  implements UserRepository
{
  findByEmail(email: string): Promise<UserEntity> {
    const _email = `${email}`;
    const entity = this.items.find((item) => item.email === _email);
    if (!entity) {
      throw new NotFoundError('Entity not found');
    }
    return entity;
    throw new Error('Method not implemented.');
  }
  emailExists(email: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
