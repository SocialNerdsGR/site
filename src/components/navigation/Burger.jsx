import React from "react";

const Burger = ({ open, toggleMenu }) => {
  return (
    <div className={`burger ${open && "burger--active"}`} onClick={toggleMenu}>
      {new Array(3).fill(0).map((_, index) => (
        <div key={index} className="burger__line" />
      ))}
    </div>
  );
};

export default Burger;
