import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ToursPage from "./pages/ToursPage/ToursPage";
import AdminPortalDashboard from "./pages/AdminPortalDashboard/AdminPortalDashboard";
import AdminPortalTours from "./pages/AdminPortalTours/AdminPortalTours";
import AdminPortalBook from "./pages/AdminPortalBook/AdminPortalBook";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/tours", element: <ToursPage />, errorElement: <ErrorPage /> },
  { path: "/payment", element: <PaymentPage /> },
  {
    path: "/admin-portal/dashboard",
    element: <AdminPortalDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-portal/tours",
    element: <AdminPortalTours />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-portal/bookings",
    element: <AdminPortalBook />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
