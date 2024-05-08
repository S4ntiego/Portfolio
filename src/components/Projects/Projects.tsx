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
        <div className={styles.projectContainer}>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Dataspat</h3>
              <p className={styles.projectDescriptionParagraph}>
                Project that combines JavaScript and Python. 

                Xbox Game Pass games repository with extensive filtering system combined with scores from MetaCritic and HowLongToBeat.

                Data scrapped with Python (Beautifulsoup).
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
                  src={`/icons/python.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"python"}
                />
                <Image
                  src={`/icons/typescript.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"typescript"}
                />
                  <Image
                  src={`/icons/tailwindcss.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"tailwindcss"}
                />
                <Image
                  src={`/icons/json.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"zustand"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://dataspat.vercel.app/"
                  className={styles.projectButton}
                >
                  <span className={styles.buttonText}>Live</span>
                </a>
                <a
                  href="https://github.com/S4ntiego/Dataspat"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <a
              href="https://github.com/S4ntiego/dataspat"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/dataspat.jpg`}
                className={styles.projectImage}
                alt={"dataspat"}
                fill
              />
            </a>
          </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectContainer}>
            <div className={styles.projectImageContainer}>
              <a href="https://quizander-dqzb.vercel.app/">
                <Image
                  src={`/quizander.jpg`}
                  className={styles.projectImage}
                  alt={"quizander"}
                  fill
                />
              </a>
            </div>
            <div className={styles.projectDescriptionContainer}>
            <p className={styles.projectDescriptionParagraphWarning}>
                BACKEND IS CURRENTLY OFFLINE
              </p>
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
                This is a full-stack website that displays Teamfight Tactics
                statistics based on my analysis of data gathered from Riot Games
                API. A live version is not available, as the project was
                prepared during the Dragonlands set. Nevertheless, the GitHub
                repository contains almost all the queries, tables, frontend,
                and backend code.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                The project involves complex SQL queries and table
                relationships, Knex builder, temporary tables, search, and
                filters. I gathered and analyzed data for over 90,000 team
                compositions and 11,000 matches.
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
                  src={`/icons/javascript.svg`}
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
                  href="https://github.com/S4ntiego/liguify"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <a
              href="https://github.com/S4ntiego/liguify"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/liguify.jpg`}
                className={styles.projectImage}
                alt={"liguify"}
                fill
              />
            </a>
          </div>
          <div className={styles.projectContainer}>
            <a
              href="https://blog-sigma-seven-44.vercel.app/"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/mdxblog.png`}
                className={styles.projectImage}
                alt={"blog"}
                fill
              />
            </a>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Blog</h3>
              <p className={styles.projectDescriptionParagraph}>
                My personal space on the internet created with Next.js,
                React.js, TypeScript, Markdown, MDX, and Tailwind CSS.
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
                  src={`/icons/react.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"css"}
                />
                <Image
                  src={`/icons/typescript.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"typescript"}
                />
                <Image
                  src={`/icons/mdx.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"mdx"}
                />
                <Image
                  src={`/icons/tailwindcss.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"tailwind"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://blog-sigma-seven-44.vercel.app/"
                  className={styles.projectButton}
                >
                  <span className={styles.buttonText}>Live</span>
                </a>
                <a
                  href="https://github.com/S4ntiego/Blog"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
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
            <a
              href="https://github.com/S4ntiego/Portfolio"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/portfolio.jpg`}
                className={styles.projectImage}
                alt={"quizander"}
                fill
              />
            </a>
          </div>
          <div className={styles.projectContainer}>
            <a
              href="https://natours-neon-eight.vercel.app/"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/natours.jpg`}
                className={styles.projectImage}
                alt={"liguify"}
                fill
              />
            </a>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Natours</h3>
              <p className={styles.projectDescriptionParagraph}>
                This website focuses on styling aspects using CSS
                &apos;float&apos;, keyframe animations, SCSS/Sass, mixins, and
                responsiveness, and it follows the BEM naming convention.
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
                  href="https://natours-neon-eight.vercel.app/"
                  className={styles.projectButton}
                >
                  <span className={styles.buttonText}>Live</span>
                </a>
                <a
                  href="https://github.com/S4ntiego/Natours"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Trillo</h3>
              <p className={styles.projectDescriptionParagraph}>
                This website focuses on styling aspects using flexbox, keyframe
                animations, SCSS/Sass, mixins, and responsiveness, and it
                follows the BEM naming convention.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                It is the second project that I have created strictly following
                Jonas Schmedtmann&apos;s course &quot;Advanced CSS and Sass:
                Flexbox, Grid, Animations, and More!&quot;.
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
                  href="https://trillo-silk.vercel.app/"
                  className={styles.projectButton}
                >
                  <span className={styles.buttonText}>Live</span>
                </a>
                <a
                  href="https://github.com/S4ntiego/Trillo"
                  className={styles.projectAlternativeButton}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <a
              href="https://trillo-silk.vercel.app/"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/trillo.jpg`}
                className={styles.projectImage}
                alt={"trillo"}
                fill
              />
            </a>
          </div>
          <div className={styles.projectContainer}>
            <a
              href="https://github.com/S4ntiego/Memories"
              className={styles.projectImageContainer}
            >
              <Image
                src={`/memories.jpg`}
                className={styles.projectImage}
                alt={"memories"}
                fill
              />
            </a>
            <div className={styles.projectDescriptionContainer}>
              <h3 className={styles.projectDescriptionHeader}>Memories</h3>
              <p className={styles.projectDescriptionParagraph}>
                This is a simple full-stack social media app that allows users
                to post memories from interesting events.
              </p>
              <p className={styles.projectDescriptionParagraph}>
                The project strictly follows the JavaScript Mastery course
                &quot;Full Stack MERN Application&quot;, which is available on
                the YouTube platform. I would like to emphasize that I am not
                proficient in using Material UI.
              </p>
              <div className={styles.gridContainer}>
                <Image
                  src={`/icons/react.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"react"}
                />
                <Image
                  src={`/icons/redux.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"redux"}
                />
                <Image
                  src={`/icons/javascript.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"javascript"}
                />
                <Image
                  src={`/icons/nodejs.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"nodejs"}
                />
                <Image
                  src={`/icons/express.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"express"}
                />
                <Image
                  src={`/icons/mongodb.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"mongodb"}
                />
                <Image
                  src={`/icons/mui.svg`}
                  height="50"
                  width="50"
                  className={styles.skillImage}
                  alt={"mui"}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <a
                  href="https://github.com/S4ntiego/Memories"
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
