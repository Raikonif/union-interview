import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa";
import * as Icons from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import {menuItems} from "../constants/project.constants.ts";
import {IoClose} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";

function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [active, setActive] = useState("Clients");
  const navigate = useNavigate();
  const handleOption = (link: string) => {
    navigate(link);
  };

  return (
      <div className="flex min-h-screen bg-sky-400 flex-col">
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="flex w-full items-center justify-center">
                <FaPiggyBank size={40} className="m-5" color="white"/>
              </div>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = Icons[item.icon];
              return(
                <li key={item.title}>
                  <button
                      onClick={() => {
                        setActive(item.title)
                        handleOption(item.link)
                      }}
                      className={`flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                          active === item.title
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    {IconComponent && <IconComponent className="mr-3 h-5 w-5" />}
                    {item.title}
                  </button>
                </li>
            )})}
          </ul>
          {/* Mobile sidebar */}
          {/*<div className="md:hidden">*/}
          {/*  <button*/}
          {/*      onClick={()=> isOpenMenu ? () => setIsOpenMenu(false) : () => setIsOpenMenu(true)}*/}
          {/*      className="fixed left-4 top-4 z-40 rounded-md bg-white p-2 text-gray-600 shadow-md"*/}
          {/*      aria-label="Toggle sidebar"*/}
          {/*  >*/}
          {/*    {isOpenMenu ? <IoClose className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}*/}
          {/*  </button>*/}
          {/*  {isOpenMenu && (*/}
          {/*      <div className="fixed inset-0 z-30 bg-black bg-opacity-50" onClick={()=> isOpenMenu ? () => setIsOpenMenu(false) : () => setIsOpenMenu(true)}>*/}
          {/*        <div*/}
          {/*            className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg"*/}
          {/*            onClick={(e) => e.stopPropagation()}*/}
          {/*        >*/}
          {/*          <SidebarContent />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*  )}*/}
          {/*</div>*/}
        </nav>
        {/*<nav className={`flex-col items-start w-full ${isOpenMenu ? "hidden" : "flex"}`}>*/}
        {/*  <div className="flex w-full items-center justify-center">*/}
        {/*    <FaPiggyBank size={40} className="m-5" color="white"/>*/}
        {/*  </div>*/}
        {/*  <button*/}
        {/*      className="rounded-md p-2 focus:outline-none focus:ring-2 md:hidden"*/}
        {/*      onClick={() => setIsOpenMenu(!isOpenMenu)}*/}
        {/*  >*/}
        {/*    {isOpenMenu ? (*/}
        {/*        <IoClose className="h-6 w-6"/>*/}
        {/*    ) : (*/}
        {/*        <FiMenu className="h-6 w-6"/>*/}
        {/*    )}*/}
        {/*  </button>*/}
        {/*  <span*/}
        {/*      className="p-5 cursor-pointer text-white w-full tracking-tight text-2xl border-y font-bold hover:bg-amber-600"*/}
        {/*      onClick={() => handleOption("clients-table")}*/}
        {/*  >*/}
        {/*  {"Clients"}*/}
        {/*</span>*/}
        {/*  <span*/}
        {/*      className="p-5 cursor-pointer text-white w-full tracking-tight text-2xl border-y font-bold hover:bg-amber-600"*/}
        {/*      onClick={() => handleOption("accounts-table")}*/}
        {/*  >*/}
        {/*  {"Accounts"}*/}
        {/*</span>*/}
        {/*</nav>*/}
      </div>
  );
}

export default Menu;
