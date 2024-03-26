import MosaicDarkLogo from "../assets/SVGs/Mosaic Logo Dark.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const switchPages = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    console.log(id);
  };

  return (
    <>
      {/* Container */}
      <div className="px-5 py-6  md:px-20 md:py-12 bg-darkGreen text-white ">
        <div className=" flex  justify-between">
          {/*Site Links */}
          <div className="">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold pb-4">Links</h2>
            {/*  Links */}
            <div className="text-xl md:text-2xl font-light space-y-2 flex flex-col navbar-links">
              <NavLink
                to="#home"
                onClick={(event) => {
                  event.preventDefault();
                  switchPages("home");
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="#tours"
                onClick={(event) => {
                  event.preventDefault();
                  switchPages("tours");
                }}
              >
                Tours
              </NavLink>
              <NavLink
                to="#about"
                onClick={(event) => {
                  event.preventDefault();
                  switchPages("about");
                }}
              >
                About Us
              </NavLink>
              <NavLink
                to="#reviews"
                onClick={(event) => {
                  event.preventDefault();
                  switchPages("reviews");
                }}
              >
                Testimonials
              </NavLink>
              <NavLink
                to="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  switchPages("contact");
                }}
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Logos */}
          <div className="hidden md:flex flex-col items-center space-y-4">
            <img src={MosaicDarkLogo} alt="Mosaic's Logo" />
            <p className="font-medium text-2xl">Follow Us</p>
            {/* SM Icons */}
            <div className="flex justify-between space-x-10">
              <FaFacebook size={32} />
              <FaInstagram size={32} />
              <FaXTwitter size={32} />
            </div>
          </div>

          {/* Portals */}
          <div className="">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold pb-4">Portals</h2>
            {/* Links */}
            <div className="text-xl md:text-2xl font-light space-y-2 flex flex-col navbar-links">
              <NavLink to="#home">Admin Portal</NavLink>
              <NavLink to="#home">Customer Portal</NavLink>
            </div>
          </div>
        </div>
        {/* Logos */}
        <div className="md:hidden smMax:flex flex-col items-center space-y-4 pt-8">
          <img src={MosaicDarkLogo} alt="Mosaic's Logo" />
          <p className="font-medium text-2xl">Follow Us</p>
          {/* SM Icons */}
          <div className="flex justify-between space-x-10 w-1/2">
            <FaFacebook size={32} />
            <FaInstagram size={32} />
            <FaXTwitter size={32} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
