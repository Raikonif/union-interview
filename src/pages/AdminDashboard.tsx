import Menu from "../components/Menu.tsx";
import {Outlet} from "react-router-dom";
import ModalCRUDAccount from "./clients/components/ModalCRUDAccount.tsx";

function AdminDashboard() {
  return (
    <div className="flex w-full lg:flex-row flex-col">
      <Menu/>
      <div className="flex w-full h-full ">
        <Outlet/>
      </div>
      <ModalCRUDAccount/>
    </div>
  );
}

export default AdminDashboard;
