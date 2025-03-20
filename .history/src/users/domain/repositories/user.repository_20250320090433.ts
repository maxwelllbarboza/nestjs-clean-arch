export interface UserRepository exRepositoryInterface<E extends Entity> {
  findByEmail(email: string): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string): Promise<void>;
}
