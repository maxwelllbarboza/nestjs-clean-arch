import { RepositoryInterface } from "@/shared/domain/repositories/repository-contracts";

export interface UserRepository extends RepositoryInterface<User> {
  findByEmail(email: string): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string): Promise<void>;
}
