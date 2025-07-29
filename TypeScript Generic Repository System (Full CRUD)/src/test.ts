import { UserRepo, CourseRepo, BookingRepo } from "./modelsRepo";

async function test() {
  const userTest = new UserRepo();
  const courseTest = new CourseRepo();
  const bookingTest = new BookingRepo();

  console.log("Users: ", await userTest.getAll());
  console.log("Courses: ", await courseTest.getAll());
  console.log("Bookings: ", await bookingTest.getAll());

  await userTest.createItem({ id: 3, name: "zain", email: "zain@example.com" });
  console.log("user added: ", await userTest.getById(3));

  await userTest.updateItem(1, { name: "Ali Updated" });
  console.log("User Updated: ", await userTest.getById(1));

  await userTest.deleteItem(2);
  console.log("Users after deletion:", await userTest.getAll());

  console.log(
    "Filter users by name = Ali Updated:",
    await userTest.findItem({ name: "Ali Updated" })
  );
}

test();
