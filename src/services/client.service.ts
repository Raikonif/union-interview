import axios from 'axios';
import {VITE_BACKEND_URL} from "../constants/project.constants.ts";

const getAllClients = async () => {
  return await axios.get(VITE_BACKEND_URL + "/clients");
}

const getClientById = async (id: string) => {
  return await axios.get(VITE_BACKEND_URL + "/clients/" + id);
}

const createClient = async (client: any) => {
  return await axios.post(VITE_BACKEND_URL + "/clients", client);
}

export {
  getAllClients,
  getClientById,
  createClient
}
