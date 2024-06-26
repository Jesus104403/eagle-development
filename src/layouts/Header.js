import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits";
import { useTranslation } from "react-i18next";




const Header = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
            <a className="dark" href="#">
              <img src="img/logo/dark.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
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
    </div>
  );
};
export default Header;
