import BaseModal from "../../../components/BaseModal.tsx";
import {useContext, useEffect} from "react";
import AdminContext from "../../context/AdminContext.tsx";
import {toast} from "react-hot-toast";
import {createAccount, updateAccount} from "../../../services/account.service.ts";
import {
  BOLIVIANOS,
  CHECKING,
  CLIENTS,
  CREATE,
  DOLLARS,
  EDIT,
  SAVINGS
} from "../../../constants/project.constants.ts";

function ModalCRUDAccount() {

  const {
    getAccountsData,
    accountData,
    setAccountData,
    rowTypeOP,
    onOpenAccount,
    isOpenAccount,
    onCloseAccount,
    clientsList,
    clientID,
    owner,
    setOwner,
  } = useContext(AdminContext);

  const getOwnerAccount = () => {
    const clientMatch = clientsList.find((client) => client.id === accountData.client_id);
    if (clientMatch) setOwner(clientMatch);
    console.log("owner", owner)
  }


  const createConfirmAccount = async () => {
    const {data, status} = await createAccount(accountData);
    if (status === 201) {
      await getAccountsData();
      console.log("Cuenta creada", data);
      toast.success("Cuenta creada con éxito");
    } else {
      console.log("Error al crear cuenta", data);
      toast.error("Error al crear cuenta");
    }

  }

  const editConfirmAccount = async () => {
    const {data, status} = await updateAccount(accountData);
    if (status === 200) {
      await getAccountsData();
      console.log("Cuenta modificada", data);
      toast.success("Cuenta modificada con éxito");
    } else {
      console.log("Error al modificar la cuenta", data);
      toast.error("Error al modificar cuenta");
    }

  }

  const handleEditCreateOption = async () => {
    if (rowTypeOP.createEdit === EDIT) {
      await editConfirmAccount();
    }
    if (rowTypeOP.createEdit === CREATE) {
      await createConfirmAccount();
    }
  }

  useEffect(() => {
    if (accountData)
      console.log("accountData", accountData)
  }, [accountData]);

  useEffect(() => {
    getOwnerAccount();
    console.log(clientID)
  }, [clientID]);

  return (
    <BaseModal
      title="Cuenta Bancaria"
      isOpen={isOpenAccount}
      onClose={onCloseAccount}
      action={async () => await handleEditCreateOption()}
      onOpenChange={onOpenAccount}>

      <form className="w-full mx-auto bg-white">
        { rowTypeOP.type === CLIENTS &&
        <div className="mb-4 flex flex-col lg:flex-row w-full justify-between gap-2">
          <div className="w-3/5">
          <label htmlFor="accountNumber" className="block mb-2 text-sm">Propietario:</label>
          <input
            type="text" id="accountNumber"
            name="accountNumber"
            className="w-full text-sm p-2 border border-cyan-500 rounded"
            value={owner.name + " " + owner.first_last_name + " " + owner.second_last_name}
            disabled/>
          </div>
          <div className="w-2/5">
          <label htmlFor="accountNumber" className="block mb-2 text-sm">C.I./Pasaporte:</label>
          <input
            type="text" id="accountNumber"
            name="accountNumber"
            className="w-full text-sm p-2 border border-cyan-500 rounded"
            value={owner.doc_number}
            disabled/>
          </div>
        </div>}
        <div className="mb-4">
          <label htmlFor="productType" className="block text-sm mb-2">Tipo Cuenta:</label>
          <select id="productType"
                  name="productType"
                  className="w-full p-2 border text-sm rounded"
                  value={accountData.account_type}
                  onChange={(e) => setAccountData({
                    ...accountData,
                    account_type: e.target.value
                  })} required>
            <option value={SAVINGS}>Caja de ahorro</option>
            <option value={CHECKING}>Cuenta corriente</option>
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
            <option value={BOLIVIANOS}>BS</option>
            <option value={DOLLARS}>US</option>
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
