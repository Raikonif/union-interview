import {useQuery} from "@tanstack/react-query";
import {getAllAccounts} from "../services/account.service.ts";

const getAccounts = async () => {
  return await getAllAccounts();
}

function useGetAccounts(){
  return useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5
  })
}

export default useGetAccounts;
