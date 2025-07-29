import { MainRepo } from "./MainRepo";

export class Base<T extends { id: number }> implements MainRepo<T> {
  protected items: T[];

  constructor(initialItems: T[]) {
    this.items = [...initialItems];
  }

  async getAll(): Promise<T[]> {
    return this.items;
  }

  async getById(id: number): Promise<T | undefined> {
    return this.items.find((item) => item.id === id);
  }

  async createItem(item: T): Promise<T> {
    this.items.push(item);
    return item;
  }

  async updateItem(
    id: number,
    updatedFields: Partial<T>
  ): Promise<T | undefined> {
    const itemToUpdate = await this.getById(id);
    if (!itemToUpdate) return undefined;
    Object.assign(itemToUpdate, updatedFields);
    return itemToUpdate;
  }

  async deleteItem(id: number): Promise<T[]> {
    const itemToDelete = this.items.findIndex((item) => item.id === id);
    if (itemToDelete !== -1) {
      this.items.splice(itemToDelete, 1);
    }
    return this.items;
  }

  async findItem(filter: Partial<T>): Promise<T[]> {
    return this.items.filter((item) =>
      Object.entries(filter).every(
        ([key, value]) => item[key as keyof T] === value
      )
    );
  }
}
