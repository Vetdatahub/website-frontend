import {z} from 'zod'

export const registerUserSchema = z.object({
    first_name: z.string().min(2).max(100),
    last_name: z.string().min(2).max(100),
    username: z.string().min(2).max(100),
    email: z.email(),
    affiliation: z.string().min(2).max(100),
    role: z.enum(['data_engineer','others','policy_analyst','researcher','student','practitioner']),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
    subscribeNewsletter: z.boolean().optional()
})

export const loginUserSchema = z.object({
    username: z.string().min(2).max(100),
    password: z.string().min(8).max(100)
})