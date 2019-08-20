import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import Section from "../components/section";

const Field = styled.input`
  width: 100%;
  border: #18a2de 1px solid;
  border-radius: 25px;
  padding-left: 10px;
  font-size: 0.9rem;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const TextareaField = styled.textarea`
  width 100%;
  border: #18a2de 1px solid;
  border-radius: 25px;
  padding-left: 10px;
  padding-top: 5px;
  font-size: .9rem;
  margin-bottom: 10px;
  min-width: 100%;
  max-width: 100%;
  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  color: #18a2de;
  font-size: 1.2rem;
  padding: 10px 40px;
  border: #18a2de 1px solid;
  border-radius: 25px;
  width: 100%;
`;

const Contact = () => {
  return (
    <Section
      title={`Need help with your amazing project?`}
      description={`Let us mentor you on React, Docker, Symfony, Laravel, Drupal, Testing methodologies!`}
      id={"training"}
    >
      <form name="Contact form" method="POST" data-netlify={true}>
        <input type="hidden" name="form-name" value="Contact Form" />
        <Field type="email" name="email" placeholder={`Email`} required />
        <Field type="text" name="name" placeholder={`Name`} required />
        <TextareaField
          name="message"
          placeholder={`Tell us what you need`}
          required
          rows={`5`}
        ></TextareaField>
        <Submit type="submit">Send</Submit>
      </form>
    </Section>
  );
};

export default Contact;
