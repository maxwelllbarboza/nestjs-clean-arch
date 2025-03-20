import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository';
import { UserRepository } from '@/users/domain/repositories/user.repository';

export class UserInMemoryRepository
  extends InMemoryRepository<>
  implements UserRepository {}
