import { UserEntity } from '../entities/user.entity';
import { SerchableRepositoryInterface } from '@/shared/domain/repositories/searchable-repository-contracts';

export
export interface UserRepository
  extends SerchableRepositoryInterface<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity>;
  emailExists(email: string): Promise<void>;
}
