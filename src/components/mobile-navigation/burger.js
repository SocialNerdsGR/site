import React from "react";

const Burger = ({ open, toggleMenu }) => {
  return (
    <div className={`burger ${open && "active"}`} onClick={toggleMenu}>
      {new Array(3).fill(0).map((_, index) => (
        <div key={index} className="line" />
      ))}
    </div>
  );
};

export default Burger;
