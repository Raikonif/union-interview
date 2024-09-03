import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import {FaPlus, FaTrash, FaUserEdit} from "react-icons/fa";
import AdminContext from "../context/AdminContext.tsx";
import {useContext} from "react";
import {OpAccount} from "../../interfaces/Account.ts";
import {ACCOUNTS} from "../../constants/project.constants.ts";

function AccountsTable() {
  const {onOpenAccount, onOpenDelete, setRowTypeOP, accountsList} = useContext(AdminContext);


  return (
    <div className="flex w-full mt-10">
      <Table aria-label="Example static collection table" className="flex w-full h-full pt-4 mx-4"
             topContent={<div className="justify-end w-full flex"><Button color="primary" onPress={onOpenAccount}>Crear
               Cuenta <FaPlus/></Button>
             </div>}>
        <TableHeader>
          <TableColumn>Numero de Cuenta</TableColumn>
          <TableColumn>Nombre del Propietario</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No Rows to display"}>
          {accountsList && accountsList.length ? accountsList.map((account: OpAccount) => (
            <TableRow key={account.id}>
              <TableCell>{account.account_number}</TableCell>
              <TableCell>{account.account_type}</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <Button variant="bordered" onClick={onOpenAccount} size="sm" color="warning">
                    <FaUserEdit size={16} />
                  </Button>
                  <Button variant="bordered" onClick={()=> {
                    setRowTypeOP({idRow: account.id || 0, type: ACCOUNTS});
                    onOpenDelete();
                  }} size="sm" color="danger">
                    <FaTrash size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )) : ([])}
        </TableBody>
      </Table>
    </div>
  );
}

export default AccountsTable;
