import { NavLink } from "react-router-dom";

import mosaicToursImg from "../../assets/imgs/mosaicToursImg.png";
import MosaicLogoLight from "../../assets/SVGs/Mosaic Logo Light.svg";

import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="h-screen md:flex md:gap-8 md:justify-between bg-eggshell">
        <div className="hidden auth-side-panel md:flex md:flex-col">
          <div className="absolute z-10 w-1/4 h-16 ml-8 text-white fz20 backdrop-blur-lg ">
            <div className="flex items-center justify-between h-full text-xl font-semibold navbar-links">
              <NavLink to="/#home">Home</NavLink>
              <NavLink to="/#tours">Room</NavLink>
              <NavLink to="/#about">About Us</NavLink>
              <NavLink to="/#contact">Contact Us</NavLink>
            </div>
          </div>

          <div className="relative h-screen auth-side-panel-content bg-darkGreen">
            <div className="absolute w-full h-16 bg-darkGreen"></div>
            <img
              className="w-auto max-h-screen"
              src={mosaicToursImg}
              alt="Team Members"
            />
            {/* <div className="auth-side-panel-logo">
              <img src={MosaicLogoLight} alt="Roomio Logo" />
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-start h-full px-5 py-6 md:justify-center md:flex-row md:px-20 md:w-1/2 lg:w-3/5 md:py-12">
          <NavLink to="/" className="md:hidden h-1/3">
            <img
              src={MosaicLogoLight}
              alt="MosaicLogoLight"
              className="py-4 "
            />
          </NavLink>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
