const Hero = () => {
  return (
    <div className="h-screen  flex items-center text-center flex-col justify-center gap-5">
      <h1 className="text-[50px] leading-[60.51px] font-semibold">
        It doesn't matter what <span className="text-[#FFFF00]"> JS <br />
        Framework </span>you work with
      </h1>
      <p className="text-[24px] leading-[29.05px]">
        Our boilerplate work with <span className="text-[#91D2F7]">out-of-the-box.</span> 
      </p>

      <div className="flex gap-10">
        <button
          className="text-[16px] leading-[19.36px] font-semibold p-2 bg-[#FFFF00] w-[150px] h-[
37px] text-black"
        >
          Get started
        </button>
        <button
          className="text-[16px] leading-[19.36px] p-2 border font-semibold border-[#FFFF00] w-[150px] h-[
37px] text-[#FFFF00]"
        >
          See repo
        </button>
      </div>
    </div>
  );
};

export default Hero;
