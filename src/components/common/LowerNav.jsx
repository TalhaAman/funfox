import React from "react";

import Tooltip from "../../assets/images/tooltip.svg";
import Pagination from "../../assets/images/pagination.svg";
import VoiceOver from "../../assets/images/voice-over.svg";
import RightSlideBtn from "../../assets/images/right-slide-btn.svg";
import LeftSlideBtn from "../../assets/images/left-slide-btn.svg";

const LowerNav = ({ page, setPage }) => {
  return (
    <div className="lower-nav">
      <div>
        <img src={VoiceOver} alt="voice over icon" />
      </div>
      <div className="navigation-btns">
        <img
          src={LeftSlideBtn}
          alt="left slide button"
          className={page == 2 && "cursor-pointer"}
          onClick={() => {
            page == 2 && setPage(1);
          }}
        />
        <div className="pagination">
          <img src={Pagination} alt="page number" />
          <h3>{page}</h3>
        </div>

        <img
          src={RightSlideBtn}
          className={page == 1 && "cursor-pointer"}
          onClick={() => {
            page == 1 && setPage(2);
          }}
          alt="right slide button"
        />
      </div>
      <div>
        <img src={Tooltip} alt="detail icon" />
      </div>
    </div>
  );
};

export default LowerNav;
