import React from "react";

import "./style.scss";

function ContactForm() {
  return (
    <form
      name="contact"
      className="form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />

      <div className="form__field-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form__field"
          name="name"
          id="name"
          placeholder="John Smith"
        />
      </div>

      <div className="form__field-container">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form__field"
          name="email"
          id="email"
          placeholder="john_smith@gmail.com"
        />
      </div>

      <div className="form__field-container form__field-container--full">
        <label htmlFor="message">Message</label>
        <textarea
          className="form__field--message"
          name="message"
          id="message"
          rows="6"
          placeholder="I'd like to inquiry about..."
        />
      </div>

      <div className="form__button-container">
        <input type="submit" value="Submit" className="form__button" />
        <input type="reset" value="Clear" className="form__button" />
      </div>
    </form>
  );
}

export default ContactForm;
