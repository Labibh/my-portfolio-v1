import React from "react";
import styled from "styled-components";
import './blobz.css';

import Wrapper from "../wrapper/Wrapper";

const AboutStyled = styled.div`
  .grid-wrapper {
    grid-template-rows: 0.70fr 1fr 1.2fr;
    //background-color: burlywood;
  }

  h1 {
    margin: 40px 0 17px 20px;
    font-family: var(--font-family-Roboto);
    font-size: 36px;
    font-weight: 400;
    color: var(--font-brown-1);
  }

  .about-me-text {
    padding: 0 20px 17px 20px;
  }

  .about-me-text > p {
    font-family: var(--font-family-Roboto-Slab);
    font-size: 20px;
    font-weight: 400;
    color: var(--simple-white);
  }

  .blob-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tk-blob {
    position: absolute;
    margin-bottom: 50px;
  }

  .tk-blob-1 {
    width: 26vh;
    --time: 60s;
    --amount: 5;
    --fill: #d3d3d3;
  }

  .tk-blob-2 {
    width: 24vh;
    --time: 60s;
    --amount: 5;
    --fill: #949494;
  }

  .tk-blob-3 {
    width: 21vh;
    --time: 60s;
    --amount: 5;
    --fill: #3d3d3d;
  }
`

const About = (props) => {
    return (
        <AboutStyled id="about">
            <Wrapper>
                <div className="grid-wrapper">
                    <div>
                        <h1>Hi,<br/>I'm Labib Haque<br/>a Web Developer</h1>
                    </div>
                    <div className="about-me-text">
                        <p>
                            I build stunning websites with rich user experiences. Experienced in developing for both
                            frontend and backend, and can adapt to any technology stack. I am always learning and
                            improving my skills, so that I can deliver a better end product.
                        </p>
                    </div>
                    <div className="blob-container">
                        <div className="tk-blob tk-blob-1">
                            <svg viewBox="0 0 747.2 726.7">
                                <path
                                    d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                            </svg>
                        </div>
                        <div className="tk-blob tk-blob-2">
                            <svg viewBox="0 0 451.6 385.5">
                                <path
                                    d="M381.4 86.5c43.5 48 77.5 110.3 68.8 168.7-8.6 58.4-59.9 113-114.8 126.7-54.9 13.6-113.4-13.7-176.6-40.6-63.1-27-130.7-53.5-151.5-102.8-20.9-49.2 5.1-121.1 50.3-169.5C102.8 20.7 167.1-3.9 225.9.5c58.8 4.5 111.9 38.1 155.5 86z"></path>
                            </svg>
                        </div>
                        <div className="tk-blob tk-blob-3">
                            <svg viewBox="0 0 371.5 297.7">
                                <path
                                    d="M286.9 54.2c42.7 34.9 89.4 85.3 84.2 130.4-5.2 45.1-62.1 84.7-118 102.3S142.3 300 94.8 278C47.2 256 6.9 216.6.8 173.9S22.7 85.2 56 52.4C89.4 19.6 127.9.1 166.6 0s77.6 19.2 120.3 54.2z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </AboutStyled>
    );
};

export default About;