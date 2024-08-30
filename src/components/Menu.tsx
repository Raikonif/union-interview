import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleOption = (link: string) => {
    navigate(link);
  };
  return (
    <header className="fixed lg:relative bg-blue-700 h-screen z-50 w-full flex lg:w-1/4">
      <nav className={`flex-col items-start w-full ${isOpenMenu ? "hidden" : "flex"}`}>
        <div className="flex w-full items-center justify-center">
        <FaPiggyBank size={40} className="m-5" color="white"/>
        </div>
        <button
          className="rounded-md p-2 focus:outline-none focus:ring-2 md:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
        <span
          className="p-5 cursor-pointer text-white w-full tracking-tight text-2xl border-y font-bold hover:bg-amber-600"
          onClick={() => handleOption("clients-table")}
        >
          {"Clients"}
        </span>
        <span
            className="p-5 cursor-pointer text-white w-full tracking-tight text-2xl border-y font-bold hover:bg-amber-600"
          onClick={() => handleOption("accounts-table")}
        >
          {"Accounts"}
        </span>
      </nav>
    </header>
  );
}

export default Menu;
