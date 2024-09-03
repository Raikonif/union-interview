import {createContext} from "react";
import {OpAccount} from "../../interfaces/Account.ts";
import {OpClient} from "../../interfaces/Client.ts";

interface AdminContextData {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  clientID: number;
  setClientID: (id: number) => void;
  owner: OpClient;
  setOwner: (client: OpClient) => void;
  clientData: OpClient;
  setClientData: (client: OpClient) => void;
  accountData: OpAccount;
  setAccountData: (account: OpAccount) => void;
  clientOwnerAccounts: OpAccount[];
  setClientOwnerAccounts: (accounts: OpAccount[]) => void
  clientsAccountsList: any[];
  setClientsAccountsList: (clientsAccounts: any[]) => void;
  clientsList: OpClient[];
  setClientsList: (clients: OpClient[]) => void;
  accountsList: OpAccount[];
  setAccountsList: (accounts: OpAccount[]) => void;
  isOpenClient: boolean;
  onOpenClient: () => void;
  onCloseClient: () => void;
  isOpenAccount: boolean;
  onOpenAccount: () => void;
  onCloseAccount: () => void;
  isOpenDelete: boolean;
  onOpenDelete: () => void;
  onCloseDelete: () => void;
  isOpenClientAccounts: boolean;
  onOpenClientAccounts: () => void;
  onCloseClientAccounts: () => void;
  rowTypeOP: { idRow: number; type?: string; createEdit?: string };
  setRowTypeOP: (data: { idRow: number; type?: string, createEdit?: string }) => void;
  getAccountsData: () => Promise<void>;
  getClientsData: () => Promise<void>;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
