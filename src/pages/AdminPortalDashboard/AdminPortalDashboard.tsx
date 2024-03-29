import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import DashboardTopCard from "@/components/DashboardTopCard";
import PortalTopBar from "@/components/PortalTopBar";
import RecentSalesCard from "@/components/RecentSalesCard";
import TransactionsCard from "@/components/TransactionsCard";
DashboardTopCard;

const AdminPortalDashboard = () => {
  return (
    <div className="flex bg-eggshell">
      <AdminPortalSidebar />

      <div className="w-full px-2 md:pr-20 md:pl-4">
        <PortalTopBar pageTitle="Dashboard" />
        <main className="flex flex-col flex-1 gap-4 p-4 px-1 md:gap-8 md:p-8">
          {/* <div className="mt-8 border border-red-500"> */}
          <DashboardTopCard />
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <TransactionsCard />
            <RecentSalesCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPortalDashboard;
