import React from "react";
import Circle from "../components/Circle";

export default function Home() {
  return (
    <>
      <Circle position="top" />
      <Circle position="bottom" />

      <div className={`intro flex`}>
        <h1>
          We will <span>help</span> you to skyrocket your <span>product</span>
        </h1>
        <h2>We take software seriously</h2>
        <div className="actions">
          <a
            className={`workshops-link`}
            target="_blank"
            rel="noreferrer"
            href="https://socialnerdsgr.eventbrite.com"
          >
            Workshops
          </a>
          <a className={`hire-us-link`} href="#hire-us">
            Hire us
          </a>
        </div>
      </div>
    </>
  );
}
