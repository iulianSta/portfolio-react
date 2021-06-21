// Contact function
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="c-header">Contact me...</h1>
      <p className="c-para">
        If you have any questions or if you want to
        <br />
        collaborate with me, you can send me a message to
        <br />
        <strong>iulianstangithub@gmail.com</strong>
      </p>
      <fieldset>
        <legend>You can also send me a direct message:</legend>
        <form>
          <input type="text" />
          <input type="email" />
          <textarea type="text" />
          <button type="submit">Send</button>
        </form>
      </fieldset>
    </div>
  );
};

//Contact export
export default Contact;
