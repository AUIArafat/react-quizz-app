import { v4 as uuidv4 } from "uuid";

let users = [
  {
    id: uuidv4(),
    email: "admin@quiz-app.com",
    password: "12345",
    name: "Admin",
  },
  {
    id: uuidv4(),
    email: "admin@quiz-app.com",
    password: "admin",
    name: "Admin",
  },
  {
    id: uuidv4(),
    email: "user1@quiz-app.com",
    password: "12345",
    name: "Mark",
  },
  {
    id: uuidv4(),
    email: "user2@quiz-app.com",
    password: "12345",
    name: "Henry",
  },
];

export const verifyUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      setTimeout(() => resolve(user), 500);
    }
    setTimeout(() => reject(new Error("User not found")), 500);
  });
};
