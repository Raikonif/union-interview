import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button, DropdownItem, Dropdown, DropdownTrigger, DropdownMenu,
} from "@nextui-org/react";
import {FaPlus, FaTrash, FaUserEdit} from "react-icons/fa";
import {useContext} from "react";
import AdminContext from "../context/AdminContext.tsx";
import {MdAccountBalanceWallet} from "react-icons/md";

function ClientsTable() {
  const {onOpenClient, onOpenDelete, onOpenAccount, onOpenClientAccounts} = useContext(AdminContext);
  return (
      <div className="flex w-full mt-10">
        <Table
            aria-label="Example static collection table"
            className="flex w-full h-full pt-4 mx-4"
            topContent={
              <div className="justify-end w-full flex">
                <Button color="primary" onPress={onOpenClient}>
                  Crear Cliente <FaPlus/>
                </Button>
              </div>
            }
        >
          <TableHeader>
            <TableColumn>Nombre Completo</TableColumn>
            <TableColumn>C.I./Pasaporte</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((key) => (
                <TableRow key={key}>
                  <TableCell>
                    Tony Reichert
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>
                    <div className="flex gap-5 items-center">
                      <Button
                          variant="bordered"
                          onClick={onOpenClient}
                          size={"sm"}
                          color={"warning"}
                      >
                        <FaUserEdit size={16}/>
                      </Button>
                      <Button
                          variant="bordered"
                          onClick={onOpenDelete}
                          size={"sm"}
                          color={"danger"}
                      >
                        <FaTrash size={16}/>
                      </Button>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                              variant="bordered"
                          >
                            Cuentas Bancarias <MdAccountBalanceWallet size={16}/>
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                          <DropdownItem key="new" onPress={onOpenAccount} className="text-success">Nueva Cuenta Bancaria</DropdownItem>
                          <DropdownItem key="copy" className="text-warning" onPress={onOpenClientAccounts}>Ver y Editar Cuentas Bancarias</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
}

export default ClientsTable;
