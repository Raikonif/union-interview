import BaseModal from "./BaseModal.tsx";
import {useContext} from "react";
import AdminContext from "../pages/context/AdminContext.tsx";

function ModalDelete(){
  const {isOpenDelete, onOpenDelete, onCloseDelete} = useContext(AdminContext);
  return(
      <BaseModal action={async () => {
      }} isOpen={isOpenDelete} onOpenChange={onOpenDelete} onClose={onCloseDelete} title={""}>
        <div className="top-20 mx-auto p-5 w-96 bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Borrar Registro</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Estas seguro de borrar este registro? Esta acción no puede deshacerse.
              </p>
            </div>
          </div>
        </div>
      </BaseModal>
  )
}

export default ModalDelete;
