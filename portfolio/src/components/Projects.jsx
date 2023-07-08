import "../style/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        <div
          className="portfolio-box"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://user-images.githubusercontent.com/94858304/250264715-31cbb966-2312-4e9d-b5ec-c5ab299070af.png"
            alt=""
          />
          <div className="potfolio-layer">
            <h4>Todo MERN</h4>
            <p>
              This is a MERN (MongoDB, Express, React, Node.js) project that
              serves as a starting point for building a full-stack web
              application.
            </p>
            <div className="layer-links">
              <a
                href="https://github.com/Abu-ellil"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="layer-icon" />
              </a>
              <a
                href="https://mern-project-todo-kalbonyan.vercel.app/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="layer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolio-box"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://user-images.githubusercontent.com/94858304/238204725-0eb1fd2b-95d0-4dde-902c-ba65d8b92d61.PNG"
            alt=""
          />
          <div className="potfolio-layer">
            <h4>Your Car App</h4>
            <p>
              Shop is a React component that displays a carousel of cars with
              interactive features such as adding cars to a shopping cart and
              managing the cart contents.
            </p>

            <div className="layer-links">
              <a
                href="https://github.com/Abu-ellil/your-car-app"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="layer-icon" />
              </a>
              <a
                href="https://abu-ellil.github.io/your-car-app/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="layer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolio-box"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://user-images.githubusercontent.com/94858304/231672110-488dfbec-cf4c-4ea5-85d3-041ecc33a61a.png"
            alt=""
          />
          <div className="potfolio-layer">
            <h4>20-Vanilla-JS-PROJECTS</h4>
            <p>20 web PROJECTS designed and created by Vanilla JavaScript. </p>

            <div className="layer-links">
              <a
                href="https://github.com/Abu-ellil/20-Vanilla-JS-PROJECTS"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="layer-icon" />
              </a>
              <a
                href="https://abu-ellil.github.io/20-Vanilla-JS-PROJECTS/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="layer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolio-box"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://user-images.githubusercontent.com/94858304/231673207-c6eebb31-9f75-4acb-8b42-330c810a3681.png"
            alt=""
          />
          <div className="potfolio-layer">
            <h4>Kanban Board</h4>
            <p>
              This is a Kanban board project built using JavaScript, HTML, and
              CSS. The Kanban board is a tool for visualizing tasks and
              workflow.
            </p>

            <div className="layer-links">
              <a
                href="https://github.com/Abu-ellil/KanbanBoard"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="layer-icon" />
              </a>
              <a
                href="https://abu-ellil.github.io/KanbanBoard/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="layer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolio-box"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://user-images.githubusercontent.com/94858304/231668224-187f8e82-f36a-493a-abc6-12cedb097f35.png"
            alt=""
          />
          <div className="potfolio-layer">
            <h4>Appie.</h4>
            <p>
              Appie. is my main project to test what I learned after finishing
              HTML and CSS course.
            </p>

            <div className="layer-links">
              <a
                href="https://github.com/Abu-ellil/Appie"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="layer-icon" />
              </a>
              <a
                href="https://abu-ellil.github.io/Appie"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="layer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolio-box"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://private-user-images.githubusercontent.com/94858304/250699831-9eff9b6a-c0a8-4c3e-8a19-4413dff23c53.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg4NDMzMzM3LCJuYmYiOjE2ODg0MzMwMzcsInBhdGgiOiIvOTQ4NTgzMDQvMjUwNjk5ODMxLTllZmY5YjZhLWMwYTgtNGMzZS04YTE5LTQ0MTNkZmYyM2M1My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDcwNFQwMTEwMzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYWE3ZDA1NDUwZjM4ZDgyZWM4ZWQwYTI3ZDhmNjI2OWY1MjYxYWZlMDZmNmQ3YTdkY2UzNjcyNjBjMjBlNGVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.2S1l7-I3t3ksk7mOEvpeWFZGKdhfcXs9Qzq5gRwXYUA"
            alt=""
          />
          <div className="potfolio-layer">
            <h4>My Github</h4>
            <p>
              for more fun projects and ideas you can visit my github page.{" "}
            </p>
            <a href="https://github.com/Abu-ellil" className="">
              <FontAwesomeIcon icon={faGithub} className="layer-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio