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
            ? "grid grid-flow-col auto-cols-max gap-x-8 py-1 px-2 rounded-xl ring-2 ring-eggshell text-white font-medium text-3xl hover:text-darkGreen hover:bg-eggshell md:py-2 md:px-6 md:rounded-3xl"
            : "grid grid-flow-col auto-cols-max gap-x-8 py-1 px-2 rounded-xl  text-white font-medium text-3xl hover:text-darkGreen hover:bg-eggshell md:py-2 md:px-6 md:rounded-3xl";
        }}
        // className="grid grid-flow-col auto-cols-max gap-x-8 py-1 px-2 rounded-xl ring-2 ring-eggshell text-white hover:text-darkGreen hover:bg-eggshell md:py-2 md:px-6 md:rounded-3xl "
        to={itemLink}
      >
        {/* <div className=""> */}
        <span className=" block max-w-max ">{Icon}</span>
        <span className="hidden md:block   ">{itemName}</span>
        {/* </div> */}
      </NavLink>
    </>
  );
};

export default PortalSidebarItem;
