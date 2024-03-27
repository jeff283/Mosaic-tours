import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";

const AdminPortalTours = () => {
  return (
    <div className="flex bg-eggshell">
      <AdminPortalSidebar />

      <div className="px-2 md:pr-20 md:pl-4 w-full">
        <PortalTopBar pageTitle="Tours" />
      </div>
    </div>
  );
};

export default AdminPortalTours;
