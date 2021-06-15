const List = () => {
  const aboutMe = "About me";
  const myProjects = "Projects";
  const contactMe = "Contact";
  const arr = [];

  arr.push(aboutMe, myProjects, contactMe);

  const navBar = arr.map((el, i) => <li key={i}>{el}</li>);

  return <div>{navBar}</div>;
};

export default List;
