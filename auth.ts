import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {PrismaAdapter} from '@auth/prisma-adapter'
import { db } from "./lib/db"

export const { handlers: {GET, POST}, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({token, session}){
      if(token.sub && session.user){
        session.user.id = token.sub
      }
      return session
    },
    async jwt({token, user, profile}){
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt'},
  ...authConfig
})