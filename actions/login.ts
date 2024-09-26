"use server"

import * as z from 'zod'
import { LoginSchema } from '@/schemas'

// get data from clients
export const login = async (values: z.infer<typeof LoginSchema>)=> {
    // vaildate fields to check errors or success
    const validatefields = LoginSchema.safeParse(values)

    if(!validatefields.success){
        return{
            error: "Invalid fields"
        }
    }

    return{
        success: "Email sent!"
    }
}