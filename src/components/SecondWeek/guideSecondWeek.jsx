import React, { useEffect } from "react";

import Close from "../../assets/images/close.svg";
import Hints from "./hints";

const GuideSecondWeek = ({ overlayFn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guide-second-week">
      <div className="guide-wrapper">
        <div className="close-btn cursor-pointer">
          <img
            src={Close}
            alt="button for closing overlay"
            onClick={() => overlayFn(false)}
          />
        </div>
        <h1>Guide Sheet</h1>
        <div className="guide-content w-100">
          <div className="w-100">
            <h3>So, what do you think the definition of setting is?</h3>
            <div className="guesses w-100">
              <div className="guess-static">
                <h3 style={{ textWrap: "nowrap" }}>Any guesses?</h3>
                <div
                  className="guess-input bg-white"
                  style={{ padding: "3px 10px" }}
                >
                  <h2>________________________________________</h2>
                  <h3 className="guess-input-hint">{`> Setting is the time and place of a story.`}</h3>
                </div>
              </div>
              <div>
                <Hints />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSecondWeek;
