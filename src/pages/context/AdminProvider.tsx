import {ReactNode, useCallback, useEffect, useState} from "react";
import AdminContext from "./AdminContext.tsx";
import {useDisclosure} from "@nextui-org/react";
import {getAllClients} from "../../services/client.service.ts";
import {OpClient} from "../../interfaces/Client.ts";
import {getAllAccounts} from "../../services/account.service.ts";
import {OpAccount} from "../../interfaces/Account.ts";
import {BOLIVIANOS, CI, MALE, SAVINGS} from "../../constants/project.constants.ts";

interface Props {
  children: ReactNode;
}

function AdminProvider({children}: Props) {

  const [clientID, setClientID] = useState<number>(0);
  const [owner, setOwner] = useState<OpClient>({
    name: "",
    first_last_name: "",
    second_last_name: "",
    doc_type: CI,
    doc_number: "",
    birth_date: "",
  } as OpClient);

  const [clientData, setClientData] = useState<OpClient>({
      name: "",
      first_last_name: "",
      second_last_name: "",
      doc_type: CI,
      doc_number: "",
      birth_date: "",
      gender: MALE,
    }
  );

  const [accountData, setAccountData] = useState<OpAccount>({
    client_id: clientID,
    account_type: SAVINGS,
    account_number: 0,
    currency: BOLIVIANOS,
    amount: "",
    branch: "",
    created_at: "",
  });

  const [clientOwnerAccounts, setClientOwnerAccounts] = useState<any[]>([] as any[]);

  const [clientsAccountsList, setClientsAccountsList] = useState<any[]>([] as any[]);

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

  const mergeClientsAccounts = () => {
    const clientsAccounts = accountsList.map((account) => {
      const client = clientsList.find((client) => client.id === account.client_id);
      return {...account, client: client};
    });
    setClientsAccountsList(clientsAccounts);
  }

  const clientOwnerAccountsList = ()=> {
    const clientAccounts = accountsList.filter((account) => account.client_id === clientID);
    setClientOwnerAccounts(clientAccounts);
  }

  useEffect(() => {
    getAccountsData();
  }, [getAccountsData]);

  useEffect(() => {
    getClientsData();
  }, [getClientsData]);

  useEffect(() => {
    mergeClientsAccounts()
  }, [accountsList, clientsList]);

  useEffect(() => {
    clientOwnerAccountsList();
  }, [clientID]);

  return (
      <AdminContext.Provider
          value={{
            loading,
            setLoading,
            isAuthenticated,
            setIsAuthenticated,
            clientID,
            setClientID,
            owner,
            setOwner,
            clientData,
            setClientData,
            accountData,
            setAccountData,
            clientOwnerAccounts,
            setClientOwnerAccounts,
            clientsAccountsList,
            setClientsAccountsList,
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
