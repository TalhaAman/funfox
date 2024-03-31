import React from "react";

import Home from "../../assets/images/home.svg";
import Clock from "../../assets/images/clock.svg";

const Hints = () => {
  return (
    <div>
      <h3 className="mw-100 " style={{ whiteSpace: "nowrap" }}>
        Hint:
        <span className="verticle-align-middle hint" width="48px" height="48px">
          <img src={Clock} alt="clock symbolizing time" />
        </span>
        <span className="verticle-align-middle hint" width="48px" height="48px">
          <img src={Home} alt="home symbolizing place" />
        </span>
      </h3>
    </div>
  );
};

export default Hints;
