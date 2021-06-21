// Footer function
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div>
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>Gmail</span>
      </div>
      <h5>
        <span>Made with ❤️ by Iulian Stan </span>
        <br />
        <span>
          All copyrights reserved ©️ <span>{year}</span>
        </span>
      </h5>
    </div>
  );
};

// Footer export
export default Footer;
