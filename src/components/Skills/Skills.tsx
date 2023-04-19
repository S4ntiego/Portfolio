import React from "react";
import styles from "./Skills.module.scss";
import { skills } from "@/lib/skills";
import { software } from "@/lib/software";
import { services } from "@/lib/services";
import { libraries } from "@/lib/libraries";
import Image from "next/image";

const sortedSkills = skills.sort((a, b) => {
  let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className="container flex flex-col gap-24">
        <div className={styles.introContainer}>
          <h2 className={styles.introHeading}>Programming Stack</h2>
          <p className={styles.introParagraph}>
            Please find below the technology, software, services and libraries
            that I have used over the years to build my side projects. These are
            the ones that I am comfortable with, but nevertheless, I am an
            open-minded person, who is always trying to learn something new and
            always looking for the most efficient solutions. In the past, I have
            also created some small applications like the calculator or the todo
            app using Python, Django and Pandas.
          </p>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>Technologies</h2>
            <p className={styles.skillsBottomParagraph}>
              I am capable of creating fullstack JavaScript applications that
              involve TypeScript on both the client and server side. My
              favourite technologies as of today include strongly typed Next.js
              (based on React.js and Node.js), Tailwind CSS, PostgreSQL and
              Prisma/Knex.js.
            </p>
          </div>
          <div className={styles.gridContainer}>
            {sortedSkills.map((skill) => (
              <div className={styles.skillContainer}>
                <div className={styles.skillImageContainer}>
                  <Image
                    src={`/icons/${skill.svg}.svg`}
                    fill
                    className={styles.skillImage}
                    alt={skill.svg}
                  />
                </div>
                <div className={styles.skillDescriptionContainer}>
                  <div className={styles.skillLayerContainer}>
                    <p className={styles.skillLayer}>{skill.layer}</p>
                  </div>
                  <div className={styles.skillNameContainer}>
                    <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>Software</h2>
            <p className={styles.skillsBottomParagraph}>
              As I am also interested in the design and UI/UX aspects of the
              web, I am familiar with one of the most popular design tools used
              in the industry - mainly Figma and Adobe Photoshop. Thanks to my
              experience in the Investment Banking, I am also proficient with
              the Microsoft Office package.
            </p>
          </div>
          <div className={styles.gridContainer}>
            {software.map((skill) => (
              <div className={styles.skillContainer}>
                <div className={styles.skillImageContainer}>
                  <Image
                    src={`/icons/${skill.svg}.svg`}
                    fill
                    className={styles.skillImage}
                    alt={skill.svg}
                  />
                </div>
                <div className={styles.skillDescriptionContainer}>
                  <div className={styles.skillLayerContainer}>
                    <p className={styles.skillLayer}>{skill.layer}</p>
                  </div>
                  <div className={styles.skillNameContainer}>
                    <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>Services</h2>
            <p className={styles.skillsBottomParagraph}>
              In the past I have been hosting all of my websites on Heroku, but
              when I started using Next.js, Vercel became the natural choice.
              When it comes to the file storage - Amazon AWS S3 offers a really
              well documented API, lambda functions and competitive pricing. To
              benefit from caching and closer distribution, I am using Amazon
              Cloudfront CDN. My database is usually hosted on Railway or
              MongoDB Atlas.
            </p>
          </div>
          <div className={styles.gridContainer}>
            {services.map((skill) => (
              <div className={styles.skillContainer}>
                <div className={styles.skillImageContainer}>
                  <Image
                    src={`/icons/${skill.svg}.svg`}
                    fill
                    className={styles.skillImage}
                    alt={skill.svg}
                  />
                </div>
                <div className={styles.skillDescriptionContainer}>
                  <div className={styles.skillLayerContainer}>
                    <p className={styles.skillLayer}>{skill.layer}</p>
                  </div>
                  <div className={styles.skillNameContainer}>
                    <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>Additional Libraries</h2>
            <p className={styles.skillsBottomParagraph}>
              To gain a smoother developer and user experience, I am usually
              using external libraries that are usually widely recognized and
              appreciated by the npm community. These include tools for data and
              input validation (also Zod), scaffolding, authentication
              (JWT/Session + Redis), fetching, tables, caching and testing.
              While working on future projects, I would like to broaden my
              knowledge of application testing with tools such as Jest, Mocha or
              Cypress, as currently my knowledge in this aspect is,
              unfortunately, at a very basic level.
            </p>
          </div>
          <div className={styles.gridContainer}>
            {libraries.map((skill) => (
              <div className={styles.skillContainer}>
                <div className={styles.skillImageContainer}>
                  <Image
                    src={`/icons/${skill.svg}.svg`}
                    fill
                    className={styles.skillImage}
                    alt={skill.svg}
                  />
                </div>
                <div className={styles.skillDescriptionContainer}>
                  <div className={styles.skillLayerContainer}>
                    <p className={styles.skillLayer}>{skill.layer}</p>
                  </div>
                  <div className={styles.skillNameContainer}>
                    <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
