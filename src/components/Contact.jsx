
const Contact = () => {
  return (
    <div name="contact">
      <h1 className="text-[40px] leading-[48.41px] font-bold">Contact</h1>
      <div className="flex flex-col justify-left items-center gap-5">
        <p className="text-[16px]">fill out this form to reach us</p>
        <form className="flex flex-col gap-4 text-black">
          <div className="flex  gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="First name"
              className="w-full text-[20px] leading-[24.2px] px-5 py-2 outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last name"
              className="w-full text-[20px] leading-[24.2px] px-5 py-2 outline-none"
            />
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-full text-[20px] leading-[24.2px] px-5 py-2 outline-none"
          />
          <input
            type="tel"
            name=""
            id=""
            placeholder="Phone (optional)"
            className="w-full text-[20px] leading-[24.2px] px-5 py-2 outline-none"
          />
          <textarea
            placeholder="message"
            rows="4"
            className="w-full text-[20px] leading-[24.2px] px-5 py-2 outline-none"
          ></textarea>
          <div className="text-center">
            {" "}
            <button
              type="submit"
              className="bg-[#91D2F7] text-[#0D0E30] font-bold text-[24px] px-20 py-3"
            >
              Send
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default Contact;
