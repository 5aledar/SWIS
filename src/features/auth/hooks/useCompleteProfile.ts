import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";


const completProfile = async (formDate: FormData) => {
  const token = localStorage.getItem("token");
  console.log(token);
  
  const { data } = await axiosInstance.post("/complete-profile", formDate, {
    headers: {
      Authorization: `Bearer 15|Lc4KQkQbxsS13sx1lXCwpaL4zFfJjRdjf5BhJDJJ06c158fa`,
    },
  });
  return data;
};

const useCompleteProfile = () => {
  return useMutation({
    mutationFn: completProfile,
    mutationKey: ["compelt-profile"],
  });
};

export default useCompleteProfile;
