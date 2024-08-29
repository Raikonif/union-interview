import { useRoutes } from "react-router-dom";
import ManagementRoutes from "./ManagementRoutes";
function RoutesApp() {
  return useRoutes([ManagementRoutes]);
}

export default RoutesApp;
