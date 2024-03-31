import React from "react";

import Setting from "../../assets/images/setting-cloud.svg";
import Characters from "../../assets/images/characters-cloud.svg";
import Plot from "../../assets/images/plot-cloud.svg";
import Problem from "../../assets/images/problem-cloud.svg";
import Resolution from "../../assets/images/resolution-cloud.svg";

const CloudsList = () => {
  return (
    <div className="clouds">
      <div>
        <img src={Setting} alt="cloud with text: setting" />
      </div>
      <div>
        <img src={Characters} alt="cloud with text: characters" />
      </div>
      <div>
        <img src={Plot} alt="cloud with text: plot" />
      </div>
      <div>
        <img src={Problem} alt="cloud with text: problem" />
      </div>
      <div>
        <img src={Resolution} alt="cloud with text: resolution" />
      </div>
    </div>
  );
};

export default CloudsList;
