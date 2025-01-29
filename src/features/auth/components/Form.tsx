import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate: login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    login(formData, {
      onSuccess: ({ data }) => {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.access_token);
        navigate("/");
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center justify-between bg-white rounded-lg gap-10 w-[18rem] shadow-lg p-5 h-[20rem]"
    >
      <h1>SWIS</h1>
      <div className="w-full flex flex-col gap-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-slate-100 text-sm  h-8 w-full rounded-md px-3"
          type={"email"}
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-slate-100 text-sm  h-8 w-full rounded-md px-3"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <Button>login</Button>
      </div>
    </form>
  );
};

export default Form;
