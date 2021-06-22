// Import area
import React, { useState } from "react";

// Contact function
const Contact = () => {
  const [userInput, setUserInput] = useState("");

  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  function submitHandle(e) {
    e.preventDefault();
    setUserInput("");
  }
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
        <form onSubmit={submitHandle}>
          <input
            type="text"
            value={userInput}
            onChange={changeHandle}
            placeholder="Name"
          />
          <input type="email" placeholder="E-Mail" />
          <textarea type="text" placeholder="Your message" />
          <button type="submit">Send</button>
        </form>
      </fieldset>
    </div>
  );
};

//Contact export
export default Contact;
