import { WorkExperience } from "./models/WorkExperience";
import moment from "moment";

export const WORKEXPERIENCE = [
  new WorkExperience(
    0,
    "Software Developer",
    "SAS Institute",
    "Cary, NC",
    moment("201505", "YYYYMM").format("MMMM YYYY"),
    moment("201905", "YYYYMM").format("MMMM YYYY"),
    `Core contributor to the development of several projects, both customer-facing and proof-of-concept, using latest technologies with a strong focus on rapid development. Two of these projects were demonstrated at SAS Global Forum (2016 and 2019). 
            Led front-end development for externally available offerings SAS Viya for Learners and SAS Analytics Cloud. Developed an interface for a software-as-a-service offering using AngularJS and D3.js. Full-stack developer for a web-based IDE using React.js and Node.js. Collaborated with design team to pilot an in-house component library using Storybook for React.js and Angular. Worked closely with UX to create a reimagined interface for an existing cloud product using Angular and Google Charts.
            Extensive experience collaborating with both UX and API teams to fulfill technical requirements.
        `
  ),
  new WorkExperience(
    1,
    "Web Developer",
    "Software Engineering Lab, UNC",
    "Chapel Hill, NC",
    moment("201501", "YYYYMM").format("MMMM YYYY"),
    moment("201505", "YYYYMM").format("MMMM YYYY"),
    `Worked on a small team to design and implement the interface of the UNC Computer Science Department BS/MS program application portal using PHP, Javascript, HTML, and CSS.`
  ),
  new WorkExperience(
    2,
    "Technical Associate Intern",
    "MetLife",
    "Durham, NC",
    moment("201406", "YYYYMM").format("MMMM YYYY"),
    moment("201408", "YYYYMM").format("MMMM YYYY"),
    `Rapidly prototyped a web app for self-service insurance renewal utilizing jQuery Mobile, Node.js, and MongoDB. Responsible for all aspects of the prototype, from conceptualization to UI/UX design and implementation.`
  ),
  new WorkExperience(
    3,
    "Tutor",
    "UNC Computer Science Department",
    "Chapel Hill, NC",
    moment("2013", "YYYY").format("YYYY"),
    moment("2015", "YYYY").format("YYYY"),
    `Assisted students in the UNC Computer Science Department with Java and Javascript programming assignments, and explained technical concepts to individuals with varying levels of experience.`
  ),
  new WorkExperience(
    4,
    "Intern",
    "PlazaBridge Group",
    "Remote",
    moment("201311", "YYYYMM").format("MMMM YYYY"),
    moment("201405", "YYYYMM").format("MMMM YYYY"),
    `Researched and compiled comprehensive reports on security-related systems, such as SCADA. Honed skills in data synthesis and presentation.`
  ),
];
