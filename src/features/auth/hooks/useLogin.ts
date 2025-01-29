import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const login = async (formData: FormData) => {
  const { data } = await axios.post(
    "https://swis.mouhannadabdalrhem.online/api/login",
    formData,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
  });
};
