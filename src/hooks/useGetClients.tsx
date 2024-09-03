import {getAllClients} from "../services/client.service.ts";
import {useQuery} from "@tanstack/react-query";

const getClients = async () => {
  const response = await getAllClients();
  console.log("response", response);
  return response;
}

function useGetClients(){
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5
  })
}

export default useGetClients;
