import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({
  handleScrollToSlider,
  handleScrollToAbout,
  handleScrollToServices,
  handleScrollToContact,
  changeLanguage,
  lang,
  language,
}) => {
  return (
    <>
      <ul className="nav navbar-nav">
        <li className="active">
          <Link to={"#"} onClick={handleScrollToSlider}>
            {lang.nav.home}
          </Link>
        </li>
        <li>
          <Link to={"#"} onClick={handleScrollToAbout}>
            {lang.nav.about}
          </Link>
        </li>
        <li>
          <Link to={"#"} onClick={handleScrollToServices}>
            {lang.nav.ourservices}
          </Link>
        </li>
        <li>
          <Link to={"#"} onClick={handleScrollToContact}>
            {lang.nav.contact}
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            {lang.nav.language} <i className="fa fa-chevron-down"></i>{" "}
          </Link>
          <ul className="sub-menu left">
            <li>
              <Link
                to={"#"}
                className="dez-page"
                onClick={() => changeLanguage("english")}
              >
                English
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="dez-page"
                onClick={() => changeLanguage("english")}
              >
                العربية
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default HeaderMenu;