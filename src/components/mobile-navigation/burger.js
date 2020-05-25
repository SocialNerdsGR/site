import React from "react";

const Burger = ({ open, toggleMenu }) => {
  return (
    <div className={`burger ${open && "active"}`} onClick={toggleMenu}>
      <div className={`line`} />
      <div className={`line`} />
      <div className={`line`} />
    </div>
  );
};

export default Burger;
