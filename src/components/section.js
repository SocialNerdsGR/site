import React from "react";

const Section = ({ title, description, children, id, dark }) => (
  <section className={dark ? `dark` : ``} id={id}>
    <div className={`container`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  </section>
);

Section.defaultProps = {
  dark: false,
};

export default Section;
