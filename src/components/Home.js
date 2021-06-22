// Import area
import Logo from "../logo.json";

// Home funcrion
const Home = () => {
  const getImage = Logo.map((obj) => {
    const { id, image } = obj;
    return (
      <img
        key={id}
        className="profile-img"
        src={image}
        alt="Iulian Stan Draw"
      />
    );
  });

  return (
    <div className="home">
      <h1 className="h-header">
        Hi,
        <br /> I'm Iulian Stan
      </h1>
      <p className="h-para">Former Military Policeman</p>
      <p className="h-para">Current Web Developer</p>
      <div>{getImage}</div>
    </div>
  );
};

// Home export
export default Home;
