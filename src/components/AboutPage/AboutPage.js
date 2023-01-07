import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { ToolsIcons } from "../ToolsIcons/ToolsIcons";
import "./css/about-page.css";

const AboutPage = () => {
  const codeTools = [
    "React",
    "Redux",
    "Typescript",
    "Storybook",
    "styled-components",
    "GraphQL",
    "Apollo",
    "knex",
    "SASS",
    "VSCode",
    "Git"
  ];

  const designTools = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "Lighroom",
    "Blender 3D",
    "Unreal Engine 4"
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="page about-page">
      <div className="container">
        <div className="top-side">
          <img
            className="profile-picture"
            src={
              "https://omperiap.sirv.com/portfolio/profile-picture/profile-picture.jpg"
            }
            alt=""
          />
          <div className="about-text">
            <h1 className="my-name text-bold">Alex Ciobotaru</h1>
            <p className="subtitle">Web Developer and Designer</p>
            <br />
            <p>
              I'm Alex, a Front End Developer with a background in Digital Art
              and Design.
            </p>
            <br />
            <p>
              I have been working as a freelance concept artist, illustrator and
              graphic designer for 5 years before moving into web development.
            </p>
            <br />
            <p>
              I've studied Computer Science at the University of Bucharest, and
              I have been focusing on Web Technologies and Frameworks for the
              last 3+ years.
            </p>
            <br />
            <p>
              If you want to check out some of my previous work as a digital
              artist, please visit:{" "}
              <a
                href="https://allexc.crevado.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                allexc.crevado.com
              </a>
            </p>
            <br />
          </div>
        </div>

        <br />
        <br />
        <br />
        <h2 className="title">Tools and Technologies</h2>

        <div className="tools-container">
          <div className="main column">
            <h2 className="text-bold accent-color">Main</h2>
            <br />
            <br />
            <ToolsIcons color={"white"} />
          </div>
          <div className="code column">
            <h2 className="text-bold accent-color">Code</h2>
            <br />
            <br />
            <div className="cols">
              <div className="col-1">
                {codeTools.slice(0, codeTools.length / 2).map((tool) => (
                  <p key={`${tool}`}>{tool}</p>
                ))}
              </div>
              <div className="col-2">
                {codeTools
                  .slice(codeTools.length / 2, codeTools.length)
                  .map((tool) => (
                    <p key={`${tool}`}>{tool}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="design column">
            <h2 className="text-bold accent-color">Design</h2>
            <br />
            <br />
            {designTools.map((tool) => (
              <p key={`${tool}`}>{tool}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
