const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <p className="text-[20px] leading-[24.2px] font-bold">JustAnotherUIKit</p>
      <ul className="text-[16px] leading-[19.36px] flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
