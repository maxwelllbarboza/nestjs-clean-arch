import { RepositoryInterface } from '@/shared/domain/repositories/repository-contracts';
import { UserEntity } from '../entities/user.entity';

export interface UserRepository extends RepositoryInterface<UserEntity> {
  findByEmail(email: string): Promise<E>;
  findAll(): Promise<E[]>;
  
}
