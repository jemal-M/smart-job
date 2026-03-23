import seedUsers from "./userSeeder";
import seedEmployers from "./employeeSeeder";
import seedFreelancers from "./freelancerSeeder";
import savedJobSeed from "./savedSeeder";
import messageSeeder from "./messageSeeder";
import proposalSeeder from "./proposalSeeder";
import reviewSeeder from "./reviewSeeder";

const seedAll = async () => {
  try {
    console.log("Starting database seeding...");
    
    await seedUsers();
    console.log("Users seeded ✓");
    
    await seedEmployers();
    console.log("Employers seeded ✓");
    
    await seedFreelancers();
    console.log("Freelancers seeded ✓");
    
   
    
    await savedJobSeed();
    console.log("Saved jobs seeded ✓");
    
    await messageSeeder();
    console.log("Messages seeded ✓");
    
    await proposalSeeder();
    console.log("Proposals seeded ✓");
    
    await reviewSeeder();
    console.log("Reviews seeded ✓");
    
    console.log("All seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
  }
};

export default seedAll;

// Execute if run directly
seedAll();
