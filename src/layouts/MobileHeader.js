import { useState } from "react";
import { useTranslation } from "react-i18next";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [t, i18n] = useTranslation("global");
  return (
    <div className="devman_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/dark.png" alt="" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
              <a href="#home">{t("header.home")}</a>
            </li>
            <li>
              <a href="#about">{t("header.about")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("header.portfolio")}</a>
            </li>
            <li>
              <a href="#service">{t("header.service")}</a>
            </li>
            <li>
              <a href="#contact">{t("header.contact")}</a>
            </li>
            <div>
               <button onClick={() => i18n.changeLanguage("en") }>EN</button>
             </div>
             <div>
                <button onClick={() => i18n.changeLanguage("es") }>ES</button>
             </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
