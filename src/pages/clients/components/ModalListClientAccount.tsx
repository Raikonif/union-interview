import BaseModal from "../../../components/BaseModal.tsx";
import AdminContext from "../../context/AdminContext.tsx";
import {useContext} from "react";
import {Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {ACCOUNTS, BOLIVIANOS, CHECKING, CLIENTS, CREATE, SAVINGS} from "../../../constants/project.constants.ts";
import {FaPlus, FaTrash, FaUserEdit} from "react-icons/fa";

function ModalListClientAccount() {
  const {
    isOpenClientAccounts,
    onOpenClientAccounts,
    onCloseClientAccounts,
    onOpenDelete,
    clientOwnerAccounts,
    clientID,
    setAccountData,
    setRowTypeOP,
    onOpenAccount,
    owner,
  } = useContext(AdminContext);
  return (
    <BaseModal
      action={async () => {
      }}
      isOpen={isOpenClientAccounts}
      onOpenChange={onOpenClientAccounts}
      onClose={onCloseClientAccounts}
      title={"Cuentas Bancarias"}
      customSize={"full"}>
      <div className="flex w-full mt-10">
        <Table aria-label="Example static collection table" className="flex w-full h-full pt-4 mx-4"
               topContent={<div className="justify-end w-full flex"><Button color="primary" onPress={() => {
                 setRowTypeOP({idRow: 0, type: ACCOUNTS, createEdit: CREATE});
                 setAccountData({
                   client_id: clientID,
                   account_type: SAVINGS,
                   account_number: "",
                   currency: BOLIVIANOS,
                   amount: "",
                   branch: "",
                   created_at: "",
                 })
                 onOpenAccount();
               }}>Crear Cuenta <FaPlus/>
               </Button>
               </div>}>
          <TableHeader>
            <TableColumn>Numero de Cuenta</TableColumn>
            <TableColumn>Tipo de Cuenta</TableColumn>
            <TableColumn>Nombre del Propietario</TableColumn>
            <TableColumn>Monto en Cuenta</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No Rows to display"}>
            {clientOwnerAccounts && clientOwnerAccounts.length > 0 ? clientOwnerAccounts.map((account: any) => (
              <TableRow key={account.id}>
                <TableCell>{account.account_number}</TableCell>
                <TableCell>{account.account_type === CHECKING ? "Cuenta Corrienta" : "Caja de Ahorros"}</TableCell>
                <TableCell>{owner.name + " " + owner.first_last_name + " " + owner.second_last_name}</TableCell>
                <TableCell>{account.amount}</TableCell>
                <TableCell>
                  <div className="flex gap-5 items-center">
                    <Button variant="bordered" onPress={() => {
                      setRowTypeOP({idRow: account.id || 0, type: CLIENTS, createEdit: CREATE});
                      setAccountData(account);
                      onOpenAccount();
                    }} size="sm" color="warning">
                      <FaUserEdit size={16}/>
                    </Button>
                    <Button variant="bordered" onPress={() => {
                      setRowTypeOP({idRow: account.id || 0, type: ACCOUNTS});
                      onOpenDelete();
                    }} size="sm" color="danger">
                      <FaTrash size={16}/>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )) : ([])}
          </TableBody>
        </Table>
      </div>
    </BaseModal>
  )
}

export default ModalListClientAccount;
