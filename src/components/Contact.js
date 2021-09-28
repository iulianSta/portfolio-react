// Import area
// import React, { useState } from "react";

// Contact function
const Contact = () => {
  // const [userInput, setUserInput] = useState("");

  // function changeHandle(e) {
  //   setUserInput(e.target.value);
  // }

  // function submitHandle(e) {
  //   e.preventDefault();
  //   setUserInput("");
  // }
  return (
    <div className="contact">
      <h1 className="c-header">Contact me...</h1>
      <p className="c-para">
        If you have any questions or if you want to collaborate with me, you can
        send me a direct <br />
        <a href="mailto:iulianstangithub@gmail.com?subject=Hello&body=Hi Iulian">
          message
        </a>{" "}
        !
      </p>
      <fieldset>
        {/* <legend>E-Mail & Location</legend>
        <strong>iulianstangithub@gmail.com</strong>
        <p>04600 Altenburg</p> */}
        <legend>E-Mail</legend>
        <form 
        action="https://formspree.io/f/xeqvdjro"
        method="POST"
        onsubmit="setTimeout(function(){window.location.reload()},3)"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
          <input type="email" name="_replyto" placeholder="E-Mail"/>
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
          
          />
          <button type="submit">Send</button>
        </form>
      </fieldset>
    </div>
  );
};

//Contact export
export default Contact;
