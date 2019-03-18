import React from "react";

import "./style.scss";

function ContactForm() {
  return (
    <form
      name="contact"
      className="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />

      <div className="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul className="">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  );
}

export default ContactForm;
