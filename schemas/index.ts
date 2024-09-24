import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email required"
    }),
    password: z.string().max(10, {message: "Password is required"}).min(6, {message: "minimum six characters are required"})
})