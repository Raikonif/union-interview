import Menu from "../components/Menu.tsx";
import {Outlet} from "react-router-dom";
import ModalCRUDClient from "./clients/components/ModalCRUDClient.tsx";
import ModalCRUDAccount from "./accounts/components/ModalCRUDAccount.tsx";
import ModalDelete from "../components/ModalDelete.tsx";
import ModalListClientAccount from "./clients/components/ModalListClientAccount.tsx";
import ProgressCircle from "../components/ProgressCircle.tsx";
import {useContext} from "react";
import AdminContext from "./context/AdminContext.tsx";
import {Toaster} from "react-hot-toast";
import Footer from "../components/Footer.tsx";

function AdminDashboard() {

  const {loading} = useContext(AdminContext);
  return (
    <div className="flex w-full lg:flex-row h-full flex-col">
      <Menu/>
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full h-full">
        <Outlet/>
          <Footer/>
        </div>
      </div>
      <ModalCRUDClient/>
      <ModalListClientAccount/>
      <ModalCRUDAccount/>
      <ModalDelete/>
      <Toaster />
      {loading && <ProgressCircle text={"Cargando..."} color={"primary"}/>}
    </div>
  );
}

export default AdminDashboard;
