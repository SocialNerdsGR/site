import React from "react";
import Container from "./Container";

const Section = ({ title, description, children, id, dark }) => (
  <section className={`section ${dark && `section--dark`}`} id={id}>
    <Container>
      <h3 className="section__title">{title}</h3>
      <p className="section__description">{description}</p>
      {children}
    </Container>
  </section>
);

Section.defaultProps = {
  dark: false,
};

export default Section;
