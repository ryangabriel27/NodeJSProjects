import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
    const token = req.headers.get('Authorization')?.split('')[1];

    if (!token){
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
       const decoded = jwt.verify 
    } catch (error) {
        
    }
}