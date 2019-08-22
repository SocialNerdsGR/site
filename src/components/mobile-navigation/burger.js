import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  float: right;
  margin-right: 20px;
`;

const Line = styled.div`
  width: 20px;
  border: #18a2de solid 2px;
  margin-bottom: 3px;
  border-radius: 25px;
`;

const Burger = ({ menuOpened, toggleMenu }) => {
  return (
    <Wrapper onClick={toggleMenu}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
};

export default Burger;
