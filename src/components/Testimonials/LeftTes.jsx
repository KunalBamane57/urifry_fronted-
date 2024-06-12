import React from "react";
import TesWhole from "../../assets/testimonialWhole.png";
import TesEllipse from "../../assets/tesEllipse.png";
import Star48 from "../../assets/star48.png";
import ColorTes from "../../assets/colortes.png";

const LeftTes = () => {
  return (
    <div className="lg:w-[60%] w-full relative">
      <img
        className="absolute lg:top-[70px] lg:-left-[40px] lg:scale-100 scale-75 -left-16 top-4 animate-spin-slow"
        src={ColorTes}
        alt="Color background"
      />
      <img
        className="absolute lg:-bottom-[110px] lg:-left-[130px] animate-bounce"
        src={Star48}
        alt="Star decoration"
      />
      <img
        className="absolute lg:-top-[80px] lg:-left-[65px] lg:w-auto w-full animate-slideInLeft"
        src={TesEllipse}
        alt="Ellipse decoration"
      />
      <img className="absolute animate-fadeIn" src={TesWhole} alt="Testimonial image" />
    </div>
  );
};

export default LeftTes;
