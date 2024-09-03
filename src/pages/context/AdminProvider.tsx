import {ReactNode, useCallback, useEffect, useState} from "react";
import AdminContext from "./AdminContext.tsx";
import {useDisclosure} from "@nextui-org/react";
import {getAllClients} from "../../services/client.service.ts";
import {OpClient} from "../../interfaces/Client.ts";
import {getAllAccounts} from "../../services/account.service.ts";
import {OpAccount} from "../../interfaces/Account.ts";
import {CI, MALE} from "../../constants/project.constants.ts";

interface Props {
  children: ReactNode;
}

function AdminProvider({children}: Props) {

  const [clientID, setClientID] = useState<number>(0);
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
  const [clientsList, setClientsList] = useState<OpClient[]>([] as OpClient[]);

  const [accountsList, setAccountsList] = useState<OpAccount[]>([] as OpAccount[]);


  // authentification
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [rowTypeOP, setRowTypeOP] = useState<{idRow: number, type?: string, createEdit?: string}>({idRow: 0, type: "", createEdit: ""});

  //modal client
  const {isOpen: isOpenClient, onOpen: onOpenClient, onClose: onCloseClient} = useDisclosure();
  const {isOpen: isOpenClientAccounts, onOpen: onOpenClientAccounts, onClose: onCloseClientAccounts} = useDisclosure();
  // modal account
  const {isOpen: isOpenAccount, onOpen: onOpenAccount, onClose: onCloseAccount} = useDisclosure();

  // modal delete register
  const {isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete} = useDisclosure();

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
        setClientsList([] as OpClient[]);
      }
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      setClientsList([] as OpClient[]);
    } finally {
      setLoading(false);
    }
  }, []);

  const getAccountsData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllAccounts();
      console.log("response", response);

      if (response.status !== 200) {
        console.log("Error al obtener clientes", response);
      }

      const accounts = response.data;
      if (accounts) {
        setAccountsList(accounts);
      } else {
        console.log("No se encontraron clientes en la respuesta", response);
        setAccountsList([] as OpAccount[]);
      }
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      setAccountsList([] as OpAccount[]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAccountsData();
  }, [getAccountsData]);

  useEffect(() => {
    getClientsData();
  }, [getClientsData]);

  return (
      <AdminContext.Provider
          value={{
            loading,
            setLoading,
            isAuthenticated,
            setIsAuthenticated,
            clientID,
            setClientID,
            clientData,
            setClientData,
            clientsList,
            setClientsList,
            accountsList,
            setAccountsList,
            isOpenClient,
            onOpenClient,
            onCloseClient,
            isOpenAccount,
            onOpenAccount,
            onCloseAccount,
            isOpenDelete,
            onOpenDelete,
            onCloseDelete,
            isOpenClientAccounts,
            onCloseClientAccounts,
            onOpenClientAccounts,
            rowTypeOP,
            setRowTypeOP,
            getClientsData,
            getAccountsData,
          }}
      >
        {children}
      </AdminContext.Provider>)
}

export default AdminProvider;
