import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Chief Marketing Officer"
              company="Yunyu Intelligent Tech LLC"
              // companyLink="https://google.com"
              time="May 2023-Present"
              address="New York, NY"
              work="Built a cross-functional marketing team of 10 professionals, overseeing marketing plan development, business development initiatives, and 5 campaign projects. Established a strong online presence through the website, and three different social media accounts, effectively reaching and engaging with the target audience."
            />

            <Details
              position="Project Manager Intern"
              company="Accenture"
              companyLink="https://facebook.com"
              time="Jan.2021 - Jul.2021"
              address="Shanghai, China"
              work='
    • Facilitated full-cycle consulting engagements for clients and fostering collaboration between 4 cross-functional teams and clients, resulting in acquisition of 2 additional projects.<br />
    • Implemented process optimization as exemplified by reducing overhead costs by 80% for a design project.<br />
    • Co-led the sprint project for Ford China to gather market insights for 5 new product features, adept in user-centered design approaches. Conducted 7 rounds of user experience testing with over 150 participants, presented findings with data interpretation and visualization.<br />
    • Coordinated tight project processes through project management initiatives using advanced mail-merge, Gantt charts, Kanban boards for 20+ teammates, decreased average delivery time from 90 to 68 days.
  '/>
              <Details
              position="Research Assistant"
              company="Toronto Metropolitan University"
              companyLink="https://mit.edu"
              time="Jun.2019 - Sep.2019"
              address="Toronto, Canada"
              work="Adviser: Dr. Jenna Jacobson Global Research Internship Scholarship funded by state Ministry of Education (Top 1)\n
• Focused on micro-influencers’ perspectives to understand the innovation and changing digital retailing landscape, codify 323 influencers social media. \n
• Initiated the implementation of Python to streamline the tedious data collection process, successfully crawled and cleaned the data. Displayed technical aptitude through self-taught Python skills and developed a 20-page data collection handbook for the subsequent team, leading to its successful execution and continued use."
            />

            <Details
              position="Brand Marketing Specialist"
              company="TEDx"
              companyLink="https://amazon.com"
              time="Jun.2018 - Jan.2019"
              address="Suzhou, China"
              work="• Managed social network accounts, added >2,000 followers in 2 months with record-high PV (>50,000).\n
• Secured funds of 30,000 CNY ($8,500) with the free venue and catering for annual events.\n
• Curated 2018 TEDxSuzhou Salon, including fundraising, agenda design, media publicity, speaker training,
volunteer recruitment, and logistics management."
            />

            <Details
              position="Event Manager"
              company="The Bookworm Cultural Development Co., Ltd."
              companyLink="https://microsoft.com"
              time="Jan.2018 - Sep.2018"
              // address="Redmond, WA."
              work="• Co-organized the 2nd China-Europe International Literary Festival with the German Consulate in Shanghai, responsible for online/offline publicity of related activities. Resulting in 25K+ participants and net profit of $30k+.\n
• Arranged 12 overseas writers’ schedules in China, and recruited and planned the assignments of 250 volunteers.\n
• Contributed to the design of the company's website and the operation of the public social handles, planned 6 thematic events, generated 7w+ revenue and accumulated >500 members. Demonstrated bilingual proficiency
by hosting 5 main sessions and panels, conducting guest speaker interviews."
            />


          </ul>
        </div>
        </div>
    );
};

export default Experience;
