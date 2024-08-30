import { createContext } from "react";

interface AdminContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  isOpenClient: boolean;
  onOpenClient: () => void;
  onCloseClient: () => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
