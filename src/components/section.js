import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
`;
const StyledSection = styled.section`
  text-align: center;
  background-color: ${({ dark }) => (!dark ? `white` : `#18a2de`)};
  font-size: 1.4rem;
  padding: 10px;
  margin: 10px 0;
`;

const Title = styled.h3`
  color: ${({ dark }) => (!dark ? `#18a2de` : `white`)};
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  color: ${({ dark }) => (!dark ? `#555` : `white`)};
  font-size: 1.1rem;
`;

const Section = ({ title, description, children, id, dark }) => (
  <StyledSection id={id} dark={dark}>
    <Wrapper>
      <Title dark={dark}>{title}</Title>
      <Description dark={dark}>{description}</Description>
      {children}
    </Wrapper>
  </StyledSection>
);

Section.defaultProps = {
  dark: false,
};

export default Section;
