import BaseModal from "../../../components/BaseModal.tsx";
import {useContext, useEffect, useState} from "react";
import AdminContext from "../../context/AdminContext.tsx";
import {OpAccount} from "../../../interfaces/Account.ts";
import {toast} from "react-toastify";
import {createAccount} from "../../../services/account.service.ts";

function ModalCRUDAccount() {
  const [accountData, setAccountData] = useState<OpAccount>({
    account_type: "",
    account_number: 0,
    currency: "Bolivianos",
    amount: "",
    branch: "",
    created_at: "",
  });

  const createConfirmAccount = async () => {
    const {data, status} = await createAccount(accountData);
    if (status === 201) {
      console.log("Cuenta creada", data);
      toast.success("Cuenta creada con éxito");
    } else {
      console.log("Error al crear cuenta", data);
      toast.error("Error al crear cuenta");
    }
  }

  useEffect(() => {
    if (accountData)
      console.log("accountData", accountData)
  }, [accountData]);

  const {onOpenAccount, isOpenAccount, onCloseAccount} = useContext(AdminContext);
  return (
    <BaseModal
      title="Cuenta Bancaria"
      isOpen={isOpenAccount}
      onClose={onCloseAccount}
      action={async () => await createConfirmAccount()}
      onOpenChange={onOpenAccount}>

      <form className="w-full mx-auto bg-white">
        <div className="mb-4">
          <label htmlFor="productType" className="block text-sm mb-2">Tipo Cuenta:</label>
          <select id="productType" name="productType" className="w-full p-2 border text-sm rounded"
                  value={accountData.account_type} onChange={(e) => setAccountData({
            ...accountData,
            account_type: e.target.value
          })} required>
            <option value="savings">Caja de ahorro</option>
            <option value="checking">Cuenta corriente</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="accountNumber" className="block mb-2 text-sm">Número de cuenta:</label>
          <input type="text" id="accountNumber" name="accountNumber" className="w-full text-sm p-2 border rounded"
                 value={accountData.account_number}
                 onChange={(e) => setAccountData({...accountData, account_number: Number(e.target.value)})}
                 required/>
        </div>

        <div className="mb-4">
          <label htmlFor="currency" className="text-sm block mb-2">Moneda:</label>
          <select id="currency" name="currency" className="w-full text-sm p-2 border rounded"
                  value={accountData.currency}
                  onChange={(e) => setAccountData({...accountData, currency: e.target.value})} required>
            <option value="Bolivianos">BS</option>
            <option value="Dollars">US</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="text-sm block mb-2">Monto:</label>
          <input type="number" id="amount" name="amount" step="0.01" className="w-full text-sm p-2 border rounded"
                 value={accountData.amount}
                 onChange={(e) => setAccountData({...accountData, amount: e.target.value})}
                 required/>
        </div>

        {/*<div className="mb-4">*/}
        {/*  <label htmlFor="creationDate" className="block text-sm mb-2">Fecha de creación:</label>*/}
        {/*  <input type="date" id="creationDate" name="creationDate" className="w-full p-2 text-sm border rounded" required/>*/}
        {/*</div>*/}

        <div className="mb-4">
          <label htmlFor="branch" className="block text-sm mb-2">Sucursal:</label>
          <select id="branch" name="branch" className="w-full text-sm p-2 border rounded"
                  value={accountData.branch}
                  onChange={(e) => setAccountData({...accountData, branch: e.target.value})}
                  required>
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
