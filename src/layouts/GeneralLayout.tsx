import { Outlet } from "react-router-dom";

function GeneralLayout() {
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
