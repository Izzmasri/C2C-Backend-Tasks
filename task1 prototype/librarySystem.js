class LibraryItem {
  #id;
  constructor(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    this.#id = LibraryItem.generateId();
  }
  toggleReadStatus() {
    this.isRead = !this.isRead;
  }

  describe() {
    console.log(
      `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`
    );
  }

  getId() {
    return this.#id;
  }

  static generateId() {
    return Math.floor(Math.random() * 10000);
  }
}

class Book extends LibraryItem {
  #genre;
  constructor(title, author, isRead, genre) {
    super(title, author, isRead);
    this.#genre = genre;
  }

  describe() {
    console.log(
      `${this.title} by ${this.author} [${
        this.isRead ? "Read" : "Unread"
      }] - Genre: ${this.#genre}`
    );
  }

  getGenre() {
    return this.#genre;
  }

  static isBook(item) {
    return item instanceof Book;
  }
}
