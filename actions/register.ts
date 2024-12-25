"use server"

import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'

// get data from clients
export const register = async (values: z.infer<typeof RegisterSchema>)=> {
    //* vaildate fields to check errors or success
    const validatefields = RegisterSchema.safeParse(values)

    if(!validatefields.success){
        return{
            error: "Invalid fields"
        }
    }

    const {email, password, name} = validatefields.data
    const hash = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return{
            error: "User already exists"
        }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hash
        }
    })

    // TODO: send verification email

    return{
        success: "Email sent!"
    }
}