import { RepositoryInterface } from '@/shared/domain/repositories/repository-contracts';
import { UserEntity } from '../entities/user.entity';
import { SerchableRepositoryInterface } from '@/shared/domain/repositories/searchable-repository-contracts';

export interface UserRepository extends SerchableRepositoryInterface<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>;
  emailExists(email: string): Promise<void>;
}
