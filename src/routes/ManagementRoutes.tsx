import GeneralLayout from "../layouts/GeneralLayout";
import AccountsTable from "../pages/accounts/AccountsTable";
import ClientsTable from "../pages/clients/ClientsTable";
import Login from "../pages/login/Login";
import AdminDashboard from "../pages/AdminDashboard.tsx";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminProvider from "../pages/context/AdminProvider";

const ManagementRoutes = {
  path: "/",
  element: (
    <AdminProvider>
      <GeneralLayout />
    </AdminProvider>
  ),
  children: [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "",
      element: (
        <ProtectedRoutes>
          <AdminDashboard />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "accounts",
          element: <AccountsTable />,
        },
        {
          path: "clients",
          element: <ClientsTable />,
        },
      ],
    },
  ],
};

export default ManagementRoutes;
