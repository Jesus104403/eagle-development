import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "courses",
    icon: "img/svg/cpu.svg",
    img: "img/service/1.jpg",
    description: [
      "At EagleDev, we not only create exceptional websites, but we also share our knowledge and expertise through a variety of courses designed to help you master the art of web development. Whether you're just starting your career in technology or looking to hone your skills, we have the perfect course for you.",
    ],
  },
  {
    name: "Mobile Application",
    icon: "img/svg/phone.svg",
    img: "img/service/2.jpg",
    description: [
      " we specialize not only in developing exceptional websites, but also in creating innovative and high quality mobile applications. Our team of talented and creative developers is committed to taking your mobile ideas to the next level by providing intuitive user experiences and advanced functionalities.",
    ],
  },
  {
    name: "Website Development",
    icon: "img/svg/web.svg",
    img: "img/service/3.jpg",
    description: [
      "At EagleDev, we pride ourselves on creating websites that are not only visually stunning, but also functional and easy to use. Our team of web development experts works diligently to ensure that each site we create reflects our clients' unique identity and meets their business objectives. Here are just a few of our featured projects.",
    ],
  },
  {
    name: "Marketing Digital",
    icon: "img/svg/star.svg",
    img: "img/service/4.jpg",
    description: [
      "we offer comprehensive digital marketing services to help you maximize your online presence and achieve your business goals. Our strategic and data-driven approach ensures that every digital marketing campaign is effective and delivers a significant return on investment."
    ],
  },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
