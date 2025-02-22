import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { redirect } from "react-router-dom";

const createBranch = async (formData:FormData) =>{
    const token =  localStorage.getItem('token')
    if(!token){
        redirect('/login')
    }
    const {data} = await axiosInstance.post('/branches',formData,{
        'headers': {
            'Accept': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(data);
}

export const useCreateBranch = () =>{
    return useMutation({
        mutationFn: createBranch,
        mutationKey: ['new branch']
    })
}



