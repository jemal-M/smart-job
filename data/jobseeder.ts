import Job from "../models/Job";
const seedJobs=()=>{
     Job.insertMany([
        {
            title:"Frontend Developer",
            description:"We are looking for a Frontend Developer to join our team.",
            requirements:["JavaScript","React","HTML","CSS"],
            salary:50000,
            location:"New York",
            companyId:"645567890123456789012345",
        },
        {
            title:"Backend Developer",
            description:"We are looking for a Backend Developer to join our team.",
            requirements:["Node.js","Express","MongoDB"],
            salary:60000,
            location:"San Francisco",
            companyId:"645567890123456789012345",
        },
        {
            title:"Full Stack Developer",
            description:"We are looking for a Full Stack Developer to join our team.",
            requirements:["JavaScript","React","Node.js","MongoDB"],
            salary:70000,
            location:"Los Angeles",
            companyId:"645567890123456789012345",
        },
        {
            title:"UI/UX Designer",
            description:"We are looking for a UI/UX Designer to join our team.",
            requirements:["Figma","Adobe XD","UI Design"],
            salary:55000,
            location:"Chicago",
            companyId:"645567890123456789012345",
        },
        {
            title:"Data Scientist",
            description:"We are looking for a Data Scientist to join our team.",
            requirements:["Python","Machine Learning","Statistics"],
            salary:80000,
            location:"Seattle",
            companyId:"645567890123456789012345",
        },
        {
            title:"DevOps Engineer",
            description:"We are looking for a DevOps Engineer to join our team.",
            requirements:["Docker","Kubernetes","AWS"],
            salary:75000,
            location:"Boston",
            companyId:"645567890123456789012345",
        },
        
        {
            title:"Product Manager",
            description:"We are looking for a Product Manager to join our team.",
            requirements:["Product Strategy","Agile","Scrum"],
            salary:85000,
            location:"Austin",
            companyId:"645567890123456789012345",
        },
       
        {
            title:"Marketing Manager",
            description:"We are looking for a Marketing Manager to join our team.",
            requirements:["Digital Marketing","SEO","Content Writing"],
            salary:65000,
            location:"Denver",
            companyId:"645567890123456789012345",
        },
        {
            title:"Human Resources Manager",
            description:"We are looking for a Human Resources Manager to join our team.",
            requirements:["Recruitment","Employee Relations","HR Policies"],
            salary:70000,
            location:"Miami",
            companyId:"645567890123456789012345",
        },
        {
            title:"Financial Analyst",
            description:"We are looking for a Financial Analyst to join our team.",
            requirements:["Financial Modeling","Excel","Valuation"],
            salary:70000,
            location:"Houston",
            companyId:"645567890123456789012345",
        },
        
        {
            title:"Customer Support Specialist",
            description:"We are looking for a Customer Support Specialist to join our team.",
            requirements:["Customer Service","Problem Solving","Communication"],
            salary:45000,
            location:"Atlanta",
            companyId:"645567890123456789012345",
        },
        
        {
            title:"Software Engineer",
            description:"We are looking for a Software Engineer to join our team.",
            requirements:["Java","Spring Boot","Microservices"],
            salary:70000,
            location:"Portland",
            companyId:"645567890123456789012345",
        },
        {
            title:"Data Engineer",
            description:"We are looking for a Data Engineer to join our team.",
            requirements:["Python","Spark","SQL"],
            salary:75000,
            location:"Nashville",
            companyId:"645567890123456789012345",
        }
     ])
}