import moment from 'moment'

import { WorkExperience } from './interfaces'

export const WORKEXPERIENCE: WorkExperience[] = [
  {
    id: 0,
    role: 'UI Developer',
    company: 'Block.one',
    location: 'Cary, NC',
    startDate: moment('202001', 'YYYYMM').format('MMMM YYYY'),
    endDate: 'Present',
    description: `As a frontend developer on a UX team, I am embedded in both design and development. Collaborated with members of the UX team to build a design system and themeable component library leveraging Sketch, React.js, and Emotion, available through Storybook and documented with docz, unifying design and development efforts for Voice.com. I am a NN/g certified Interaction Designer.
        Current responsibilities include building features and writing tests for a cryptocurrency trading platform using React.js, Emotion, and TypeScript.
            `,
  },
  {
    id: 1,
    role: 'Software Developer',
    company: 'SAS Institute',
    location: 'Cary, NC',
    startDate: moment('201505', 'YYYYMM').format('MMMM YYYY'),
    endDate: moment('201905', 'YYYYMM').format('MMMM YYYY'),
    description: `Core contributor to the development of several projects, both customer-facing and proof-of-concept, using latest technologies with a strong focus on rapid development. Two of these projects were demonstrated at SAS Global Forum (2016 and 2019). 
            Led front-end development for externally available offerings SAS Viya for Learners and SAS Analytics Cloud. Developed an interface for a software-as-a-service offering using AngularJS and D3.js. Full-stack developer for a web-based IDE using React.js and Node.js. Collaborated with design team to pilot an in-house component library using Storybook for React.js and Angular. Worked closely with UX to create a reimagined interface for an existing cloud product using Angular and Google Charts.
            Extensive experience collaborating with both UX and API teams to fulfill technical requirements.
        `,
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Software Engineering Lab, UNC',
    location: 'Chapel Hill, NC',
    startDate: moment('201501', 'YYYYMM').format('MMMM YYYY'),
    endDate: moment('201505', 'YYYYMM').format('MMMM YYYY'),
    description: `Worked on a small team to design and implement the interface of the UNC Computer Science Department BS/MS program application portal using PHP, Javascript, HTML, and CSS.`,
  },
  {
    id: 3,
    role: 'Technical Associate Intern',
    company: 'MetLife',
    location: 'Durham, NC',
    startDate: moment('201406', 'YYYYMM').format('MMMM YYYY'),
    endDate: moment('201408', 'YYYYMM').format('MMMM YYYY'),
    description: `Rapidly prototyped a web app for self-service insurance renewal utilizing jQuery Mobile, Node.js, and MongoDB. Responsible for all aspects of the prototype, from conceptualization to UI/UX design and implementation.`,
  },
  {
    id: 4,
    role: 'Tutor',
    company: 'UNC Computer Science Department',
    location: 'Chapel Hill, NC',
    startDate: moment('2013', 'YYYY').format('YYYY'),
    endDate: moment('2015', 'YYYY').format('YYYY'),
    description: `Assisted students in the UNC Computer Science Department with Java and Javascript programming assignments, and explained technical concepts to individuals with varying levels of experience.`,
  },
  {
    id: 5,
    role: 'Intern',
    company: 'PlazaBridge Group',
    location: 'Remote',
    startDate: moment('201311', 'YYYYMM').format('MMMM YYYY'),
    endDate: moment('201405', 'YYYYMM').format('MMMM YYYY'),
    description: `Researched and compiled comprehensive reports on security-related systems, such as SCADA. Honed skills in data synthesis and presentation.`,
  },
]
