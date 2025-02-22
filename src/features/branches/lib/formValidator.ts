import { z } from "zod";

export const branchSchema = z.object({
  name_en: z.string().min(1, "English name is required"),
  phone: z.string().min(4,'Phone number is required'),
  address_ar: z.string().min(2,'Address is required')  
});

export type BranchData = z.infer<typeof branchSchema>;
