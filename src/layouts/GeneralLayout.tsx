import { Outlet } from "react-router-dom";

function GeneralLayout(){
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GeneralLayout;