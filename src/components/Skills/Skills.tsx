import React from "react";
import styles from "./Skills.module.scss";
import { skills } from "@/lib/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.flexContainer}>
          <h2 className={styles.heading}>Skills</h2>
          <div className={styles.gridContainer}>
            {skills.map((skill) => (
              <div className={styles.skillContainer}>
                <div className={styles.skillImageContainer}>
                  <Image
                    src={`/icons/${skill.svg}.svg`}
                    height={16}
                    width={16}
                    className={styles.skillImage}
                    alt={skill.svg}
                  />
                </div>
                <div className={styles.skillNameContainer}>
                  <div className={styles.skillName}>{skill.name}</div>
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
