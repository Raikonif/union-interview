import { Outlet } from "react-router-dom";

function GeneralLayout() {
  return (
    <div className="flex min-h-screen">
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
