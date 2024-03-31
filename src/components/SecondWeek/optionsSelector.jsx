import React from "react";

import SunnyDay from "../../assets/images/sunny-day.svg";
import ScaryNight from "../../assets/images/scary-night.svg";

const OptionsSelector = () => {
  return (
    <div className="options-selector">
      <div className="options-wrapper">
        <div className="options-box">
          <img src={SunnyDay} alt="sunnay day on beach" />
        </div>
        <h3>Sunny day at a beach</h3>
      </div>
      <div className="options-wrapper">
        <div className="options-box">
          <img src={ScaryNight} alt="scary night view with full moon" />
        </div>
        <h3>A cold rainy night in a haunted house in October</h3>
      </div>
    </div>
  );
};

export default OptionsSelector;
