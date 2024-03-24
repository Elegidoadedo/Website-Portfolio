import type { Job } from "./jobs.types";
const jobs: Job[] = [
  {
    company: "Exoticca",
    position: "Frontend Developer",
    start: "September 2020",
    end: undefined,
    icon: "code",
    description:
      "I'm working on the development of the new website of Exoticca, a travel agency that offers trips to exotic destinations. I'm working with React, Nextjs, Jest, Cypress, AWS, Styled-components,  Design system, and other technologies.",
  },
  {
    company: "Abi Global Health",
    position: "Full stack Developer",
    start: " December 2018",
    end: "May 2020",
    icon: "code",
    description:
      "I worked on the development of the website and services of Abi Global Health, a health company that uses AI bots to connect users with real doctors and answer their questions. I worked with AWS, React, Node.js, GraphQL, and other technologies.",
  },
  {
    company: "Futbol Club Barcelona",
    position: "Multimedia Support Technician",
    start: " February 2018",
    end: "September 2019",
    icon: "server",
    description:
      "As a Multimedia Support Technician at Futbol Club Barcelona, I was responsible for ensuring the smooth recording and streaming of matches for all FCB teams. This involved managing the technical setup, troubleshooting any issues that arose, and ensuring high-quality video and audio output. I worked closely with the media team to deliver an exceptional viewing experience for fans around the world.",
  },
];

export default jobs;
