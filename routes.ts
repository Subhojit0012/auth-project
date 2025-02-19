/**
 * these are the public routes and accesssable to the user
 * 
*/
export const publicRoute = [
    '/',
]

/**
 * this routes are for authentication.
 * Unauthorized user will be redirect to /setting 
 * 
*/
export const authRoute = [
    '/auth/login',
    '/auth/register'
]

/**
 * The prefix for user authentication.
 * routes that are starts with prefix are use for API
*/
export const apiAuthPrefix = '/api/auth'
export const DEFAULT_AUTH_REDIRECT = '/settings'