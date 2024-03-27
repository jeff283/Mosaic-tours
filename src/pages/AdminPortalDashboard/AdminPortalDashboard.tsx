import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";

const AdminPortalDashboard = () => {
  return (
    <div>
      <AdminPortalSidebar />

      <PortalTopBar pageTitle="Dashboard" />
    </div>
  );
};

export default AdminPortalDashboard;
