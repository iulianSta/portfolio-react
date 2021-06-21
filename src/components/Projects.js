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
    const { id, img } = obj;
    return <img key={id} className="project-img" src={img} alt="Projects" />;
  });

  return (
    <div id="top" className="projects">
      <h1>My projects...</h1>
      <h3>After I learned:</h3>
      <div className="logo-container">{addSkillz}</div>
      <h3>I was able to do the following projects:</h3>
      <div className="cards">
        <div className="card">{insertImages}</div>
      </div>
      <button className="gotop">
        <a href="#top">⬆️ Top</a>
      </button>
    </div>
  );
};

// Projects export
export default Projects;
