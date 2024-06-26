import { useTranslation } from "react-i18next";


const Features = () => {
  const [t, i18n] = useTranslation("global");
  const features_list = [
    {
      title: t("features.title-dedication"),
      icon: "img/svg/design.svg",
      text: t("features.text-dedication"),
    },
    {
      title: t("features.smart"),
      icon: "img/svg/development.svg",
      text: t("features.text-smart")
    },
    {
      title: t("features.intelligence"),
      icon: "img/svg/landing.svg",
      text: t("features.text-intelligence"),
    },
  ];

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
