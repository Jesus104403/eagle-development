import Counter from "./Counter";
import { useTranslation } from "react-i18next";

const homeData = {
  firstName: "Eagles",
  lastName: "Development",
  designation: "Web Developer",
  address: "",
  img: "img/hero/2.jpg",
  bio: "innovation and professionalism in each code",
  numberOfProject: 800,
  numberofyear: 12,
};

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {t("home.designation")}  {homeData.address}
                </h3>
                <p className="text">{t("home.bio")}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                    {t("home.get")} 
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                    {t("home.about")} 
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                    {t("home.years")} 
                      <br />
                    {t("home.success")} 
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                    {t("home.projects")} 
                      <br />
                    {t("home.completed")} 
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="img/hero/circle.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
