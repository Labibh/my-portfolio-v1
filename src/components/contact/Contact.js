import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/Wrapper";

const ContactStyled = styled.div`
  .grid-wrapper {
    grid-template-rows: 40px 100px 170px auto 310px;
    grid-row-gap: 10px;
    padding-bottom: 50px;
    //background-color: darksalmon;
  }

  h2 {
    margin: 8px 0 10px 12px;
    font-family: var(--font-family-Roboto-Slab);
    font-size: 26px;
    font-weight: 400;
    color: var(--font-brown-1);
  }

  .contact-me-text {
    padding: 0 12px;
  }

  .contact-me-text > p {
    font-family: var(--font-family-Roboto-Slab);
    font-size: 16px;
    color: var(--simple-white);
  }

  .contact-email {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-brown-2);
    margin: 16px;
    border-radius: 15px;
  }

  .contact-email > a {
    font-family: var(--font-family-Roboto-Slab);
    font-size: 6vw;
    font-weight: 400;
    color: var(--simple-white);
  }

  .embed-map {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .embed-map > iframe {
    width: 90%;
    height: 320px;
    border-radius: 15px;
  }

  .social-links {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
    grid-row-gap: 15px;
    padding: 0 20px 20px 20px;
  }

  .social-link-text {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 12px;
  }
  
  .logos {
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .social-links > div > a {
    margin: 0;
    font-family: var(--font-family-Roboto-Slab);
    font-size: 6vw;
    font-weight: 300;
    color: var(--simple-white);
    text-decoration: none;
  }

  .social-links > div > a > svg {
    height: 40px;
  }

  @media (min-width: 541px) {
    .grid-wrapper {
      grid-template-rows: 45px 100px 170px auto 310px;
      width: 65%;
    }

    h2 {
      font-size: 30px;
    }

    .contact-email > a {
      font-size: 4vw;
    }

    .social-links > div > a {
      font-size: 4vw;
    }
  }

  @media (min-width: 1000px) {
    .grid-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 3fr 1.5fr;
      grid-column-gap: 50px;
      grid-row-gap: 0;
      grid-template-areas:
          "heading map"
          "c-text map"
          "email map"
          "social .";
      width: 85%;
      padding-top: 8%;
      padding-bottom: 0;
    }
    
    .header-text {
      grid-area: heading;  
    }

    h2 {
      font-size: calc(32px + 0.83vw);
    }

    .contact-me-text {
      grid-area: c-text;
    }

    .contact-me-text > p {
      font-size: calc(8px + 0.83vw);
    }

    .contact-email {
      grid-area: email;
    }

    .contact-email > a {
      padding: 20px;
      font-size: 32px;
    }
    
    .embed-map {
      grid-area: map;
    }

    .embed-map > iframe {
      width: 100%;
      height: 100% ;
      border-radius: 15px;
    }
    .social-links {
      grid-area: social;
      grid-template-columns: repeat(6, auto);;
      grid-column-gap: 15px;
      width: 100%;
      padding-left: 0;
    }

    .social-link-text {
      justify-content: left;
      align-items: center;
      padding-left: 0;
    }

    .logos {
      justify-content: right;
    }

    .social-links > div > a {
      font-size: calc(16px + 0.63vw);
    }
    
  }
`


const Contact = (props) => {
    return (
        <ContactStyled id="contact">
            <Wrapper>
                <div className="grid-wrapper">
                    <div className="header-text">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="contact-me-text">
                        <p>
                            I am currently available for work and searching for a Front-End Web Developer position. If
                            you are hiring please contact me at the email below.
                        </p>
                    </div>
                    <div className="contact-email">
                        <a href="mailto: webdevlabib@gmail.com">WebDevLabib@gmail.com</a>
                    </div>
                    <div className="social-links">
                        <div className="logos">
                            <a href="https://www.linkedin.com/in/labib-haque-42bb98164" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <path fill="#ffffff"
                                          d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/>
                                </svg>
                            </a>
                        </div>
                        <div className="social-link-text">
                            <a href="https://www.linkedin.com/in/labib-haque-42bb98164" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                        <div className="logos">
                            <a href="https://github.com/Labibh" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 250">
                                    <path fill="#ffffff"
                                          d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="social-link-text">
                            <a href="https://github.com/Labibh" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                        <div className="logos">
                            <a href="https://drive.google.com/file/d/1K4DtqVSxb5aacpwJA-Z5k7qfepjatw--/view?usp=sharing" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1h8m-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg>
                            </a>
                        </div>
                        <div className="social-link-text">
                            <a href="https://drive.google.com/file/d/1K4DtqVSxb5aacpwJA-Z5k7qfepjatw--/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                        </div>
                    </div>
                    <div className="embed-map">
                        <iframe
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcdDzTMZwRdhg1cliEpTFVepbKCNNtE1U&q=george+brown+college&zoom=10"
                            allowFullScreen>
                        </iframe>
                    </div>

                </div>
            </Wrapper>
        </ContactStyled>
    );
};

export default Contact;