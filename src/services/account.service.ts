import {VITE_BACKEND_URL} from "../constants/project.constants.ts";
import axios from "axios";

const getAllAccounts = async () => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/accounts");
}

const getAccountById = async (id: string) => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/accounts/" + id);
}

const createAccount = async (account: any) => {
  return await axios.post(VITE_BACKEND_URL + "/accounts", account);
}

const updateAccount = async (id: string, account: any) => {
  return await axios.put(VITE_BACKEND_URL + "/accounts/" + id, account);
}

const deleteAccount = async (id: string) => {
  return await axios.delete(VITE_BACKEND_URL + "/accounts/" + id);
}

export {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount
}
