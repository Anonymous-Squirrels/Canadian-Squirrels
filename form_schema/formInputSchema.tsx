import * as z from "zod";

export const formInputSchema = z.object({
  name: z.string()
  .min(1, {message: "Field is required"}),
  email: z.string().email({message: "Provide a valid email address"}),
  phone: z.string().min(10, {message: "Provide a valid phone number"}).optional().or(z.literal('')),
  website: z.string().optional(),
  social: z.string(),
  messageToTeam: z.string(),
})