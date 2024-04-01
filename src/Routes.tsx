import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ToursPage from "./pages/ToursPage/ToursPage";
import AdminPortalDashboard from "./pages/AdminPortalDashboard/AdminPortalDashboard";
import AdminPortalTours from "./pages/AdminPortalTours/AdminPortalTours";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

import Login from "./pages/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/tours", element: <ToursPage />, errorElement: <ErrorPage /> },
  { path: "/payment", element: <PaymentPage />, errorElement: <ErrorPage /> },
  {
    path: "/admin-portal/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-portal/dashboard",
    element: <ProtectedRoutes component={<AdminPortalDashboard />} />,
    // element: <AdminPortalDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-portal/tours",
    element: <ProtectedRoutes component={<AdminPortalTours />} />,
    // element: <AdminPortalTours />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
