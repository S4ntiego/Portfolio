import React from "react";
import styles from "./Skills.module.scss";
import { skills } from "@/lib/skills";
import { software } from "@/lib/software";
import { services } from "@/lib/services";
import { libraries } from "@/lib/libraries";
import Image from "next/image";
import { SkillCard } from "./SkillCard";

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
    <div id="skills" className={styles.flexContainer}>
      <div className={styles.mainHeadingContainer}>
        <p className={styles.mainParagraph}>
          Always flexible. Constantly learning.
        </p>
        <h2 className={styles.mainHeader}>Programming Stack</h2>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeadingContainer}>
          <h2 className={styles.sectionHeading}>Technologies</h2>
          <p className={styles.sectionParagraph}>
            I am capable of creating full-stack JavaScript applications that
            involve TypeScript. Always learning and open to new solutions.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {sortedSkills.map((skill) => (
            <SkillCard key={skill.name}>
              <div className={styles.skillContainer}>
                <div className={styles.skillImageContainer}>
                  <Image
                    src={`/icons/${skill.svg}.svg`}
                    height={40}
                    width={40}
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
            </SkillCard>
          ))}
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeadingContainer}>
          <h2 className={styles.sectionHeading}>Software</h2>
          <p className={styles.sectionParagraph}>
            While exploring UI and UX aspects of the web, I became familiar with
            two of the most popular design tools in the industry - Figma and
            Adobe Photoshop. Additionally, with my experience in Investment
            Banking, I am also proficient in using Microsoft Office.
          </p>
        </div>
        <div className={styles.gridContainer}>
          {software.map((skill) => (
            <div key={skill.name} className={styles.skillContainer}>
              <div className={styles.skillImageContainer}>
                <Image
                  src={`/icons/${skill.svg}.svg`}
                  height={50}
                  width={50}
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
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeadingContainer}>
          <h2 className={styles.sectionHeading}>Services</h2>
          <p className={styles.sectionParagraph}>
            Vercel for hosting Next.js websites, Amazon AWS S3 due to the
            well-documented API, lambda functions, and competitive pricing, and
            Amazon Cloudfront CDN to benefit from caching and closer
            distribution.
          </p>
        </div>
        <div className={styles.gridContainer}>
          {services.map((skill) => (
            <div key={skill.name} className={styles.skillContainer}>
              <div className={styles.skillImageContainer}>
                <Image
                  src={`/icons/${skill.svg}.svg`}
                  height={50}
                  width={50}
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
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeadingContainer}>
          <h2 className={styles.sectionHeading}>Additional Libraries</h2>
          <p className={styles.sectionParagraph}>
            To achieve a smoother developer and user experience, I am using
            external libraries that are widely recognized and appreciated by the
            npm community. Although I have only a very basic understanding of
            testing using the Jest library, I am continuously improving my
            skills in this area.
          </p>
        </div>
        <div className={styles.gridContainer}>
          {libraries.map((skill) => (
            <div key={skill.name} className={styles.skillContainer}>
              <div className={styles.skillImageContainer}>
                <Image
                  src={`/icons/${skill.svg}.svg`}
                  height={50}
                  width={50}
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
  );
};

export default Skills;
