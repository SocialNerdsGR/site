import React from "react";

import Section from "../components/Section";
import Button from "../components/Button";

const Contact = () => {
  return (
    <Section
      title={`Need help with your amazing project?`}
      description={`Let us mentor you on React, Docker, and Agile methodologies.`}
      id={"hire-us"}
    >
      <form
        name="contact"
        method="POST"
        data-netlify={true}
        action="/workshops"
        className={`contact`}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="contact__input"
          type="email"
          id="email"
          name="email"
          placeholder={`Email`}
          required
        />
        <input
          className="contact__input"
          type="text"
          name="name"
          placeholder={`Name`}
          required
        />
        <textarea
          className="contact__textarea"
          name="message"
          placeholder={`Tell us what you need`}
          required
          rows={`5`}
        />
        <Button color="dark" full type="submit">
          Hire us
        </Button>
      </form>
    </Section>
  );
};

export default Contact;
