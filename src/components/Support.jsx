import React from "react";

const Support = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <p className="text-[16px] leading-[19.36px] font-bold">
        Supported and backed by:
      </p>
      <div className="grid grid-cols-4 gap-6 text-[32px] text-center leading-[38.73px] text-black font-semibold">
        <div className="text-[32px] leading-[38.73px] px-5 py-2 border bg-[#D9D9D9]">
          Lorem
        </div>
        <div className="text-[32px] leading-[38.73px] px-5 py-2 border bg-[#D9D9D9]">
          Ipsum
        </div>
        <div className="text-[32px] leading-[38.73px] px-5 py-2 border bg-[#D9D9D9]">
          Dolor
        </div>
        <div className="text-[32px] leading-[38.73px] px-5 py-2 border bg-[#D9D9D9]">
          Sit
        </div>
        <div className="text-[32px] leading-[38.73px] px-5 py-2 border bg-[#D9D9D9]">
          Dolor
        </div>
        <div className="text-[32px] leading-[38.73px] px-5 py-2 border bg-[#D9D9D9]">
          Sit
        </div>
        <div className="text-[32px] leading-[38.73px] px-4 py-2 border bg-[#D9D9D9]">
          Lorem
        </div>
        <div className="text-[32px] leading-[38.73px] px-4 py-2 border bg-[#D9D9D9]">
          Ipsum
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-[32px] leading-[38.73px] font-bold">
          Less Code. More Products.
        </h2>
        <p className="text-[16px] leading-[19.36px] font-semibold">
          By using our UI Kit, we make sure you only get to{" "}
          <span className="text-[#FFFF00] font-bold">focus more</span> on <br />{" "}
          the other things that matter.
        </p>
      </div>
    </div>
  );
};

export default Support;
