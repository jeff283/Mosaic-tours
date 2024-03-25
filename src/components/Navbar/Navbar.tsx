import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import MosaicDarkLogo from "../../assets/SVGs/Mosaic Logo Dark.svg";
import { useState } from "react";

const Navbar = () => {
  const [openHamMenu, setOpenHamMenu] = useState(false);
  return (
    <>
      <nav className="bg-darkGreen w-full px-4  md:px-16 relative text-white">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="py-1">
            <img
              className="lgMax:h-10"
              src={MosaicDarkLogo}
              alt="Mosaic's Logo"
            />
          </div>
          {/* Menu Items */}
          <div className=" hidden navbar-links  space-x-12 text-2xl md:flex lgMax:text-lg lg:space-x-24">
            <NavLink to="#home" className="font-bold ">
              Home
            </NavLink>
            <NavLink to="#tours" className="font-bold">
              Tours
            </NavLink>
            <NavLink to="#about" className="font-bold">
              About Us
            </NavLink>
            <NavLink to="#contact" className="font-bold">
              Contact
            </NavLink>
          </div>
          {/* CTA Button */}
          <a
            href="/"
            className="hidden  font-bold text-2xl bg-eggshell text-darkGreen border border-eggshell px-6 py-1.5 pb-2 rounded-full align-middle hover:text-eggshell hover:bg-darkGreen md:block lgMax:px-2 lgMax:py-1 lgMax:pb-1 lgMax:text-lg"
          >
            Book Now
          </a>
          {/* Hamburger Icon */}
          <GiHamburgerMenu
            onClick={() => setOpenHamMenu(!openHamMenu)}
            size={40}
            className="md:hidden"
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`${
              openHamMenu ? "flex" : "hidden"
            } flex-col items-center py-8 mt-2 space-y-6 text-2xl sm:w-auto sm:self-center left-6 right-6 drop-shadow-md `}
          >
            <NavLink to="#home" className="font-bold ">
              Home
            </NavLink>
            <NavLink to="#tours" className="font-bold">
              Tours
            </NavLink>
            <NavLink to="#about" className="font-bold">
              About Us
            </NavLink>
            <NavLink to="#contact" className="font-bold">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
