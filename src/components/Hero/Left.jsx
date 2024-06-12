import React from "react";
import Arrow from "../../assets/arrow.png";
import Play from "../../assets/play.png";
import Star48 from "../../assets/star48.png";
import HeadingSupport from "../../assets/heading-support.png";
import ColorLeft from "../../assets/colorheroleft.png";

const Left = () => {
  return (
    <div className="mt-24 w-[50%]">
      <div className="relative">
        <img
          className="absolute lg:-top-[80px] lg:-left-[150px] lg:-right-0 -top-24 -right-48 animate-bounce"
          src={Star48}
          alt=""
        />
        <img
          className="absolute lg:left-[40px] lg:-top-[175px] animate-spin-slow"
          src={ColorLeft}
          alt=""
        />
        <h1 className="lg:w-[618px] w-[425px] lg:px-0 px-4 relative text-5xl lg:text-[60px] tracking-tight leading-[1] font-[ClashDisplay-Bold] capitalize heading-shadow dark:text-primary-white">
          make the best financial decisions
        </h1>
        <p className="relative capitalize text-sm leading-relaxed text-gray-500 mt-5 font-[ClashDisplay-Medium] tracking-wider lg:w-auto w-[420px] lg:px-0 px-4">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex relative lg:px-0 px-4 mt-6 justify-between w-[374px] h-[60px] items-center">
          <button className="w-[180px] h-[60px] bg-primary-black dark:bg-primary-white dark:text-primary-black text-primary-white rounded-md flex justify-center items-center gap-2 hover:bg-primary-red dark:hover:bg-primary-red ease-linear transition-all transform hover:scale-105">
            <span className="font-[ClashDisplay-Medium]">Get Started</span>
            <img src={Arrow} alt="" />
          </button>
          <button className="flex w-[154px] items-center justify-center h-[29px] gap-3 hover:text-primary-red hover:border-b-primary-red hover:border-b-2 py-7 dark:text-white transform hover:scale-105 transition-transform ease-linear">
            <img src={Play} alt="" />
            <span className="font-[ClashDisplay-Medium]">Watch Video</span>
          </button>
        </div>
      </div>
      <div className="mt-5 relative">
        <img className="absolute lg:top-16 lg:left-28 animate-bounce" src={Star48} alt="" />
        <img
          className="lg:scale-90 scale-150 lg:top-0 top-20 lg:left-0 left-20 absolute lg:right-12 animate-pulse"
          src={HeadingSupport}
          alt=""
        />
      </div>
    </div>
  );
};

export default Left;