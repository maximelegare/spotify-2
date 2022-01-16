import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    // Token will exist if user is logged in
    const token = await getToken({req, secret:process.env.JWT_SECRET});


    // request that was catch by middleware
    const {pathname} = req.nextUrl

    // Allow the request if following is true
    if(pathname.includes('/api/auth')|| token){
        return NextResponse.next()
    }

    // Redirect them to login page if theu don<t have token AND are requesting a protexted route
    
    if(!token && pathname !== "/login"){
        return NextResponse.redirect("/login")
    }
}