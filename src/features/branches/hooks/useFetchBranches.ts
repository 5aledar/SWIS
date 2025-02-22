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

const fetchBranches = async (page = 1) => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance.get<BranchResponse>(`/branches?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useFetchBranches = (page: number) => {
  const { data, isLoading } = useQuery<BranchResponse>({
    queryKey: ["branches", page], // Include page number in queryKey to refetch when it changes
    queryFn: () => fetchBranches(page),
  });

  return {
    data: data?.data,
    meta: data?.meta,
    isLoading,
  };
};
