import BaseModal from "../../../components/BaseModal.tsx";
import {useContext, useEffect, useState} from "react";
import AdminContext from "../../context/AdminContext.tsx";
import {FaChevronDown} from "react-icons/fa";
import {OpClient} from "../../../interfaces/Client.ts";
import {CE, CI, FEMALE, MALE, OTHER, PASSPORT} from "../../../constants/project.constants.ts";
import {createClient} from "../../../services/client.service.ts";
import {toast} from "react-toastify";

function ModalCRUDClient() {
  const {isOpenClient, onCloseClient, onOpenClient} = useContext(AdminContext);
  const [clientData, setClientData] = useState<OpClient>({
      name: "",
      first_last_name: "",
      second_last_name: "",
      doc_type: CI,
      doc_number: "",
      birth_date: "",
      gender: MALE,
    }
  )

  const createConfirmClient = async () => {
    const {data, status} = await createClient(clientData);
    if (status === 201) {
      console.log("Cliente creado", data);
      toast.success("Cliente creado con éxito");
    } else {
      console.log("Error al crear cliente", data);
      toast.error("Error al crear cliente");
    }
    onCloseClient();
  }

  useEffect(() => {
    console.log("clientData", clientData)
  }, [clientData]);

  return (
    <BaseModal
      title="Cliente"
      isOpen={isOpenClient}
      onClose={onCloseClient}
      action={async () => await createConfirmClient()}
      onOpenChange={onOpenClient}>

      <div className="mx-auto">
        <form className="bg-white mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre" type="text" placeholder="Nombre" value={clientData.name}
              onChange={(e) => setClientData({...clientData, name: e.target.value})}/>
          </div>
          <div className="flex gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paterno">
                Paterno
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paterno" type="text" placeholder="Apellido Paterno" value={clientData.first_last_name}
                onChange={(e) => setClientData({...clientData, first_last_name: e.target.value})}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="materno">
                Materno
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="materno" type="text" placeholder="Apellido Materno" value={clientData.second_last_name}
                onChange={(e) => setClientData({...clientData, second_last_name: e.target.value})}/>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoDocumento">
              Tipo de documento
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tipoDocumento"
                value={clientData.doc_type} onChange={(e) => setClientData({...clientData, doc_type: e.target.value})}>
                <option value={CI}>Carnet de Identidad</option>
                <option value={PASSPORT}>Pasaporte</option>
                <option value={CE}>Carnet de Extranjería</option>
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
              id="documento" type="text" placeholder="Número de documento" value={clientData.doc_number}
              onChange={(e) => setClientData({...clientData, doc_number: e.target.value})}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNacimiento">
              Fecha de nacimiento
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaNacimiento" type="date" value={clientData.birth_date}
              onChange={(e) => setClientData({...clientData, birth_date: e.target.value})}/>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">
              Genero
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="genero" value={clientData.gender}
              onChange={(e) => setClientData({...clientData, gender: e.target.value})}>
              <option value={MALE}>Masculino</option>
              <option value={FEMALE}>Femenino</option>
              <option value={OTHER}>Otro</option>
            </select>
          </div>
        </form>
      </div>
    </BaseModal>
  );
}

export default ModalCRUDClient;
