import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
const Testimonials = () => {
  useEffect(() => {
    dataImage();
    imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
            These are some of the testimonials that our customers say about us
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
         
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/4.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Josue</h3>
                      <span>ABC Studio</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                  We needed a website that was not only visually appealing, but also functional and easy to use. EagleDev exceeded our expectations in every aspect. Communication was seamless and the project was completed on time and on budget. I highly recommend their services to anyone looking for quality web development.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/1.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Selena </h3>
                      <span>lashista</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                  EagleDev transformed our online presence with a modern and functional website. Their attention to detail and commitment to quality impressed us from day one. Thanks to their work, our conversions have increased significantly - highly recommended!

                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/3.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>David </h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
