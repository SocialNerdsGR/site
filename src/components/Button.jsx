import React from "react";

export default function Button({ dark, children }) {
  <button className={`button ${dark && "button--dark"}`}>{children}</button>;
}
