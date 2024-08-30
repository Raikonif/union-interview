import Menu from "../components/Menu.tsx";
import {Outlet} from "react-router-dom";
import ModalCRUDClient from "./clients/components/ModalCRUDClient.tsx";
import ModalCRUDAccount from "./accounts/components/ModalCRUDAccount.tsx";
import ModalDelete from "../components/ModalDelete.tsx";

function AdminDashboard() {
  return (
    <div className="flex w-full lg:flex-row flex-col">
      <Menu/>
      <div className="flex w-full h-full ">
        <Outlet/>
      </div>
      <ModalCRUDClient/>
      <ModalCRUDAccount/>
      <ModalDelete/>
    </div>
  );
}

export default AdminDashboard;
