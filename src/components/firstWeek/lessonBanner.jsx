import React from "react";

import BulletsBG from "../../assets/images/bullets-bg.svg";

const LessonBanner = () => {
  return (
    <div className="bullets">
      <div className="lesson-banner-container">
        <img src={BulletsBG} alt="lesson banner background" />
        <h2 className="lesson-banner-text">
          For today’s lesson, we will try to understand and practice writing the
          setting for our stories. <br />
          The setting is an important element of every fiction story.
        </h2>
      </div>
    </div>
  );
};

export default LessonBanner;
