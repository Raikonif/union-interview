import {createContext} from "react";

interface AdminContextData {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
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
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
