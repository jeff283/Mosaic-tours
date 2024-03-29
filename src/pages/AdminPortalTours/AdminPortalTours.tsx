import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";
import { TableDisplay } from "@/components/TableDisplay";
import { Button } from "@/components/ui/button";

const AdminPortalTours = () => {
  return (
    <div className="flex bg-eggshell">
      <AdminPortalSidebar />

      <div className="w-full px-2 md:pr-20 md:pl-4">
        <PortalTopBar pageTitle="Tours" />
        <main className="flex flex-col flex-1 gap-4 p-4 px-1 md:gap-6 md:p-6">
          <div className="">
            <Button className="px-6 text-xl border border-darkGreen bg-darkGreen md:text-2xl md:px-12 md:py-5 hover:text-darkGreen hover:bg-eggshell">
              Add Tour
            </Button>
          </div>

          <div className="">
            <TableDisplay />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPortalTours;
