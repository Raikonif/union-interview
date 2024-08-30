import BaseModal from "../../../components/BaseModal.tsx";
import AccountsTable from "../../accounts/AccountsTable.tsx";
import AdminContext from "../../context/AdminContext.tsx";
import {useContext} from "react";

function ModalListClientAccount(){
  const {isOpenClientAccounts, onOpenClientAccounts, onCloseClientAccounts} = useContext(AdminContext);
  return(
      <BaseModal action={async ()=> {}} isOpen={isOpenClientAccounts} onOpenChange={onOpenClientAccounts} onClose={onCloseClientAccounts} title={"Cuentas Bancarias"} customSize={"full"}>
        <AccountsTable/>
      </BaseModal>
  )
}

export default ModalListClientAccount;
