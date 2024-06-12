import React from "react";
import adv2 from "../../../assets/adv2.png";
import advs2 from "../../../assets/advs2.png";
import Star48 from "../../../assets/star48.png";
import ColorSec from "../../../assets/coloradvsec.png";

const SecondLeftAdv = () => {
  return (
    <div className="lg:w-[40%] w-full mt-16 lg:mt-0 relative">
      <img
        className="absolute lg:-top-[40px] lg:scale-100 scale-75 top-60 lg:-left-0 -left-10 animate-spin-slow"
        src={ColorSec}
        alt="Background design"
      />
      <img
        className="absolute lg:-top-[200px] lg:left-[450px] lg:-bottom-0 -bottom-20 animate-bounce"
        src={Star48}
        alt="Star decoration"
      />
      <img
        className="absolute h-[500px] lg:-top-[120px] lg:-left-[-5px] w-[600px] animate-slideInLeft"
        src={adv2}
        alt="Advantage image 2"
      />
      <img
        className="absolute lg:left-[110px] lg:top-[-10px] lg:scale-15 scale-[60%] lg:-bottom-0 -bottom-[255px] left-[100px]"
        src={advs2}
        alt="Additional advantage image"
      />
    </div>
  );
};

export default SecondLeftAdv;
