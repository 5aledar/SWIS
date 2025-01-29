import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { Warehouse, WarehouseData } from "../lib/types";

interface WarehousesResponse {
    data: Warehouse[];
    meta: {
      total: number;
      per_page: number;
      count: number;
      current_page: number;
      last_page: number;
    };
    message: string;
    status_code: number;
  }
  
  const fetchHouses = async (): Promise<Warehouse[]> => {
    const token = localStorage.getItem("token");
    console.log(token);
  
    const response = await axiosInstance.get<WarehousesResponse>("/warehouses?filter[main]=null");
    return response.data.data; // Extract and return the array of warehouses
  };

  export const useFetchHouses = () => {
    const { data, error, isLoading } = useQuery<Warehouse[]>({
      queryKey: ["warehouses"],
      queryFn: fetchHouses,
    });
  console.log(data);
  
    const warehouses: WarehouseData[] = !isLoading && data
      ? data.map((item) => ({
          id: item?.id || "N/A",
          name: item?.name || "Unknown", // Handle missing name
          code: item?.code || "N/A",
          branchName: item?.branch?.name || "No branch", // Handle null branch name
          Free_capacity: item?.Free_capacity ?? 0, // Default to 0 if missing
          main_warehouse: item?.main_warehouse?.name || null, // Allow null values for main warehouse
          keeper: item?.keeper || "No keeper", // Handle missing keeper
          is_Distribution_point: item?.is_Distribution_point?'yes':'no', // Handle nullish boolean
        }))
      : [];
  
    return {
      data: warehouses,
      error,
      isLoading,
    };
  };
  