import MosaicDarkLogo from "../assets/SVGs/Mosaic Logo Dark.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Footer = () => {
  const handleLogout = () => {
    signOut(auth);
  };
  const switchPages = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Container */}
      <div className="px-5 py-6 text-white md:px-20 md:py-12 bg-darkGreen ">
        <div className="flex justify-between ">
          {/*Site Links */}
          <div className="">
            {/* Title */}
            <h2 className="pb-4 text-2xl font-semibold md:text-3xl">Links</h2>
            {/*  Links */}
            <div className="flex flex-col space-y-2 text-xl font-light md:text-2xl navbar-links">
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
          <div className="flex-col items-center hidden space-y-4 md:flex">
            <img src={MosaicDarkLogo} alt="Mosaic's Logo" />
            <p className="text-2xl font-medium">Follow Us</p>
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
            <h2 className="pb-4 text-2xl font-semibold md:text-3xl">Portals</h2>
            {/* Links */}
            <div className="flex flex-col space-y-2 text-xl font-light md:text-2xl navbar-links">
              <NavLink to="/admin-portal/tours">Admin Portal</NavLink>
              <NavLink to="/" onClick={handleLogout}>
                Log Out
              </NavLink>
              {/* <NavLink to="#home">Customer Portal</NavLink> */}
            </div>
          </div>
        </div>
        {/* Logos */}
        <div className="flex-col items-center pt-8 space-y-4 md:hidden smMax:flex">
          <img src={MosaicDarkLogo} alt="Mosaic's Logo" />
          <p className="text-2xl font-medium">Follow Us</p>
          {/* SM Icons */}
          <div className="flex justify-between w-1/2 space-x-10">
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
