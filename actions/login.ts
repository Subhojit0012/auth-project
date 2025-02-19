"use server"

import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_AUTH_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'


export const login = async (values: z.infer<typeof LoginSchema>)=> {
    
    const validatefields = LoginSchema.safeParse(values)

    if(!validatefields.success){
        return{
            error: "Invalid fields"
        }
    }

    const {email, password} = validatefields.data;

    try {
        await signIn("credentials", {
            email, password, redirectTo:DEFAULT_AUTH_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials"}
                default:
                    return{ error: "Something went wrong!"}
            }
        }
        throw error
    }
}

