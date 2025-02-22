// import { warehouseSchema, WarehouseData } from "../../lib/warehouseValidation";
// import { Input } from "@/components/ui/input";
// import { Plus } from "lucide-react";
// import { useState } from "react";
// import z from "zod";
// import toast from "react-hot-toast";

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Button } from "@/components/ui/button";
// import { useCreateWarehouse } from "../hooks/useCreateWarehouse";
// import { useNavigate } from "react-router-dom";
// import { Checkbox } from "@/components/ui/checkbox";

// const AddForm = () => {
//   const [data, setData] = useState({
//     name_en: "",
//     name_ar: "",
//     branch_id: "",
//     capacity: "",
//     parent_id: "",
//     user_id: "",
//     is_Distribution_point: 0,
//     latitude: 0,
//     longitude: 0,
//   });

//   const { mutate: createWarehouse } = useCreateWarehouse();

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };
//   const navigate = useNavigate();
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     try {
//       console.log(data.is_Distribution_point);
//       const validatedData = warehouseSchema.parse(data);
//       const formData = new FormData();
//       formData.append("name[en]", validatedData.name_en);
//       formData.append("name[ar]", validatedData.name_ar);
//       formData.append("branch_id", validatedData.branch_id);
//       formData.append("capacity", validatedData.capacity);
//       formData.append("parent_id", validatedData.parent_id);
//       formData.append("user_id", validatedData.user_id);
//       formData.append(
//         "is_Distribution_point",
//         String(validatedData.is_Distribution_point)
//       );
//       formData.append("location[latitude]", String(validatedData.latitude));
//       formData.append("location[longitude]", String(validatedData.longitude));

//       createWarehouse(formData, {
//         onSuccess: ({ data }: any) => {
//           console.log(data);
//           navigate("/warehouses");
//         },
//         onError: (error: any) => {
//           toast.error(error);
//         },
//       });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         toast.error(error.errors[0].message);
//       }
//     }
//   };

//   return (
//     <Drawer>
//       <DrawerTrigger>
//         <Plus />
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader>
//           <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//           <DrawerDescription>This action cannot be undone.</DrawerDescription>
//         </DrawerHeader>
//         <form
//           className="p-16 flex flex-col gap-4"
//           onSubmit={(e) => handleSubmit(e)}
//         >
//           <div className="flex gap-3">
//             <Input
//               placeholder="name in english"
//               type="text"
//               name="name_en"
//               value={data.name_en}
//               onChange={handleOnChange}
//             />
//             <Input
//               placeholder="name in arabic"
//               type="text"
//               name="name_ar"
//               value={data.name_ar}
//               onChange={handleOnChange}
//             />
//           </div>
//           <Input
//             placeholder="branch id"
//             type="text"
//             name="branch_id"
//             value={data.branch_id}
//             onChange={handleOnChange}
//           />
//           <Input
//             placeholder="capacity"
//             type="text"
//             name="capacity"
//             value={data.capacity}
//             onChange={handleOnChange}
//           />
//           <Input
//             placeholder="parent_id"
//             type="text"
//             name="parent_id"
//             value={data.parent_id}
//             onChange={handleOnChange}
//           />
//           <Input
//             placeholder="user_id"
//             type="text"
//             name="user_id"
//             value={data.user_id}
//             onChange={handleOnChange}
//           />
//           <Input
//             placeholder="latitude"
//             type="text"
//             value={data.latitude}
//             name="latitude"
//             onChange={handleOnChange}
//           />
//           <Input
//             placeholder="longitude"
//             type="text"
//             name="longitude"
//             value={data.longitude}
//             onChange={handleOnChange}
//           />
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="Distribution"
//               name="is_Distribution_point"
//               onCheckedChange={(checked) =>
//                 setData((prevData) => ({
//                   ...prevData,
//                   is_Distribution_point: checked ? 1 : 0,
//                 }))
//               }
//             />
//             <label
//               htmlFor="Distribution"
//               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             >
//               Distribution point
//             </label>
//           </div>

//           <div className="w-full flex justify-center gap-4 mb-5">
//             <Button type="submit">Submit</Button>
//             <DrawerClose>
//               <Button variant="outline">Cancel</Button>
//             </DrawerClose>
//           </div>
//         </form>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default AddForm;
