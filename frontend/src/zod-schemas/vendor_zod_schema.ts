import { z } from "zod";

export const vendor_schema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name cannot be empty" }),
  status: z
    .string({ required_error: "Status is required" })
    .min(1, { message: "Status cannot be empty" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number can't be longer than 15 digits" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  company: z
    .string({ required_error: "Company name is required" })
    .min(1, { message: "Company name cannot be empty" }),
  gstin: z
    .string({ required_error: "GSTIN is required" })
    .length(15, { message: "GSTIN must be 15 characters long" }),
});