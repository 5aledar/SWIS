import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { Branch } from "../lib/types";

interface BranchResponse {
  data: Branch[];
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

const fetchBranches = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance.get<BranchResponse>("/branches", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.data;
};

export const useFetchBranches = () => {
  const { data, isLoading } = useQuery<Branch[]>({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });


  return {
    data,
    isLoading
  }
};
