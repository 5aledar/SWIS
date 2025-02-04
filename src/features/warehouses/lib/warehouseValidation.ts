import { z } from "zod";

export const warehouseSchema = z.object({
  name_en: z.string().min(1, "English name is required"),
  name_ar: z.string().min(1, "Arabic name is required"),
  branch_id: z.string().regex(/^\d+$/, "Branch ID must be a number"),
  capacity: z.string().regex(/^\d+$/, "Capacity must be a number"),
  parent_id: z.string().regex(/^\d+$/, "Parent ID must be a number"),
  user_id: z.string().regex(/^\d+$/, "User ID must be a number"),
  is_Distribution_point: z.union([z.literal(0), z.literal(1)]),
  latitude: z.number().min(-90, "Invalid latitude").max(90, "Invalid latitude"),
  longitude: z
    .number()
    .min(-180, "Invalid longitude")
    .max(180, "Invalid longitude"),
});

export type WarehouseData = z.infer<typeof warehouseSchema>;
