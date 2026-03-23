import Review from "../models/Review";
const reviewSeeder = async () => {
  try {
    const reviews = [
      {
        freelancerId: "645187932131231231231231",
        employerId: "645187932131231231231232",
        rating: 5,
        comment: "Great work!",
      },
      {
        freelancerId: "645187932131231231231231",
        employerId: "645187932131231231231233",
        rating: 4,
        comment: "Good work!",
      },
      {
        freelancerId: "645187932131231231231232",
        employerId: "645187932131231231231231",
        rating: 5,
        comment: "Excellent work!",
      },
       {
        freelancerId: "645187932131231231231232",
        employerId: "645187932131231231231233",
        rating: 4,
        comment: "Good work!",
      },
       {
        freelancerId: "645187932131231231231233",
        employerId: "645187932131231231231231",
        rating: 5,
        comment: "Great work!",
      },
      {
        freelancerId: "645187932131231231231233",
        employerId: "645187932131231231231232",
        rating: 4,
        comment: "Good work!",
      },
      {
        freelancerId: "645187932131231231231233",
        employerId: "645187932131231231231232",
        rating: 4,
        comment: "Good work!",
      },
      {
        freelancerId: "645187932131231231231233",
        employerId: "645187932131231231231232",
        rating: 4,
        comment: "Good work!",
      },
      {
        freelancerId: "645187932131231231231233",
        employerId: "645187932131231231231232",
        rating: 4,
        comment: "Good work!",
      },
      {
        freelancerId: "645187932131231231231233",
        employerId: "645187932131231231231232",
        rating: 4,
        comment: "Good work!",
      },
    ];

    await Review.deleteMany({});
    console.log("Reviews deleted");
    await Review.insertMany(reviews);
    process.exit();
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};
export default reviewSeeder;