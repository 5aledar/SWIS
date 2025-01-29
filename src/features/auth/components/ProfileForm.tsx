import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import useCompleteProfile from "../hooks/useCompleteProfile";
const ProfileForm = () => {
  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");
  const [phone, setPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate: completProfile} = useCompleteProfile();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData();
    formData.append("name_en", name_en);
    formData.append("name_ar", name_ar);
    formData.append("phone", phone);
    formData.append("contact_email", contactEmail);
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);
    e.preventDefault();
    completProfile(formData, {
      onSuccess: (response: any) => {
        console.log("Profile updated successfully:", response.data);
      },
      onError: (error: any) => {
        console.error("Error completing profile:", error);
      },
    });
  };
  return (
    <form
      className="w-[50%] bg-white p-5 flex flex-col gap-3 rounded-xl shadow-md items-center "
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="mb-8">Complet Profile</h1>
      <div className="w-full flex gap-3">
        <Input
          type="text"
          value={name_en}
          placeholder="English Name"
          onChange={(e) => setName_en(e.target.value)}
          className="w-[50%] rounded-md"
          required
        />

        <Input
          type="text"
          value={name_ar}
          placeholder="Arabic Name"
          onChange={(e) => setName_ar(e.target.value)}
          className="w-[50%] rounded-md"
          required
        />
      </div>
      <Input
        type="text"
        value={phone}
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Input
        type="email"
        value={contactEmail}
        placeholder="Contact Email"
        onChange={(e) => setContactEmail(e.target.value)}
        required
      />
      <div className="flex gap-3">
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="p-2 mt-6 bg-blue-500 rounded-lg w-32 text-white"
      >
        submit
      </button>
    </form>
  );
};

export default ProfileForm;
