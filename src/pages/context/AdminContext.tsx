import {createContext} from "react";

interface AdminContextData {
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
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
