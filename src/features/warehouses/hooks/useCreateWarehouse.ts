import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";

const createWarehouse = async (formData:FormData) =>{
    const token =  localStorage.getItem('token')
    console.log(formData.entries);
    
    const {data} = await axiosInstance.post('/warehouses',formData,{
        'headers': {
            'Accept': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const useCreateWarehouse = () =>{
    return useMutation({
        mutationFn: createWarehouse,
        mutationKey: ['new warehouse']
    })
}



