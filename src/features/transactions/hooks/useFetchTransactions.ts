import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { Transaction } from "../lib/types";

interface TransactionResponse{
    data: Transaction[]
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

const fetchTransactions = async () => {
    const token = localStorage.getItem('token')
    const {data} = await axiosInstance.get<TransactionResponse>('/transactions',{
        'headers':{
            'Authorization': `Bearer ${token}`
        }
    })
    return data.data
}

export const useFetchTransactions = () =>{
    const {data,isLoading}= useQuery<Transaction[]>({
        queryKey: ['transactions'],
        queryFn: fetchTransactions
    })

    return{
        data,
        isLoading   
    }
}