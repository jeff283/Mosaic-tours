import PortalSidebar from "./PortalSidebar";
import PortalSidebarItem from "./PortalSidebarItem";
import { MdDashboard } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const AdminPortalSidebar = () => {
  return (
    <>
      <PortalSidebar>
        <PortalSidebarItem
          itemName="Dashboard"
          itemLink="/admin-portal/dashboard"
          Icon=<MdDashboard size="48" />
        />
        <PortalSidebarItem
          itemName="Rooms"
          itemLink="/admin-portal/tours"
          Icon=<FaDoorOpen size="48" />
        />
        <PortalSidebarItem
          itemName="Students"
          itemLink="/admin-portal/bookings"
          Icon=<PiStudentFill size="48" />
        />
      </PortalSidebar>
    </>
  );
};

export default AdminPortalSidebar;
