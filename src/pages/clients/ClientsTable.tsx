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
import {useCallback, useContext, useEffect, useState} from "react";
import AdminContext from "../context/AdminContext.tsx";
import {MdAccountBalanceWallet} from "react-icons/md";
import {OpClient} from "../../interfaces/Client.ts";
import {getAllClients} from "../../services/client.service.ts";
import {toast} from "react-toastify";
import loading = toast.loading;

function ClientsTable() {
  const [clientsList, setClientsList] = useState<OpClient>([] as OpClient);
  const {onOpenClient, onOpenDelete, onOpenAccount, onOpenClientAccounts, setLoading} = useContext(AdminContext);


  const getClientsData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllClients();
      console.log("response", response);

      if (response.status !== 200) {
        console.log("Error al obtener clientes", response);
      }

      const clients = response.data;
      if (clients) {
        setClientsList(clients);
      } else {
        console.log("No se encontraron clientes en la respuesta", response);
        setClientsList([] as OpClient);
      }
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      setClientsList([] as OpClient);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    getClientsData();
  }, [getClientsData]);

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
        <TableBody emptyContent={"No rows to display."}>
          {clientsList && clientsList.length > 0 ? clientsList.map((client: OpClient, index) => (
            <TableRow key={index}>
              <TableCell key={client.id}>
                {client.name} {client.first_last_name} {client.second_last_name}
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
                      <DropdownItem key="new" onPress={onOpenAccount} className="text-success">Nueva Cuenta
                        Bancaria</DropdownItem>
                      <DropdownItem key="copy" className="text-warning" onPress={onOpenClientAccounts}>Ver y Editar
                        Cuentas Bancarias</DropdownItem>
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
