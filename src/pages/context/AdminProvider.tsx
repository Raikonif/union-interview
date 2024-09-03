import {ReactNode, useState} from "react";
import AdminContext from "./AdminContext.tsx";
import {useDisclosure} from "@nextui-org/react";

interface Props {
  children: ReactNode;
}

function AdminProvider({children}: Props) {
  // authentification
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  //modal client
  const {isOpen: isOpenClient, onOpen: onOpenClient, onClose: onCloseClient} = useDisclosure();
  const {isOpen: isOpenClientAccounts, onOpen: onOpenClientAccounts, onClose: onCloseClientAccounts} = useDisclosure();
  // modal account
  const {isOpen: isOpenAccount, onOpen: onOpenAccount, onClose: onCloseAccount} = useDisclosure();

  // modal delete register
  const {isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete} = useDisclosure();

  return (
      <AdminContext.Provider
          value={{
            loading,
            setLoading,
            isAuthenticated,
            setIsAuthenticated,
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
          }}
      >
        {children}
      </AdminContext.Provider>)
}

export default AdminProvider;
