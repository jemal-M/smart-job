import mongoose from "mongoose";
import User from "../models/User";

const seedUsers = async () => {
  try {
    const users = await User.insertMany([
      {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "password456",
      },
      {
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        password: "password789",
      },
      {
        name: "Alice Williams",
        email: "alicewilliams@example.com",
        password: "password012",
      },
      {
        name: "Charlie Brown",
        email: "charliebrown@example.com",
        password: "password345",
      },
      {
        name: "Diana Miller",
        email: "dianamiller@example.com",
        password: "password678",
      },
      {
        name: "Eva Davis",
        email: "evadavis@example.com",
        password: "password901",
      },
      {
        name: "Frank Garcia",
        email: "frankgarcia@example.com",
        password: "password234",
      },
      {
        name: "Grace Rodriguez",
        email: "gracerodriguez@example.com",
        password: "password567",
      },

    ]);
    console.log("Users seeded successfully:", users);
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};
export default seedUsers;