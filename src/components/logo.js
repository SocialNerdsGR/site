import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
  line-height: 0;
`;
const Social = styled.span`
  color: #18a2de;
`;
const Nerds = styled.span`
  color: #838383;
`;

const Logo = () => {
  return (
    <Wrapper>
      <Social>S</Social>
      <Nerds>N</Nerds>
    </Wrapper>
  );
};

export default Logo;
