import React, { useState } from "react";

function Services() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box" data-aos="flip-left">
          <i className="fa-solid fa-code"></i>
          <h3>Full-Stack Web Application Development</h3>
          <p>
            {showMore ? (
              <>
                Provide end-to-end web application development services using
                the MERN stack. This includes creating scalable and responsive
                web applications with a strong backend and dynamic frontend.
                Services would include tasks such as database design and
                integration, API development, server-side logic implementation,
                user interface development, and deployment.
              </>
            ) : (
              <>
                Provide end-to-end web application development services using
                the MERN stack. This includes creating
              </>
            )}
          </p>
          <a href="#" className="btn" onClick={toggleShowMore}>
            {showMore ? "Read Less" : "Read More"}
          </a>
        </div>

        <div className="services-box" data-aos="flip-left">
          <i className="fa-solid fa-paintbrush"></i>
          <h3>RESTful API Development</h3>
          <p>
            {showMore ? (
              <>
                Specialize in developing RESTful APIs using the MERN stack. This
                involves creating server-side endpoints that facilitate
                communication between the frontend and backend of an
                application. Services would include designing the API structure,
                implementing CRUD operations, handling authentication and
                authorization, and ensuring data security.
              </>
            ) : (
              <>
                Specialize in developing RESTful APIs using the MERN stack. This
                involves creating server-side endpoints that facilitate
                communication between the frontend and backend of an
                application.
              </>
            )}
          </p>
          <a href="#" className="btn" onClick={toggleShowMore}>
            {showMore ? "Read Less" : "Read More"}
          </a>
        </div>

        <div className="services-box" data-aos="flip-left">
          <i className="fa-solid fa-chart-simple"></i>
          <h3>Single-Page Application (SPA) Developmen</h3>
          <p>
            {showMore ? (
              <>
                Focus on developing Single-Page Applications using the MERN
                stack. SPAs provide a seamless user experience by dynamically
                updating content on a single web page without requiring page
                reloads. Services would involve leveraging React to create
                interactive user interfaces, handling client-side rendering, and
                utilizing Express.js and Node.js to build a robust backend that
                supports the SPA.
              </>
            ) : (
              <>
                Focus on developing Single-Page Applications using the MERN
                stack. SPAs provide a seamless user experience by dynamically
                updating content on a single web page without requiring page
                reloads.
              </>
            )}
          </p>
          <a href="#" className="btn" onClick={toggleShowMore}>
            {showMore ? "Read Less" : "Read More"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
