export const logJobHistory = (userData) => {
  const jobs = {};
  userData.forEach((user) => {
    // Extract jobHistory array from the current user object
    const jobHistory = user.jobHistory;

    // Loop through each job in the jobHistory array
    for (let i = 1; i < jobHistory.length; i++) {
      // Extract the current and previous job titles and job start/end dates from the jobHistory array
      const currentJob = jobHistory[i];
      const previousJob = jobHistory[i - 1];
      const currentJobTitle = currentJob.title;
      const previousJobTitle = previousJob.title;
      const currentJobStartDate = new Date(currentJob.startDate);
      const previousJobStartDate = new Date(previousJob.startDate);

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

      // Calculate the duration between the previous job and the current job in years
      const timeDiff = Math.abs(
        currentJobStartDate.getTime() - previousJobStartDate.getTime()
      );
      const durationInYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));

      // If there is, increment its count by 1 and add the duration to its total duration
      if (existingPath) {
        existingPath.count += 100;
        existingPath.totalDuration += durationInYears * 100;
      }
      // Otherwise, add a new career path object to the careerPaths array with the current and previous job titles, a count of 1, and the duration as the total duration
      else {
        careerPaths.push({
          title: currentJobTitle,
          previousTitle: previousJobTitle,
          count: 100,
          totalDuration: durationInYears,
        });
      }
    }
  });

  // After looping through all the userData and their job histories, loop through all the career paths and calculate the average duration for each path
  for (const jobTitle in jobs) {
    const careerPaths = jobs[jobTitle].careerPaths;
    for (const path of careerPaths) {
      path.averageDuration = path.totalDuration / path.count;
    }
  }

  return jobs;
};
