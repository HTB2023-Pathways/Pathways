const jobs = {};
const users = [
  {
    name: "Jennie Kim",
    jobHistory: [
      { title: "Engineer", company: "BCIT" },
      { title: "SWE Intern", company: "Lyft" },
      { title: "Software Engineer", company: "Amazon Web Services" },
    ],
  },
  {
    name: "David Lee",
    jobHistory: [
      { title: "Engineer", company: "BCIT" },
      { title: "Software Engineer", company: "Amazon Web Services" },
      { title: "Software Developer", company: "Microsoft" },
      { title: "Data Engineer", company: "Facebook" },
      { title: "Full-stack Developer", company: "Google" },
    ],
  },

  {
    name: "Emily Wang",
    jobHistory: [
      { title: "Engineer", company: "BCIT" },
      { title: "Software Engineer", company: "Amazon Web Services" },
      { title: "UI/UX Designer", company: "Adobe" },
      { title: "Product Manager", company: "Salesforce" },
      { title: "Front-end Developer", company: "Shopify" },
    ],
  },

  {
    name: "James Kim",
    jobHistory: [
      { title: "Engineer", company: "BCIT" },
      { title: "Software Engineer", company: "Amazon Web Services" },
      { title: "Database Administrator", company: "Oracle" },
      { title: "Machine Learning Engineer", company: "Tesla" },
      { title: "Software Developer", company: "IBM" },
    ],
  },

  {
    name: "Lily Chen",
    jobHistory: [
      { title: "Software Engineer", company: "Amazon Web Services" },
      { title: "DevOps Engineer", company: "Netflix" },
      { title: "Software Developer", company: "Apple" },
      { title: "Systems Analyst", company: "Accenture" },
    ],
  },

  {
    name: "Peter Park",
    jobHistory: [
      { title: "Business Analyst", company: "Goldman Sachs" },
      { title: "Software Engineer", company: "Amazon Web Services" },
      { title: "Data Scientist", company: "Uber" },
      { title: "Full-stack Developer", company: "Microsoft" },
    ],
  },
];

const logJobHistory = (users) => {
  // Loop through each user object in the users array
  users.forEach((user) => {
    // Extract jobHistory array from the current user object
    const jobHistory = user.jobHistory;

    // Loop through each job in the jobHistory array
    for (let i = 1; i < jobHistory.length; i++) {
      // Extract the current and previous job titles from the jobHistory array
      const currentJobTitle = jobHistory[i].title;
      const previousJobTitle = jobHistory[i - 1].title;

      // Check if the previous job title doesn't exist as a key in the jobs object
      if (!jobs[previousJobTitle]) {
        // If it doesn't, create a new key with the previous job title and set its value to an empty careerPaths array
        jobs[previousJobTitle] = {
          careerPaths: [],
        };
      }

      // Extract the careerPaths array from the jobs object using the previous job title as the key
      const careerPaths = jobs[previousJobTitle].careerPaths;

      // Check if there is already an existing career path with the same current and previous job titles
      const existingPath = careerPaths.find(
        (path) =>
          path.title === currentJobTitle &&
          path.previousTitle === previousJobTitle
      );

      // If there is, increment its count by 1
      if (existingPath) {
        existingPath.count++;
      }
      // Otherwise, add a new career path object to the careerPaths array with the current and previous job titles and a count of 1
      else {
        careerPaths.push({
          title: currentJobTitle,
          previousTitle: previousJobTitle,
          count: 1,
        });
      }
    }
  });

  console.log(JSON.stringify(jobs, null, 4));
};

logJobHistory(users);

const output = {
  Engineer: {
    careerPaths: [
      {
        title: "SWE Intern",
        previousTitle: "Engineer",
        count: 1,
      },
      {
        title: "Software Engineer",
        previousTitle: "Engineer",
        count: 3,
      },
    ],
  },
  "SWE Intern": {
    careerPaths: [
      {
        title: "Software Engineer",
        previousTitle: "SWE Intern",
        count: 1,
      },
    ],
  },
  "Software Engineer": {
    careerPaths: [
      {
        title: "Software Developer",
        previousTitle: "Software Engineer",
        count: 1,
      },
      {
        title: "UI/UX Designer",
        previousTitle: "Software Engineer",
        count: 1,
      },
      {
        title: "Database Administrator",
        previousTitle: "Software Engineer",
        count: 1,
      },
      {
        title: "DevOps Engineer",
        previousTitle: "Software Engineer",
        count: 1,
      },
      {
        title: "Data Scientist",
        previousTitle: "Software Engineer",
        count: 1,
      },
    ],
  },
  "Software Developer": {
    careerPaths: [
      {
        title: "Data Engineer",
        previousTitle: "Software Developer",
        count: 1,
      },
      {
        title: "Systems Analyst",
        previousTitle: "Software Developer",
        count: 1,
      },
    ],
  },
  "Data Engineer": {
    careerPaths: [
      {
        title: "Full-stack Developer",
        previousTitle: "Data Engineer",
        count: 1,
      },
    ],
  },
  "UI/UX Designer": {
    careerPaths: [
      {
        title: "Product Manager",
        previousTitle: "UI/UX Designer",
        count: 1,
      },
    ],
  },
  "Product Manager": {
    careerPaths: [
      {
        title: "Front-end Developer",
        previousTitle: "Product Manager",
        count: 1,
      },
    ],
  },
  "Database Administrator": {
    careerPaths: [
      {
        title: "Machine Learning Engineer",
        previousTitle: "Database Administrator",
        count: 1,
      },
    ],
  },
  "Machine Learning Engineer": {
    careerPaths: [
      {
        title: "Software Developer",
        previousTitle: "Machine Learning Engineer",
        count: 1,
      },
    ],
  },
  "DevOps Engineer": {
    careerPaths: [
      {
        title: "Software Developer",
        previousTitle: "DevOps Engineer",
        count: 1,
      },
    ],
  },
  "Business Analyst": {
    careerPaths: [
      {
        title: "Software Engineer",
        previousTitle: "Business Analyst",
        count: 1,
      },
    ],
  },
  "Data Scientist": {
    careerPaths: [
      {
        title: "Full-stack Developer",
        previousTitle: "Data Scientist",
        count: 1,
      },
    ],
  },
};
