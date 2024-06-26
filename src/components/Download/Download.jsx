import React from "react";
import AppleIcon from "../../assets/apple.png";
import DownloadIphones from "../../assets/download.png";
import ELeft from "../../assets/downloadLeftEllpise.png";
import ERight from "../../assets/downloadRightEllpise.png";
import Star48 from "../../assets/star48.png";
import Star48white from "../../assets/star48white.png";
import Star64 from "../../assets/star64.png";
import Star64white from "../../assets/star64white.png";
import ColorLeft from "../../assets/colordownloadleft.png";
import ColorRight from "../../assets/colordownloadright.png";

const Download = () => {
  return (
    <div className="relative lg:mx-0 mx-0 flex lg:block justify-center items-center">
      <img
        className="absolute -left-[200px] top-0 lg:top-auto lg:scale-100 scale-75 animate-fadeIn"
        src={ColorLeft}
        alt="Color Left"
      />

      <div className="relative mt-48 rounded-xl bg-primary-black lg:w-full w-[425px] min-h-[508px] text-primary-white flex lg:flex-row flex-col">
        {/* Stars */}
        <img
          className="absolute bottom-[100px] left-[450px] animate-spinSlow"
          src={Star48white}
          alt="Star 48 White"
        />
        <img
          className="absolute -left-[150px] top-[120px] animate-spinSlow"
          src={Star48}
          alt="Star 48"
        />
        <img
          className="absolute lg:-right-[130px] -top-[120px] right-20 lg:scale-100 scale-75 animate-spinSlow"
          src={Star64}
          alt="Star 64"
        />
        <img
          className="absolute right-[320px] top-4 lg:scale-100 scale-75 animate-spinSlow"
          src={Star64white}
          alt="Star 64 White"
        />

        {/* Left */}
        <div className="w-[62%] relative h-[508px] justify-center gap-5 pl-20 flex flex-col">
          <img
            className="absolute lg:-bottom-0 lg:left-[0] -bottom-[466px] -left-[30px] lg:scale-100 scale-75 animate-fadeIn"
            src={ELeft}
            alt="Ellipse Left"
          />
          <h1 className="font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] capitalize leading-none animate-fadeInDown">
            ready to get started?
          </h1>
          <p className="capitalize [word-spacing:5px] leading-relaxed lg:text-[18px] animate-fadeIn">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="bg-primary-white flex text-primary-black w-[208px] h-[60px] rounded-md items-center justify-center gap-2 relative hover:bg-primary-red ease-linear transition-all hover:text-white lg:scale-100 scale-90 lg:ml-0 -ml-3 animate-fadeInUp">
            <span className="mt-[2px] font-[ClashDisplay-Medium] lg:text-[18px]">
              Download App
            </span>
            <img className="scale-90" src={AppleIcon} alt="Apple Icon" />
          </button>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            className="absolute left-[20px] lg:scale-100 scale-75 top-4 animate-fadeIn"
            src={ColorRight}
            alt="Color Right"
          />
          <img
            className="absolute lg:left-[60px] lg:-top-0 -top-[567px] left-[78px] lg:scale-100 scale-75 animate-fadeIn"
            src={ERight}
            alt="Ellipse Right"
          />
          <img
            className="lg:mt-8 pb-20 lg:pb-0 relative w-[425px] animate-fadeInUp"
            src={DownloadIphones}
            alt="Download iPhones"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
