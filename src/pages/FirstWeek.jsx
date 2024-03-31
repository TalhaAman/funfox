import React, { useEffect } from "react";
import "../styles/firstweek.css";

import ChildReading from "../assets/images/child-reading.svg";

import {
  elementsDescription,
  notWorry,
  welcomeText,
} from "../constants/text-constants";
import CloudsList from "../components/firstWeek/cloudsList";
import LessonBanner from "../components/firstWeek/lessonBanner";

const FirstWeek = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main-heading">
        <h1>Elements of Story Writing</h1>
      </div>
      <h2 className="welcome-text">{welcomeText}</h2>
      <div className="elements-description">
        <h2>
          There are{" "}
          <span>
            <b>five</b>
          </span>
          {elementsDescription}
        </h2>
        <div className="child-reading">
          <img src={ChildReading} />
        </div>
      </div>
      <CloudsList />
      <h2 className="welcome-text">{notWorry}</h2>
      <LessonBanner />
    </>
  );
};

export default FirstWeek;
