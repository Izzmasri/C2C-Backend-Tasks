// Object Literal
const book = {
  title: "book name",
  author: "author name",
  isRead: true,
  toggleReadStatus: function () {
    this.isRead = !this.isRead;
  },
  describe: function () {
    console.log(
      `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`
    );
  },
};

// Factory Function
function book(title, author, isRead) {
  return {
    title,
    author,
    isRead,
    toggleReadStatus() {
      isRead = !isRead;
    },
    describe() {
      console.log(`${title} by ${author} [${isRead ? "Read" : "Unread"}]`);
    },
  };
}

const book1 = book("test", "someone", true);

// Constructor Function
function Book(title, author, isRead) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

Book.prototype.describe = function () {
  console.log(
    `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`
  );
};

const book2 = new Book("test", "someone", true);

// Class
class Book {
  constructor(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }
  toggleReadStatus() {
    this.isRead = !this.isRead;
  }

  describe() {
    console.log(
      `${this.title} by ${this.author} [${this.isRead ? "Read" : "Unread"}]`
    );
  }
}

const book3 = new Book("test", "someone", true);
