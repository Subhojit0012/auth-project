
import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import {NextRequest, NextResponse} from "next/server"
import {DEFAULT_AUTH_REDIRECT, authRoute, apiAuthPrefix, publicRoute} from '@/routes'


const {auth} = NextAuth(authConfig)

export default auth((req)=> {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoute.includes(nextUrl.pathname);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);

  if (isApiAuthRoute){
    return null;
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_AUTH_REDIRECT, nextUrl))
    }
    return null;
  }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  return null;
}) 

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ],
}