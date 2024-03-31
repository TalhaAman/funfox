import React, { useState } from "react";

import Bag from "../assets/images/bag.svg";
import Hat from "../assets/images/hat.svg";
import Book from "../assets/images/book.svg";
import Home from "../assets/images/home.svg";
import Clock from "../assets/images/clock.svg";
import Scale from "../assets/images/scale.svg";
import Week1 from "../assets/images/week-1.svg";
import Pencil from "../assets/images/pencil.svg";
import Logo from "../assets/images/main-logo.svg";
import OpenBook from "../assets/images/open-book.svg";
import HelpBtn from "../assets/images/help-btn-icon.svg";
import LeftBGDesign from "../assets/images/left-bg-design.svg";
import RightBGDesign from "../assets/images/right-bg-design.svg";

import LowerNav from "../components/common/LowerNav";
import GuideSecondWeek from "../components/SecondWeek/guideSecondWeek";

const CustomLayout = ({ children, isButton, page, setPage }) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div>
      <div className="funfox">
        <div className="logo">
          <img src={Logo} alt="Funfox logo" />
        </div>

        <div className="week-heading">
          {page == 1 ? <img src={Week1} alt="week count heading" /> : null}
        </div>

        <div className="content-wrapper">
          {children}
          {/*  Icons on sides of wrapper */}
          <div className="pencil-icon">
            <img src={Pencil} alt="pencil" />
          </div>
          <div className="bag-icon">
            <img src={Bag} alt="bag" />
          </div>
          <div className="open-book-icon">
            <img src={OpenBook} alt="open book" />
          </div>
          <div className="scale-icon">
            <img src={Scale} alt="measurement scale" />
          </div>
          {isButton ? (
            <div
              className="book-icon cursor-pointer"
              onClick={() => setOverlay(true)}
            >
              <img src={HelpBtn} alt="Book" />
            </div>
          ) : (
            <div className="book-icon">
              <img src={Book} alt="Book" />
            </div>
          )}
          <div className="hat-icon">
            <img src={Hat} alt="graduation cap" />
          </div>
        </div>

        <LowerNav page={page} setPage={setPage} />

        <img
          src={LeftBGDesign}
          alt="Dotted background design at left"
          className="left-bg-design"
        />
        <img
          src={RightBGDesign}
          alt="Dotted background design at right"
          className="right-bg-design"
        />
      </div>
      {overlay && <GuideSecondWeek overlayFn={setOverlay} />}
    </div>
  );
};

export default CustomLayout;
