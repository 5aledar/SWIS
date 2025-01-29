import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { User } from "../lib/types";
interface UserResponse {
    data: User[];
    meta: {
      total: number;
      per_page: number;
      count: number;
      current_page: number;
      last_page: number;
      from:number
    };
    message: string;
    status_code: number;
  }
const fetchUsers = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance.get<UserResponse>("/users", {
    'headers': {
      'Authorization': `Bearer ${token}`,
    },
  });
  console.log(data);
  return data.data;
};

export const useFetchUsers = () => {
  const { data, error, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return {
    data,
    error,
    isLoading,
  };
};
