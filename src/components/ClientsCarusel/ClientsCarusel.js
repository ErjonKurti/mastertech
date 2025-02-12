import React from "react";
import Slider from "react-slick";
import "./ClientsCarusel.css";

const clientLogos = [
  "/static/media/client_logo_1.d5f7033c5f35b36e923b.webp",
  "/static/media/client_logo_2.1bb6442cb71b082c3560.webp",
  "/static/media/client_logo_3.8dae78cb8486982a8884.webp",
  "/static/media/client_logo_4.d22163bf8bbcd990b3a3.webp",
  "/static/media/client_logo_5.d08e08ca78e35a5052fa.webp",
  "/static/media/client_logo_6.c897e049948feef0782a.webp",
  "/static/media/client_logo_7.63afb7dece5f39c758df.webp",
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="client-carousel">
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="client-logo-item">
            <img src={logo} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
