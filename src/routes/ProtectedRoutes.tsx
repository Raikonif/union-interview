import { ReactNode, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminContext from "../pages/context/AdminContext";

interface Props {
  children: ReactNode;
}
function ProtectedRoutes({ children }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useContext(AdminContext);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", {
        state: { from: location.pathname },
      });
    } else {
      navigate(location.pathname);
    }
  }, [isAuthenticated, navigate]);
  return <>{children}</>;
}

export default ProtectedRoutes;
