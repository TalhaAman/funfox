import React, { useEffect } from "react";
import "../styles/secondweek.css";

import Home from "../assets/images/home.svg";
import Clock from "../assets/images/clock.svg";

import Hints from "../components/SecondWeek/hints";
import OptionsSelector from "../components/SecondWeek/optionsSelector";

const SecondWeek = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>
        Can you figure out the definition of setting from the following
        examples?
      </h1>
      <h2 className="welcome-text">(take a minute to think about this)</h2>

      <OptionsSelector />
      <h3 className="welcome-text">
        So, what do you think the definition of setting is?
      </h3>
      <div className="guesses">
        <div className="guess-static">
          <h3>Any guesses?</h3>
          <div className="guess-input">
            <h2>________________________________________</h2>
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <div className="elements-description">
        <h2 className="mw-100 ">
          Setting is the time{" "}
          <span className="verticle-align-middle">
            <img src={Clock} alt="clock symbolizing time" />
          </span>{" "}
          and place{" "}
          <span className="verticle-align-middle">
            <img src={Home} alt="home symbolizing place" />
          </span>{" "}
          of a story. It often answers the questions: when? and where?
        </h2>
      </div>
      <h3 className="welcome-text">
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places
      </h3>
    </>
  );
};

export default SecondWeek;
