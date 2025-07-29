import { Base } from "./BaseRepo";
import { User, Course, Booking } from "./models";

const users: User[] = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Ahmad", email: "ahmad@example.com" },
];

const courses: Course[] = [
  { id: 1, title: "TypeScript Basics", description: "Intro to TS" },
  { id: 2, title: "Advanced JS", description: "Deep dive into JS" },
];

const bookings: Booking[] = [
  { id: 1, userId: 1, courseId: 1, date: "2025-07-25" },
  { id: 2, userId: 2, courseId: 2, date: "2025-07-26" },
];

export class UserRepo extends Base<User> {
  constructor() {
    super(users);
  }
}

export class CourseRepo extends Base<Course> {
  constructor() {
    super(courses);
  }
}

export class BookingRepo extends Base<Booking> {
  constructor() {
    super(bookings);
  }
}
