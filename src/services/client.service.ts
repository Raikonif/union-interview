import axios from 'axios';
import {VITE_BACKEND_URL} from "../constants/project.constants.ts";

const getAllClients = async () => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/clients");
}

const getClientById = async (id: string) => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/clients/" + id);
}

const createClient = async (client: any) => {
  return await axios.post(VITE_BACKEND_URL + "/api/v1" + "/clients", client);
}

const deleteClient = async (id: number) => {
  return await axios.delete(VITE_BACKEND_URL + "/api/v1" + "/clients/" + id);
}

export {
  getAllClients,
  getClientById,
  createClient,
  deleteClient
}
