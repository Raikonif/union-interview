import BaseModal from "../../../components/BaseModal.tsx";
import {useContext} from "react";
import AdminContext from "../../context/AdminContext.tsx";
import {FaChevronDown} from "react-icons/fa";

function ModalCRUDClient() {
  const {isOpenClient, onCloseClient, onOpenClient} = useContext(AdminContext);
  return (
      <BaseModal
          title="Crear Usario"
          isOpen={isOpenClient}
          onClose={onCloseClient}
          action={async () => {
          }} onOpenChange={onOpenClient}>

        <div className="mx-auto">
          <form className="bg-white mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre" type="text" placeholder="Nombre"/>
            </div>
            <div className="flex gap-2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paterno">
                  Paterno
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paterno" type="text" placeholder="Apellido Paterno"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="materno">
                  Materno
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="materno" type="text" placeholder="Apellido Materno"/>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoDocumento">
                Tipo de documento
              </label>
              <div className="relative">
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="tipoDocumento">
                  <option>Carnet de Identidad</option>
                  <option>Pasaporte</option>
                  <option>Carnet de Extranjería</option>
                </select>
                <FaChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400"/>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documento">
                Documento de identidad
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="documento" type="text" placeholder="Número de documento"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNacimiento">
                Fecha de nacimiento
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fechaNacimiento" type="date"/>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">
                Genero
              </label>
              <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="genero">
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>
          </form>
        </div>
      </BaseModal>
  );
}

export default ModalCRUDClient;
