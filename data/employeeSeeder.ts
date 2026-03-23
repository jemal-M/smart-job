import Employer from "../models/Employer";
const seedEmployers = async () => {
  try {
    const employers = await Employer.insertMany([
      {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        company: "ABC Inc.",
        position: "Software Engineer",
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "password456",
        company: "XYZ Corp.",
        position: "Product Manager",
      },
      {
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        password: "password789",
        company: "123 Ltd.",
        position: "Data Analyst",
      },
      {
        name: "Alice Williams",
        email: "alicewilliams@example.com",
        password: "password012",
        company: "456 Enterprises",
        position: "UX Designer",
      },
      {
        name: "Charlie Brown",
        email: "charliebrown@example.com",
        password: "password345",
        company: "789 Solutions",
        position: "DevOps Engineer",
      },
      {
        name: "Diana Miller",
        email: "dianamiller@example.com",
        password: "password678",
        company: "ABC Inc.",
        position: "Marketing Specialist",
      },
      {
        name: "Ethan Davis",
        email: "ethandavis@example.com",
        password: "password901",
        company: "XYZ Corp.",
        position: "Sales Director",
      },
      {
        name: "Fiona Wilson",
        email: "fionawilson@example.com",
        password: "password234",
        company: "123 Ltd.",
        position: "HR Manager",
      },
      {
        name: "George Moore",
        email: "georgemoore@example.com",
        password: "password567",
        company: "456 Enterprises",
        position: "Financial Analyst",
      },
      {
        name: "Hannah Taylor",
        email: "hannahstaylor@example.com",
        password: "password890",
        company: "789 Solutions",
        position: "Customer Support Lead",
      },
      {
        name: "Ian Anderson",
        email: "iananderson@example.com",
        password: "password111",
        company: "ABC Inc.",
        position: "IT Administrator",
      },
      {
        name: "Jessica Thomas",
        email: "jessicathomas@example.com",
        password: "password222",
        company: "XYZ Corp.",
        position: "Content Writer",
      },
      {
        name: "Kevin Jackson",
        email: "kevinjackson@example.com",
        password: "password333",
        company: "123 Ltd.",
        position: "Network Engineer",
      },
      {
        name: "Laura White",
        email: "laurawhite@example.com",
        password: "password444",
        company: "456 Enterprises",
        position: "Project Coordinator",
      },
      {
        name: "Michael Harris",
        email: "michaelharris@example.com",
        password: "password555",
        company: "789 Solutions",
        position: "Quality Assurance Analyst",
      },
    ]);
    console.log("Employers seeded successfully:", employers);
  } catch (error) {
    console.error("Error seeding employers:", error);
  }
};
export default seedEmployers;