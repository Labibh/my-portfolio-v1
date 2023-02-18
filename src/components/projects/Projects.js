import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/Wrapper";
import LTimg from "./LT.png";
import SPNimg from "./SPN.png";
import TGEimg from "./TGE.png";

const ProjectsStyled = styled.div`
  .grid-wrapper {
    grid-template-rows: auto repeat(3, 665px);
    grid-row-gap: 15px;
  }

  h2 {
    margin: 10px 0 10px 20px;
    font-family: var(--font-family-Roboto-Slab);
    font-size: 36px;
    font-weight: 400;
    color: var(--simple-white);
  }

  .project-blocks {
    padding: 0 12px;
  }

  .project-card-grid {
    display: grid;
    grid-template-rows: 1.365fr 0.27fr 1.365fr;
    height: 100%;
    background-color: var(--bg-brown-2);
    border-radius: 0 15px;
  }

  .project-card-img {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 5px;
    border-radius: 0 13px 0 0;
  }

  .project-img-1 {
    background-image: url(${LTimg});
  }

  .project-img-2 {
    background-image: url(${SPNimg});
  }

  .project-img-3 {
    background-image: url(${TGEimg});
  }

  .project-card-title {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 5px 0 0 19px;
  }

  h3 {
    margin: 0;
    font-family: var(--font-family-Roboto-Slab);
    font-size: 20px;
    font-weight: 400;
    color: var(--simple-white);
  }
  
  .button-1 {
      display: inline-block;
      box-sizing: border-box;
      height: 30px;
      line-height: 26px;
      margin-left: 10px;
      padding: 0 20px;
      border-radius: 50px;
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      white-space: nowrap;
      border: 2px solid #ffffff;
      font-family: var(--font-family-Roboto-Slab);
  }
  
  .button-1:hover {
    border: 2px solid var(--font-brown-1);
  }
  
  .repo-button {
    background: #0466c8;
  }

  .live-button {
    background: #386641;
  }

  .project-card-text {
    background-color: var(--font-brown-1);
    padding: 16px;
    border-radius: 0 0 0 15px;
  }
  
  .project-card-text > p {
    font-family: var(--font-family-Roboto-Slab);
    font-size: 16px;
  }

  .tech-used-text {
    font-weight: 600;
  }

  @media (min-width: 541px) {
    .grid-wrapper {
      width: 65%;
      grid-row-gap: 25px;
    }
  }

  @media (min-width: 1200px) {
    .grid-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 430px);
      grid-column-gap: 50px;
      grid-template-rows: auto;
      grid-row-gap: 0;
      width: auto;
    }
    
    .heading-text {
      display: none;
    }

    .project-blocks {
      align-self: center;
    }

    .project-card-grid {
      height: 800px;
    }
  }
`

const Projects = (props) => {
    return (
        <ProjectsStyled id="projects">
            <Wrapper>
                <div className="grid-wrapper">
                    <div className="heading-text">
                        <h2>Projects</h2>
                    </div>
                    <div className="project-blocks">
                        <div className="project-card-grid">
                            <div className="project-card-img project-img-2"></div>
                            <div className="project-card-title">
                                <h3>SolarPowerNow</h3>
                                <a href="#" className="button-1 repo-button">Repo</a>
                                <a href="#" className="button-1 live-button">Live</a>
                            </div>
                            <div className="project-card-text">
                                <p className="tech-used-text">Technology used: HTML5, CSS3, JavaScript</p>
                                <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Semper auctor neque vitae
                                    tempus quam pellentesque nec nam aliquam. Vel risus commodo viverra maecenas
                                    accumsan lacus vel facilisis volutpat. Ultrices in iaculis nunc sed augue lacus
                                    viverra vitae. Est velit egestas dui id ornare arcu odio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-blocks">
                        <div className="project-card-grid">
                            <div className="project-card-img project-img-1"></div>
                            <div className="project-card-title">
                                <h3>Labib Tutors</h3>
                                <a href="#" className="button-1 repo-button">Repo</a>
                                <a href="#" className="button-1 live-button">Live</a>
                            </div>
                            <div className="project-card-text">
                                <p className="tech-used-text">Technology used: React, node.js</p>
                                <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Semper auctor neque vitae
                                    tempus quam pellentesque nec nam aliquam. Vel risus commodo viverra maecenas
                                    accumsan lacus vel facilisis volutpat. Ultrices in iaculis nunc sed augue lacus
                                    viverra vitae. Est velit egestas dui id ornare arcu odio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-blocks">
                        <div className="project-card-grid">
                            <div className="project-card-img project-img-3"></div>
                            <div className="project-card-title">
                                <h3>Web Escape</h3>
                                <a href="#" className="button-1 repo-button">Repo</a>
                                <a href="#" className="button-1 live-button">Live</a>
                            </div>
                            <div className="project-card-text">
                                <p className="tech-used-text">Technology used: HTML5, CSS3, JavaScript</p>
                                <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Semper auctor neque vitae
                                    tempus quam pellentesque nec nam aliquam. Vel risus commodo viverra maecenas
                                    accumsan lacus vel facilisis volutpat. Ultrices in iaculis nunc sed augue lacus
                                    viverra vitae. Est velit egestas dui id ornare arcu odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </ProjectsStyled>
    );
};

export default Projects;