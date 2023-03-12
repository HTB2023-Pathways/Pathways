// import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import pkg from "unique-names-generator";
const { uniqueNamesGenerator, Config, names } = pkg;
import fs from "fs";

const userData = [
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Jane Smith",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2014-09-01T00:00:00.000Z",
        endDate: "2018-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Web Developer",
        company: "Acme Corporation",
        startDate: "2018-06-01T00:00:00.000Z",
        endDate: "2019-12-01T00:00:00.000Z",
      },
      {
        title: "Web Developer",
        company: "Acme Corporation",
        startDate: "2020-01-01T00:00:00.000Z",
        endDate: "2022-03-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Globex Corporation",
        startDate: "2022-03-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "John Doe",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Software Engineer",
        company: "Xyz Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Xyz Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2022-02-01T00:00:00.000Z",
      },
      {
        title: "Senior Software Engineer",
        company: "Acme Corporation",
        startDate: "2022-03-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Alice Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2016-09-01T00:00:00.000Z",
        endDate: "2020-05-01T00:00:00.000Z",
      },
      {
        title: "Junior Data Analyst",
        company: "Beta Corporation",
        startDate: "2020-06-01T00:00:00.000Z",
        endDate: "2021-11-01T00:00:00.000Z",
      },
      {
        title: "Software Engineer",
        company: "Beta Corporation",
        startDate: "2022-01-01T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Bob Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2011-09-01",
        endDate: "2014-05-01",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Electronic Arts",
        startDate: "2014-07-01",
        endDate: "2016-06-01",
      },
      {
        title: "Software Developer",
        company: "MasterCard",
        startDate: "2016-07-01",
        endDate: "2018-12-01",
      },
      {
        title: "Senior Software Developer",
        company: "Electronic Arts",
        startDate: "2019-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Claire Kim",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2012-09-01",
        endDate: "2015-05-01",
      },
      {
        title: "Junior Software Engineer",
        company: "Electronic Arts",
        startDate: "2015-07-01",
        endDate: "2017-06-01",
      },
      {
        title: "Software Engineer",
        company: "SAP",
        startDate: "2017-07-01",
        endDate: "2019-12-01",
      },
      {
        title: "Software Engineer II",
        company: "MasterCard",
        startDate: "2020-01-01",
        endDate: null,
      },
    ],
  },
  {
    name: "Emily Lee",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2015-09-01T00:00:00.000Z",
        endDate: "2019-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2019-06-01T00:00:00.000Z",
        endDate: "2020-08-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2020-09-01T00:00:00.000Z",
        endDate: "2021-02-01T00:00:00.000Z",
      },
      {
        title: "Front-end Developer",
        company: "Delta Corporation",
        startDate: "2021-02-15T00:00:00.000Z",
        endDate: "2022-05-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Echo Corporation",
        startDate: "2022-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
  {
    name: "Michael Johnson",
    jobHistory: [
      {
        title: "CST",
        company: "BCIT",
        startDate: "2013-09-01T00:00:00.000Z",
        endDate: "2017-05-01T00:00:00.000Z",
      },
      {
        title: "Software Developer Intern",
        company: "Acme Corporation",
        startDate: "2017-06-01T00:00:00.000Z",
        endDate: "2018-12-01T00:00:00.000Z",
      },
      {
        title: "Junior UI/UX Designer",
        company: "Beta Corporation",
        startDate: "2019-01-01T00:00:00.000Z",
        endDate: "2020-04-01T00:00:00.000Z",
      },
      {
        title: "Full-stack Developer",
        company: "Gamma Corporation",
        startDate: "2020-05-15T00:00:00.000Z",
        endDate: null,
      },
    ],
  },
];

const config = {
  dictionaries: [names, names],
  separator: " ",
  length: 2,
};

const entryLevel = [
  "Junior Software Engineer",
  "Junior UI/UX Designer",
  "Junior Data Analyst",
  "Software Developer Intern",
  "Software Engineer Intern",
  "Junior Web Developer",
  "Junior Software Developer",
];

const midLevel = [
  "Software Engineer",
  "Software Developer",
  "Full-stack Developer",
  "Front-end Developer",
  "Back-end Developer",
  "UI/UX Designer",
  "Software Developer II",
  "Software Engineer II",
  "DevOps Engineer",
];

const seniorLevel = [
  "Senior Software Engineer",
  "Senior UI/UX Designer",
  "Senior Software Developer",
  "Senior Full-stack Developer",
  "Senior Front-end Developer",
  "Senior Back-end Developer",
  "Senior DevOps Engineer",
  "Software Architect",
  "Software Developer III",
  "Software Engineer III",
];

const managerLevel = [
  "Software Development Manager",
  "Software Engineering Manager",
  "Software Development Director",
  "Software Engineering Director",
];

const company = [
  "Acme Corporation",
  "Beta Corporation",
  "Gamma Corporation",
  "Electronic Arts",
  "MasterCard",
  "SAP",
];

userData.forEach((user) => {
  const name = uniqueNamesGenerator(config);
  user.name = name;
  user.jobHistory.forEach((job, index) => {
    if (index === 0) {
      job.title = "CST";
      job.company = "BCIT";
    }
    if (index === 1) {
      job.title = uniqueNamesGenerator({
        dictionaries: [entryLevel],
      });
      job.company = uniqueNamesGenerator({
        dictionaries: [company],
      });
    }
    if (index === 2) {
      job.title = uniqueNamesGenerator({
        dictionaries: [midLevel],
      });
      job.company = uniqueNamesGenerator({
        dictionaries: [company],
      });
    }
    if (index === 3) {
      job.title = uniqueNamesGenerator({
        dictionaries: [seniorLevel],
      });
      job.company = uniqueNamesGenerator({
        dictionaries: [company],
      });
    }
    if (index === 4) {
      job.title = uniqueNamesGenerator({
        dictionaries: [managerLevel],
      });
      job.company = uniqueNamesGenerator({
        dictionaries: [company],
      });
    }
  });
});

fs.writeFileSync("userData.json", JSON.stringify(userData));

export { userData };
