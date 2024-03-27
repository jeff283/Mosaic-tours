import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  Icon: ReactNode;
  itemLink: string;
  itemName: string;
}

const PortalSidebarItem = ({ Icon, itemLink, itemName }: Props) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? "portal-sidemenu-links portal-active-menu"
            : "portal-sidemenu-links";
        }}
        to={itemLink}
      >
        {Icon}
        <span className="fz32 portal-sidemenu-text">{itemName}</span>
      </NavLink>
    </>
  );
};

export default PortalSidebarItem;
