import { userData } from "../Data/userData";

export default function searchJobHistory(jobTitle) {
  let jobHistory = [];
  //   console.log(userData)
  userData.forEach((user) => {
    // get the job history of the current user
    const userJobHistory = user.jobHistory;
    // find if the job title exists in the job history
    const job = userJobHistory.find((job) => job.title === jobTitle);
    // if the job title exists in the job history, add the user and their most recent job position to the job history array
    if (job) {
      const latestJob = userJobHistory[userJobHistory.length - 1];
      const userInfo = {
        name: user.name,
        title: latestJob.title,
        company: latestJob.company,
      };
      jobHistory.push(userInfo);
    }
  });
  return jobHistory;
}
