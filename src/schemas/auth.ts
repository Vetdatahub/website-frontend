import {z} from 'zod'

export const registerUserSchema = z.object({
    firstname: z.string("First Name should be text").min(2, "First Name must be at least 2 characters").max(100, "First Name must be at most 100 characters"),
    lastname: z.string("Last Name should be text").min(2, "Last Name must be at least 2 characters").max(100, "Last Name must be at most 100 characters"),
    username: z.string("Username should be text").min(2, "Username must be at least 2 characters").max(100, "Username must be at most 100 characters"),
    email: z.email("Invalid email address").min(5, "Email must be at least 5 characters").max(100, "Email must be at most 100 characters"),
    password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character")
    .trim(),
    confirmPassword: z.string("Confirm Password should be text").min(8, "Confirm Password must be at least 8 characters").max(100, "Confirm Password must be at most 100 characters"),
})

export const loginUserSchema = z.object({
    username: z.string("Username should be text").min(2, "Username must be at least 2 characters").max(100, "Username must be at most 100 characters").trim(),
    password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character")
    .trim(),
})