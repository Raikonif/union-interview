import axios from 'axios';
import {VITE_BACKEND_URL} from "../constants/project.constants.ts";
import {OpClient} from "../interfaces/Client.ts";

const getAllClients = async () => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/clients");
}

const getClientById = async (id: string) => {
  return await axios.get(VITE_BACKEND_URL + "/api/v1" + "/clients/" + id);
}

const createClient = async (client: OpClient) => {
  return await axios.post(VITE_BACKEND_URL + "/api/v1" + "/clients", client);
}

const updateClient = async (client: OpClient) => {
  return await axios.put(VITE_BACKEND_URL + "/api/v1" + "/clients/" + client.id, client);
}

const deleteClient = async (id: number) => {
  return await axios.delete(VITE_BACKEND_URL + "/api/v1" + "/clients/" + id);
}

export {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
}
