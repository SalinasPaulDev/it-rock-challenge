import { useQuery } from "@tanstack/react-query";
import { API } from "../../../api";

export const useGetProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: API.products.get,
  });

  return query;
};
