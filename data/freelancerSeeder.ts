import Freelancer from "../models/Freelancer";
const seedFreelancers = async () => {
  try {
    const freelancers = await Freelancer.insertMany([

      {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        skills: ["JavaScript", "React", "Node.js"],
        hourlyRate: 50,
        bio: "Experienced full-stack developer",
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "password456",
        skills: ["Python", "Django", "PostgreSQL"],
        hourlyRate: 60,
        bio: "Backend developer with expertise in Python",
      },
      {
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        password: "password789",
        skills: ["UI/UX Design", "Figma", "Adobe XD"],
        hourlyRate: 40,
        bio: "Creative UI/UX designer",
      },
      {
        name: "Alice Williams",
        email: "alicewilliams@example.com",
        password: "password012",
        skills: ["Mobile Development", "React Native", "iOS"],
        hourlyRate: 70,
        bio: "Mobile app developer",
      },
      {
        name: "Charlie Brown",
        email: "charliebrown@example.com",
        password: "password345",
        skills: ["Data Science", "Machine Learning", "Python"],
        hourlyRate: 80,
        bio: "Data scientist and ML engineer",
      },
    ]);
    console.log("Freelancers seeded successfully:", freelancers);
  } catch (error) {
    console.error("Error seeding freelance,rs:", error);
  }
};
export default seedFreelancers;