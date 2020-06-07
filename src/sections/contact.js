import React from "react";

import Section from "../components/section";

const Contact = () => {
  return (
    <Section
      title={`Need help with your amazing project?`}
      description={`Let us mentor you on React, Docker, Laravel, Testing methodologies!`}
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
          type="email"
          id="email"
          name="email"
          placeholder={`Email`}
          required
        />
        <input type="text" name="name" placeholder={`Name`} required />
        <textarea
          name="message"
          placeholder={`Tell us what you need`}
          required
          rows={`5`}
        />
        <button type="submit">Send</button>
      </form>
    </Section>
  );
};

export default Contact;
