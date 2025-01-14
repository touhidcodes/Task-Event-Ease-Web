import { z, ZodObject } from "zod";

export const loginValidationSchema: ZodObject<{
  identifier: z.ZodString;
  password: z.ZodString;
}> = z.object({
  identifier: z.string({
    required_error: "Please enter a valid username or email address!",
  }),
  password: z.string().min(6, "Must be at least 6 characters"),
});

export const registerValidationSchema = z.object({
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

export const eventPostValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  date: z.string().min(1, "date is required"),
  location: z.string().min(1, "Location is required"),
  maxAttendees: z.string().min(1, "Attendees must be a positive number"),
});

export const changePasswordValidationSchema = z
  .object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
