import PortalSidebar from "./PortalSidebar";
import PortalSidebarItem from "./PortalSidebarItem";
// import { MdDashboard } from "react-icons/md";
import { FaMap } from "react-icons/fa";

const AdminPortalSidebar = () => {
  return (
    <>
      <PortalSidebar>
        {/* <PortalSidebarItem
          itemName="Dashboard"
          itemLink="/admin-portal/dashboard"
          Icon=<MdDashboard size="48" />
        /> */}
        <PortalSidebarItem
          itemName="Tours"
          itemLink="/admin-portal/tours"
          Icon=<FaMap size="48" />
        />
        {/* <PortalSidebarItem
          itemName="Bookings"
          itemLink="/admin-portal/bookings"
          Icon=<FaBook size="48" />
        /> */}
      </PortalSidebar>
    </>
  );
};

export default AdminPortalSidebar;
