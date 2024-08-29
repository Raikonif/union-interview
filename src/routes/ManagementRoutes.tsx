import GeneralLayout from "../layouts/GeneralLayout";
import AccountsTable from "../pages/accounts/AccountsTable";
import ClientDashboard from "../pages/clients/ClientDashboard";
import ClientRegisterForm from "../pages/clients/ClientRegisterForm";

const ManagementRoutes = {
  path: "/",
  element: <GeneralLayout />,
  children: [
    {
      path: "",
      element: <ClientRegisterForm />,
    },
    {
      path: "client-dashboard",
      element: <ClientDashboard />,
    },
    {
      path: "accounts-table",
      element: <AccountsTable />,
    },
  ],
};

export default ManagementRoutes;
