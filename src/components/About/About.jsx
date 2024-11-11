import "./About.scss";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,ts",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,scss",
    id: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>ABOUT ME</h2>
            <p>
              Hello, my name is Eduardo, a Brazilian front-end developer
              specializing in React. I focus on building efficient, responsive
              web interfaces with clean, maintainable code.
            </p>
            <br />
            <p>
              For as long as I can remember, I thought software development was
              the coolest thing. But never in a million years did I think
              I&apos;d become a developer myself. As I grew older, I realized
              not only is it a viable career path for me, but it&apos;s also one
              of the few I&apos;d be happy to pursue. And here I am, giving it a
              shot.
            </p>
            <br />
            <p>Let’s see where this road leads. 🙃</p>
            <br />
            <p>
              My technical skills include React, Sass, JavaScript, TypeScript,
              CSS, HTML, and some experience with Express.js for back-end
              development.
            </p>
          </div>

          <div className="skills">
            <p>Tech Stack</p>

            <div>
              <ul>
                {skillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img src={icon.img} alt="skill-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
