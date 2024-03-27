import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

// import RoomioDarkLogo from "../../assets/SVGs/RoomioDarkLogo.svg";
import RoomioDarkLogo from "../assets/SVGs/Mosaic Logo Dark.svg";
import MosaicLogomarkDark from "../assets/SVGs/MosaicLogomarkDark.svg";

interface Props {
  children: ReactNode;
}

const PortalSidebar = ({ children }: Props) => {
  return (
    <>
      <div className="h-screen  bg-darkGreen px-2 space-y-16  pt-3 md:px-4 lg:px-8 xl:px-16">
        <div className="">
          <NavLink to="/admin-portal/dashboard">
            <img src={RoomioDarkLogo} alt="Logo" className="hidden md:block" />
            <img
              src={MosaicLogomarkDark}
              alt="Logo"
              className="block md:hidden"
            />
          </NavLink>
        </div>

        <div className="space-y-16">{children}</div>
      </div>
    </>
  );
};

export default PortalSidebar;
