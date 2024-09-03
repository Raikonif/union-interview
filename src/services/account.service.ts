import {VITE_BACKEND_URL} from "../constants/project.constants.ts";
import axios from "axios";
import {OpAccount} from "../interfaces/Account.ts";

const getAllAccounts = async () => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/accounts");
}

const getAccountById = async (id: string) => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/accounts/" + id);
}

const createAccount = async (account: OpAccount) => {
  return await axios.post(VITE_BACKEND_URL + "/api/v1" + "/accounts", account);
}

const updateAccount = async (account: OpAccount) => {
  return await axios.put(VITE_BACKEND_URL + "/api/v1" + "/accounts/" + account.id, account);
}

const deleteAccount = async (id: number) => {
  return await axios.delete(VITE_BACKEND_URL + "/api/v1" + "/accounts/" + id);
}

export {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount
}
