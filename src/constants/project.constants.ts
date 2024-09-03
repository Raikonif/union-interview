import {FaIcons} from "react-icons/fa";
import {IconType} from "react-icons";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const CLIENTS = "clients"

export const ACCOUNTS = "accounts"

export const BOLIVIANOS = "Bs"

export const DOLLARS = "$us"

export const CI = "identity card"

export const PASSPORT = "passport"

export const CE = "foreigner's card"

export const MALE = "male"

export const FEMALE = "female"

export const OTHER = "other"

export const SAVINGS = "savings"

export const CHECKING = "checking"


export const Icons: Record<string, IconType> = {
  ...FaIcons,
  // ...FiIcons,
  // ...IoIcons,
};

export const menuItems = [
  {
    id: 1,
    title: 'Clientes',
    link: CLIENTS,
    icon: "FaAddressCard",
  },
  {
    id: 2,
    title: 'Cuentas',
    link: ACCOUNTS,
    icon: "FaCreditCard",
  },
];
