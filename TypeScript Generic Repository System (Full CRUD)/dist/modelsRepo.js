"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepo = exports.CourseRepo = exports.UserRepo = void 0;
const BaseRepo_1 = require("./BaseRepo");
const users = [
    { id: 1, name: "Ali", email: "ali@example.com" },
    { id: 2, name: "Ahmad", email: "ahmad@example.com" },
];
const courses = [
    { id: 1, title: "TypeScript Basics", description: "Intro to TS" },
    { id: 2, title: "Advanced JS", description: "Deep dive into JS" },
];
const bookings = [
    { id: 1, userId: 1, courseId: 1, date: "2025-07-25" },
    { id: 2, userId: 2, courseId: 2, date: "2025-07-26" },
];
class UserRepo extends BaseRepo_1.Base {
    constructor() {
        super(users);
    }
}
exports.UserRepo = UserRepo;
class CourseRepo extends BaseRepo_1.Base {
    constructor() {
        super(courses);
    }
}
exports.CourseRepo = CourseRepo;
class BookingRepo extends BaseRepo_1.Base {
    constructor() {
        super(bookings);
    }
}
exports.BookingRepo = BookingRepo;
