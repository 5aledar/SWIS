import { branchSchema } from "../lib/formValidator";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import z from "zod";
import toast from "react-hot-toast";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useCreateBranch } from "../hooks/useCreateBranch";
import { useNavigate } from "react-router-dom";
const AddForm = () => {
  const [data, setData] = useState({
    name_en: "",
    phone: "",
    address_ar: "",
  });
  const navigate = useNavigate()
  const { mutate: createBranch } = useCreateBranch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validatedData = branchSchema.parse(data);
      const formData = new FormData();
      formData.append("name[en]", validatedData.name_en);
      formData.append("phone", String(validatedData.phone));
      formData.append("address[ar]", validatedData.name_en);

      createBranch(formData, {
        onSuccess: () => {
          toast.success("New branch created successfully");
          setData({
            name_en: "",
            phone: "",
            address_ar: "",
          })
        },
        onError: () => {
          toast.error('Something went wrong');
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <Plus />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <form
          className="p-16 flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex gap-3">
            <Input
              placeholder="name in english"
              type="text"
              name="name_en"
              value={data.name_en}
              onChange={handleOnChange}
            />
            <Input
              placeholder="phone"
              type="text"
              name="phone"
              value={data.phone}
              onChange={handleOnChange}
            />
          </div>
          <Input
            placeholder="address in arabic"
            type="text"
            name="address_ar"
            value={data.address_ar}
            onChange={handleOnChange}
          />

          <div className="w-full flex justify-center gap-4 mb-5">
            <Button type="submit">Submit</Button>
            <DrawerClose>
              <Button variant="outline" type="button">Cancel</Button>
            </DrawerClose>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default AddForm;
