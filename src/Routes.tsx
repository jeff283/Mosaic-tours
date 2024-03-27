import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ToursPage from "./pages/ToursPage/ToursPage";
import AdminPortalDashboard from "./pages/AdminPortalDashboard/AdminPortalDashboard";
import AdminPortalTours from "./pages/AdminPortalTours/AdminPortalTours";
import AdminPortalBook from "./pages/AdminPortalBook/AdminPortalBook";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/tours", element: <ToursPage /> },
  { path: "/admin-portal/dashboard", element: <AdminPortalDashboard /> },
  { path: "/admin-portal/tours", element: <AdminPortalTours /> },
  { path: "/admin-portal/bookings", element: <AdminPortalBook /> },
]);

export default Router;
