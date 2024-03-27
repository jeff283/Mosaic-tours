import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";

const AdminPortalBook = () => {
  return (
    <div className="flex bg-eggshell">
      <AdminPortalSidebar />

      <div className="px-2 md:pr-20 md:pl-4 w-full">
        <PortalTopBar pageTitle="Bookings" />
      </div>
    </div>
  );
};

export default AdminPortalBook;
