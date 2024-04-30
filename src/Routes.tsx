import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";

import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoutes from "./components/ProtectedRoutes";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ToursPage from "./pages/ToursPage/ToursPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

import Login from "./pages/Login/Login";
import AdminPortalDashboard from "./pages/AdminPortalDashboard/AdminPortalDashboard";
import AdminPortalTours from "./pages/AdminPortalTours/AdminPortalTours";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tours",
    element: <ToursPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/admin-portal/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-portal/dashboard",
    element: <ProtectedRoutes component={<AdminPortalDashboard />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-portal/tours",
    element: <ProtectedRoutes component={<AdminPortalTours />} />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
