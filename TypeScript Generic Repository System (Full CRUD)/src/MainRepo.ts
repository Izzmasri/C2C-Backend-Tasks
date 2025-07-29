export interface MainRepo<T extends { id: number }> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | undefined>;
  createItem(item: T): Promise<T>;
  updateItem(id: number, updatedFields: Partial<T>): Promise<T | undefined>;
  deleteItem(id: number): Promise<T[]>;
  findItem(filter: Partial<T>): Promise<T[]>;
}
