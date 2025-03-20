export interface RepositoryInterface<E extends Entity> {
  findByEnailId(id: string): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string): Promise<void>;
}
