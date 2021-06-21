// Import area
import Skillz from "../projects.json";

// Projects function
const Projects = () => {
  const addSkillz = Skillz.map((obj) => {
    const { id, skill, cardImg } = obj;
    return <img key={id} className="skill-logo" src={skill} alt="Linux Logo" />;
  });
  return (
    <div className="projects">
      <h1>My projects...</h1>
      <h3>After I learned the basics of:</h3>
      <div>{addSkillz}</div>
      <h3>I was able to do the following projects:</h3>
      <div className="cards">
        <div className="card">CARD</div>
        <div className="card">CARD</div>
      </div>
    </div>
  );
};

// Projects export
export default Projects;
