import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-contents">
        <h1 className="banner_title">Ginny &amp; Georgia</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          Angsty,awkward fifteen-year-old Ginny Miller often feels more mature
          than her 30-year-old mother, the irresistible, dynamic Georgia Miller.
          After years on the run, Georgia desperately wants to put down roots in
          picturesque New England and give her family something they've never
          had: a normal life.
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
