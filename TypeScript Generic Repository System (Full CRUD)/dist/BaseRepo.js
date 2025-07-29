"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    items;
    constructor(initialItems) {
        this.items = [...initialItems];
    }
    async getAll() {
        return this.items;
    }
    async getById(id) {
        return this.items.find((item) => item.id === id);
    }
    async createItem(item) {
        this.items.push(item);
        return item;
    }
    async updateItem(id, updatedFields) {
        const itemToUpdate = await this.getById(id);
        if (!itemToUpdate)
            return undefined;
        Object.assign(itemToUpdate, updatedFields);
        return itemToUpdate;
    }
    async deleteItem(id) {
        const itemToDelete = this.items.findIndex((item) => item.id === id);
        if (itemToDelete !== -1) {
            this.items.splice(itemToDelete, 1);
        }
        return this.items;
    }
    async findItem(filter) {
        return this.items.filter((item) => Object.entries(filter).every(([key, value]) => item[key] === value));
    }
}
exports.Base = Base;
