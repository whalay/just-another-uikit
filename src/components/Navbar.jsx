import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <p className="text-[20px] leading-[24.2px] font-bold">JustAnotherUIKit</p>
      <ul className="text-[16px] leading-[19.36px] flex gap-10">
        <li>
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="blog" smooth={true} offset={50} duration={500}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
