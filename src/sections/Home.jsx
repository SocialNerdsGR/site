import React from "react";
import Circle from "../components/Circle";

export default function Home() {
  return (
    <>
      <Circle position="top" />
      <Circle position="bottom" />

      <div className="home">
        <h1 className="home__title">
          We will <span>help</span> you to skyrocket your <span>product</span>
        </h1>
        <h2 className="home__tagline">We take software seriously</h2>
        <div className="home__actions">
          <a
            className={`home__workshops-link`}
            target="_blank"
            rel="noreferrer"
            href="https://socialnerdsgr.eventbrite.com"
          >
            Workshops
          </a>
          <a className={`home__hire-us-link`} href="#hire-us">
            Hire us
          </a>
        </div>
      </div>
    </>
  );
}
