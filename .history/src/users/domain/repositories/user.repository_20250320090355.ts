export interface RepositoryInterface<E extends Entity> {
  findByEmail(id: string): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string): Promise<void>;
}
