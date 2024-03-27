import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";
import { TableDisplay } from "@/components/TableDisplay";

const AdminPortalTours = () => {
  return (
    <div className="flex bg-eggshell">
      <AdminPortalSidebar />

      <div className="px-2 md:pr-20 md:pl-4 w-full">
        <PortalTopBar pageTitle="Dashboard" />
        <main className="flex flex-1 flex-col gap-4 p-4 px-1 md:gap-8 md:p-8 border border-red-500">
          <div className="">Button</div>
          <div className=" border border-blue-500">
            <TableDisplay />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPortalTours;
