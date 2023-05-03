import React from "react";
import styles from "./Projects.module.scss";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className={styles.mainContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.mainHeadingContainer}>
          <p className={styles.mainParagraph}>My latest side projects</p>
          <h2 className={styles.mainHeader}>Projects</h2>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectContainer}>
            <div className={styles.projectImageContainer}>
              <a href="https://quizander-dqzb.vercel.app/">
                <Image
                  src={`/quizander_landing.png`}
                  className={styles.projectImage}
                  alt={"quizander"}
                  fill
                />
              </a>
            </div>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Quizander</h3>
              <p className={styles.projectDescriptionParagraph}>
                Full-stack Harry Potter universe based trivia website.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                User authentication, SSR/ISR/CSR components, admin dashboard,
                historical user results, protected routes, form validation, dark
                & light mode.
              </p>
              <div className={styles.gridContainer}>
                <Image
                  src={`/icons/nextjs.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"nextjs"}
                />
                <Image
                  src={`/icons/nodejs.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"nodejs"}
                />
                <Image
                  src={`/icons/typescript.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"typescript"}
                />
                <Image
                  src={`/icons/postgres.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"postgres"}
                />
                <Image
                  src={`/icons/tailwindcss.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"tailwind css"}
                />
                <Image
                  src={`/icons/prisma.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"prisma"}
                />
                <Image
                  src={`/icons/aws.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"aws"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://quizander-dqzb.vercel.app/"
                  className={styles.projectButton}
                >
                  <span className={styles.buttonText}>Live</span>
                </a>
                <a
                  href="https://github.com/S4ntiego/Quizander"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Liguify</h3>
              <p className={styles.projectDescriptionParagraph}>
                Full-stack website with Teamfight Tactics statistics based on my
                own analysis of data gathered from Riot Games API. Live version
                is not available, as the project was prepared during the
                Dragonlands set. Nevertheless, GitHub repository contains almost
                all the queries, tables, frontend and backend code.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                Complex SQL queries and table relationships, Knex builder,
                temporary tables, search, and filters. Gathered and analysed
                data for over 90,000 team compositions and 11,000 matches.
              </p>
              <div className={styles.gridContainer}>
                <Image
                  src={`/icons/nextjs.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"nextjs"}
                />
                <Image
                  src={`/icons/nodejs.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"nodejs"}
                />

                <Image
                  src={`/icons/postgres.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"postgres"}
                />
                <Image
                  src={`/icons/tailwindcss.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"tailwind css"}
                />
                <Image
                  src={`/icons/express.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"express"}
                />
                <Image
                  src={`/icons/javaScript.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"javaScript"}
                />
                <Image
                  src={`/icons/knex.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"knex"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://github.com/S4ntiego/Quizander"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <div className={styles.projectImageContainer}>
              <Image
                src={`/liguify_main.png`}
                className={styles.projectImage}
                alt={"liguify"}
                fill
              />
            </div>
          </div>
          <div className={styles.projectContainer}>
            <a
              href="https://github.com/S4ntiego/Portfolio"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/quizander_landing.png`}
                className={styles.projectImage}
                alt={"quizander"}
                fill
              />
            </a>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Portfolio</h3>
              <p className={styles.projectDescriptionParagraph}>
                Simple portfolio website made with Next.js, TypeScript, SCSS,
                and CSS modules.
              </p>
              <div className={styles.gridContainer}>
                <Image
                  src={`/icons/nextjs.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"nextjs"}
                />
                <Image
                  src={`/icons/css.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"css"}
                />
                <Image
                  src={`/icons/sass.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"sass"}
                />
                <Image
                  src={`/icons/typescript.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"typescript"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://github.com/S4ntiego/Portfolio"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Natours</h3>
              <p className={styles.projectDescriptionParagraph}>
                This website focuses on the aspect of styling with the use of
                css &quot;float&quot;, keyframes animation, scss/sass, mixins,
                and responsiveness. It uses the BEM naming convention.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                It is the first project that I have created strictly following
                Jonas Schedtmann&apos;s course &quot;Advanced CSS and Sass:
                Flexbox, Grid, Animations and More!&quot;.
              </p>
              <div className={styles.gridContainer}>
                <Image
                  src={`/icons/html.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"html"}
                />
                <Image
                  src={`/icons/css.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"css"}
                />
                <Image
                  src={`/icons/sass.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"sass"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://quizander-dqzb.vercel.app/"
                  className={styles.projectAlternativeButton}
                >
                  Live
                </a>
                <a
                  href="https://github.com/S4ntiego/Quizander"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <div className={styles.projectImageContainer}>
              <Image
                src={`/natours_landing.png`}
                className={styles.projectImage}
                alt={"liguify"}
                fill
              />
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectImageContainer}>
              <Image
                src={`/trillo.png`}
                className={styles.projectImage}
                alt={"trillo"}
                fill
              />
            </div>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Trillo</h3>
              <p className={styles.projectDescriptionParagraph}>
                This website focuses on the aspect of styling with the use of
                flexbox, keyframes animation, scss/sass, mixins, and
                responsiveness. It uses the BEM naming convention.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                It is the second project that I have created strictly following
                Jonas Schedtmann&apos;s course &quot;Advanced CSS and Sass:
                Flexbox, Grid, Animations and More!&quot;.
              </p>
              <div className={styles.gridContainer}>
                <Image
                  src={`/icons/html.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"html"}
                />
                <Image
                  src={`/icons/css.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"css"}
                />
                <Image
                  src={`/icons/sass.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"sass"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://quizander-dqzb.vercel.app/"
                  className={styles.projectAlternativeButton}
                >
                  Live
                </a>
                <a
                  href="https://github.com/S4ntiego/Quizander"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
