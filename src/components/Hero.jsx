import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen  flex items-center text-center flex-col justify-center gap-5"
    >
      <h1 className="text-[50px] leading-[60.51px] font-semibold">
        It doesn't matter what{" "}
        <span className="text-[#FFFF00]">
          {" "}
          JS <br />
          Framework{" "}
        </span>
        you work with
      </h1>
      <p className="text-[24px] leading-[29.05px]">
        Our boilerplate work with{" "}
        <span className="text-[#91D2F7]">out-of-the-box.</span>
      </p>

      <div className="flex gap-10">
        <button
          className="flex items-center justify-center gap-4 text-[16px] leading-[19.36px] font-semibold p-2 bg-[#FFFF00] w-[150px] h-[
37px] text-black"
        >
          Get started{" "}
          <span>
            <FaArrowRightLong />
          </span>
        </button>
        <button
          className=" flex items-center justify-center gap-4 text-[16px] leading-[19.36px]  border font-semibold border-[#FFFF00] w-[150px] h-[
37px] text-[#FFFF00]"
        >
          See repo{" "}
          <span>
            <FaGithub />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
