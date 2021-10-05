// Import area
import React from "react";
// import { useForm, ValidationError } from '@formspree/react';

// Contact function
const Contact = () => {
  
  // const [state, handleSubmit] = useForm("xeqvdjro");

  //   if (state.succeeded) {
  //      return (<p>Thank you for contacting with me.</p>);
  //  } 
   
  
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

        <legend>Send me a message</legend>

        <form 
        // onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          {/* <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          /> */}
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-Mail"/>
          {/* <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
           /> */}
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Your message"
          />
          {/* <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          /> */}
          <button type="submit" 
          // disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </fieldset>
    </div>
  );
};

//Contact export
export default Contact;
