import React, { useState } from "react";
import me from "../assets/me1.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <section className="about" id="about">
      <div>
        <img className="home-img" src={me} alt="" />
      </div>
      <div
        className="about-content heading"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h2>
          > About <span>Me</span>
        </h2>
        <h2>MERN Stack Developer!</h2>
        <p>
          {showMore ? (
            <>
              As a MERN Stack Developer, I specialize in developing web
              applications using the MERN stack, which stands for MongoDB,
              Express.js, React, and Node.js. Here's a description of what it
              means to be a MERN Stack Developer:
              <br />
              <br />
              MongoDB: MongoDB is a popular NoSQL database that provides
              flexibility and scalability for storing and managing data. As a
              MERN Stack Developer, I have experience working with MongoDB to
              design database schemas, perform CRUD operations (Create, Read,
              Update, Delete), and handle data interactions within the
              application.
              <br />
              <br />
              Express.js: Express.js is a flexible and lightweight web
              application framework for Node.js. It allows me to build robust
              and scalable web APIs and server-side applications. With
              Express.js, I can handle routing, middleware, and other backend
              functionalities to create a seamless connection between the
              frontend and the database.
              <br />
              <br />
              React: React is a powerful JavaScript library for building user
              interfaces. As a MERN Stack Developer, I utilize React to create
              interactive and dynamic user interfaces for web applications. I
              have expertise in developing reusable components, managing state
              and props, and implementing client-side rendering for efficient
              and responsive user experiences.
              <br />
              <br />
              Node.js: Node.js is a JavaScript runtime environment that allows
              me to execute server-side code using JavaScript. With Node.js, I
              can build scalable and efficient backend applications, handle
              server-side logic, integrate with databases, and provide APIs for
              frontend interactions. It enables me to have a unified JavaScript
              codebase for both the frontend and backend.
            </>
          ) : (
            <>
              As a MERN Stack Developer, I specialize in developing web
              applications using the MERN stack, which stands for MongoDB,
              Express.js, React, and Node.js. Here's a description of what it
              means to be a MERN Stack Developer:
            </>
          )}
        </p>
        <a href="#" className="btn" onClick={toggleShowMore}>
          {showMore ? "Read Less" : "Read More"}
        </a>
      </div>
    </section>
  );
}

export default About;
