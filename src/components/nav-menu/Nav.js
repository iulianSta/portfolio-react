// Nav function
const Nav = () => {
  // Navigation menu
  const menu = ["Home", "About me", "Projects", "Contact"];

  const navBar = menu.map((el, i) => <li key={i}>{el}</li>);

  return <ul>{navBar}</ul>;
};

// Nav export
export default Nav;
