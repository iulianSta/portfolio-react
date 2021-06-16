// List function
const List = () => {
  // Navigation menu
  const menu = ["Home", "About me", "Projects", "Contact"];

  const navBar = menu.map((el, i) => <li key={i}>{el}</li>);

  return <ul>{navBar}</ul>;
};

// List export
export default List;
