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
import {useContext, useEffect} from "react";
import AdminContext from "../context/AdminContext.tsx";
import {MdAccountBalanceWallet} from "react-icons/md";
import {OpClient} from "../../interfaces/Client.ts";
import {BOLIVIANOS, CLIENTS, CREATE, EDIT, SAVINGS} from "../../constants/project.constants.ts";

function ClientsTable() {
  const {
    onOpenClient,
    onOpenDelete,
    onOpenAccount,
    onOpenClientAccounts,
    clientsList,
    setRowTypeOP,
    setClientID,
    setAccountData,
    clientData,
    setClientData,
    setOwner,
    owner,
  } = useContext(AdminContext);

  useEffect(() => {
    console.log("clientData", clientData)
  }, [clientData]);

  useEffect(() => {
    console.log("owner", owner)
  }, [owner]);

  return (
    <div className="flex w-full mt-10">
      <Table
        aria-label="Example static collection table"
        className="flex w-full h-full pt-4 mx-4"
        topContent={
          <div className="justify-end w-full flex">
            <Button color="primary" onPress={() => {
              setRowTypeOP({idRow: 0, createEdit: CREATE});
              setClientData({
                name: "",
                first_last_name: "",
                second_last_name: "",
                doc_type: "",
                doc_number: "",
                birth_date: "",
              })
              onOpenClient();
            }}>
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
        <TableBody emptyContent={"No rows to display."}>
          {clientsList && clientsList.length > 0 ? clientsList.map((client: OpClient, index) => (
            <TableRow key={index}>
              <TableCell key={client.id}>
                {client.name} {client.first_last_name} {client.second_last_name}
              </TableCell>
              <TableCell>{client.doc_number}</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <Button
                    variant="bordered"
                    onPress={() => {
                      setRowTypeOP({idRow: client.id || 0, createEdit: EDIT});
                      setClientData(client);
                      onOpenClient();
                    }}
                    size={"sm"}
                    color={"warning"}
                  >
                    <FaUserEdit size={16}/>
                  </Button>
                  <Button
                    variant="bordered"
                    onClick={() => {
                      setRowTypeOP({idRow: client!.id || 0, type: CLIENTS});
                      onOpenDelete();
                    }}
                    size={"sm"}
                    color={"danger"}
                  >
                    <FaTrash size={16}/>
                  </Button>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="bordered"
                        onClick={() =>
                          setOwner(client)
                        }
                      >
                        Cuentas Bancarias <MdAccountBalanceWallet size={16}/>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        key="new"
                        onPress={() => {
                          setRowTypeOP({idRow: client!.id || 0, type: CLIENTS, createEdit: CREATE});
                          setOwner(client)
                          setClientID(client.id || 0);
                          setAccountData({
                            client_id: client!.id,
                            account_type: SAVINGS,
                            account_number: 0,
                            currency: BOLIVIANOS,
                            amount: "",
                            branch: "",
                            created_at: "",
                          });
                          onOpenAccount();
                        }}
                        className="text-success">
                        Nueva Cuenta Bancaria
                      </DropdownItem>
                      <DropdownItem key="copy" className="text-warning" onPress={() => {
                        setClientID(client.id || 0);
                        setOwner(client)
                        onOpenClientAccounts();
                      }}>
                        Ver y Editar Cuentas Bancarias
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          )) : ([])}
        </TableBody>
      </Table>
    </div>
  );
}

export default ClientsTable;
