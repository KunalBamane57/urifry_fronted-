import React from "react";
import adv1 from "../../../assets/adv1.png";
import advs1 from "../../../assets/advs1.png";
import Star64 from "../../../assets/star64.png";
import ColorFirst from "../../../assets/coloradvfirst.png";

const FirstRightAdv = () => {
  return (
    <div className="lg:w-[40%] w-full mt-16 lg:mt-0 relative">
      <img
        className="absolute lg:right-0 lg:-top-0 lg:scale-125 scale-75 animate-spin-slow"
        src={ColorFirst}
        alt="Background design"
      />
      <img
        className="absolute lg:-right-[180px] lg:-top-[100px] lg:scale-100 scale-75 animate-bounce"
        src={Star64}
        alt="Star decoration"
      />
      <img
        className="absolute w-full lg:w-auto lg:-bottom-[100px] animate-slideInLeft"
        src={adv1}
        alt="Advantage image 1"
      />
      <img
        className="absolute lg:top-[115px] lg:scale-90 scale-[60%] lg:-bottom-0 -bottom-[290px] lg:-left-[-180px] animate-pulse"
        src={advs1}
        alt="Additional advantage image"
      />
    </div>
  );
};

export default FirstRightAdv;
