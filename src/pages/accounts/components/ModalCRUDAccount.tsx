import BaseModal from "../../../components/BaseModal.tsx";
import {useContext} from "react";
import AdminContext from "../../context/AdminContext.tsx";

function ModalCRUDAccount() {
  const {onOpenAccount, isOpenAccount, onCloseAccount} = useContext(AdminContext);
  return (
      <BaseModal
          title="Crear Cuenta Bancaria"
          isOpen={isOpenAccount}
          onClose={onCloseAccount}
          action={async () => {
          }} onOpenChange={onOpenAccount}>

        <form className="w-full mx-auto bg-white">
          <div className="mb-4">
            <label htmlFor="productType" className="block text-sm mb-2">Tipo Producto:</label>
            <select id="productType" name="productType" className="w-full p-2 border text-sm rounded" required>
              <option value="">Seleccione un tipo</option>
              <option value="savings">Caja de ahorro</option>
              <option value="checking">Cuenta corriente</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="accountNumber" className="block mb-2 text-sm">Número de cuenta:</label>
            <input type="text" id="accountNumber" name="accountNumber" className="w-full text-sm p-2 border rounded"
                   required/>
          </div>

          <div className="mb-4">
            <label htmlFor="currency" className="text-sm block mb-2">Moneda:</label>
            <select id="currency" name="currency" className="w-full text-sm p-2 border rounded" required>
              <option value="">Seleccione una moneda</option>
              <option value="BS">BS</option>
              <option value="US">US</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="text-sm block mb-2">Monto:</label>
            <input type="number" id="amount" name="amount" step="0.01" className="w-full text-sm p-2 border rounded"
                   required/>
          </div>

          {/*<div className="mb-4">*/}
          {/*  <label htmlFor="creationDate" className="block text-sm mb-2">Fecha de creación:</label>*/}
          {/*  <input type="date" id="creationDate" name="creationDate" className="w-full p-2 text-sm border rounded" required/>*/}
          {/*</div>*/}

          <div className="mb-4">
            <label htmlFor="branch" className="block text-sm mb-2">Sucursal:</label>
            <select id="branch" name="branch" className="w-full text-sm p-2 border rounded" required>
              <option value="">Seleccione una sucursal</option>
              <option value="La Paz">La Paz</option>
              <option value="Cochabamba">Cochabamba</option>
              <option value="Santa Cruz">Santa Cruz</option>
            </select>
          </div>
        </form>
      </BaseModal>
  );
}

export default ModalCRUDAccount;
