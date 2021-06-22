// Import area
import Skillz from "../projects.json";
import Images from "../images.json";
// Projects function
const Projects = () => {
  const addSkillz = Skillz.map((obj) => {
    const { id, skill } = obj;
    return (
      <img key={id} className="skill-logo" src={skill} alt="Project Logo" />
    );
  });

  const insertImages = Images.map((obj) => {
    const { id, name, img, infos, git, link } = obj;
    return (
      <div key={id} className="card">
        <h4>{name}</h4>
        <img className="project-img" src={img} alt="Projects" />
        <p>{infos}</p>
        <button>
          <a href={git} target="blank">
            Code
          </a>
        </button>
        <button>
          <a href={link} target="blank">
            Go to project
          </a>
        </button>
      </div>
    );
  });

  return (
    <div id="top" className="projects">
      <h1>My projects...</h1>
      <h3>After I learned:</h3>
      <div className="logo-container">{addSkillz}</div>
      <h3>I was able to do the following projects:</h3>
      <div className="cards">{insertImages}</div>
      <button className="gotop">
        <a href="#top">⬆️ Top</a>
      </button>
    </div>
  );
};

// Projects export
export default Projects;
