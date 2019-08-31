import React from "react";

const Burger = ({ menuOpened, toggleMenu }) => {
  return (
    <div className={`burger`} onClick={toggleMenu}>
      <div className={`line`} />
      <div className={`line`} />
      <div className={`line`} />
    </div>
  );
};

export default Burger;
