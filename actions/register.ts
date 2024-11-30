"use server"

import * as z from 'zod'
import { RegisterSchema } from '@/schemas'

// get data from clients
export const register = async (values: z.infer<typeof RegisterSchema>)=> {
    // vaildate fields to check errors or success
    const validatefields = RegisterSchema.safeParse(values)

    if(!validatefields.success){
        return{
            error: "Invalid fields"
        }
    }

    return{
        success: "Email sent!"
    }
}