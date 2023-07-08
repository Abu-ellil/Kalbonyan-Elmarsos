import code from "../assets/code.png";
import js from "../assets/js.png";
import react from "../assets/reactjs.png";
import node from "../assets/node.png";
import vjs from "../assets/UC-d39716ad-be3a-4d23-9b0b-e8c039dd882e.jpg";
import fund from "../assets/1670172004596.png";

const Certifications = () => {
  const certifications = [
    {
      name: "NodeJS Certification",
      image: `${node}`,
      issuer: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      date: "July 2023",
      link: "https://drive.google.com/file/d/18hOHTuJmQqhBXYdekO1LpjIK41EZ2cPN/view?usp=sharing",
    },
    {
      name: "React Certification",
      image: `${react}`,
      issuer: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      date: "May 2023",
      link: "https://drive.google.com/file/d/1-KoVotMEpnenKBM0sfy8fv6AeBqT8qI5/view?usp=sharing",
    },
     {
      name: "20 JavaScript Projects",
      image: `${vjs}`,
      issuer: "20 web projects with vanilla javascript",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1ErdMDznMUC0rVXVYvldJfe5CmdHeRxVF/view?usp=sharing",
    },
    {
      name: "JavaScript-the complete guide",
      image: `${js}`,
      issuer: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
      date: "February 2023",
      link: "https://drive.google.com/file/d/10n6FlNxcbwbqfYRuJfe6i5FRP8JzYc_8/view?usp=sharing",
    },
   
    {
      name: "HTML&CSS",
      image: `${code}`,
      issuer: " Build Responsive Real-World Websites with HTML and CSS",
      date: "December 2022",
      link: "https://drive.google.com/file/d/1rUQQgkE6BG0yyrmEUQkPgqeZUTSCuDK4/view?usp=sharing",
    },

    {
      name: "Beyond the Fundamentals",
      image: `${fund}`,
      issuer: "Programming Foundations: Beyond the Fundamentals",
      date: "December, 2022",
      link: "https://drive.google.com/file/d/1B19ssRiWd9aIYg20eMv_pVnBToEAi8gS/view?usp=sharing",
    },
  ];

  return (
    <section className="certifications">
      <h2 className="heading">My 
        <span> Certifications</span>
      </h2>
      <div className="certifications-container">
        {certifications.map((certification) => (
          <div className="certification-card" key={certification.name}>
            <div className="certification-card-inner">
              <div className="certification-card-front">
                <img src={certification.image} alt={certification.name} />
                <h3>{certification.name}</h3>
              </div>
              <div className="certification-card-back">
                <h3>{certification.issuer}</h3>
                <p>Date: {certification.date}</p>
                <a className="btn" href={certification.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
