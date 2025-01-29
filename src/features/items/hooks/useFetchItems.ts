import { useQuery } from "@tanstack/react-query";
import { Item } from "../lib/types";
import axiosInstance from "@/lib/axiosInstance";

interface ItemResponse {
  data: Item[];
  meta: {
    total: number;
    per_page: number;
    count: number;
    current_page: number;
    last_page: number;
    from: number;
  };
  message: string;
  status_code: number;
}
const fetchItems = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance<ItemResponse>("/items", {
    'headers': {
      'Authorization': `Bearer ${token}`,
    },
  });
  return data.data;
};

export const useFetchItems = () => {
  const { data, isLoading } = useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: fetchItems,
  });

  return {
    data,
    isLoading,
  };
};
