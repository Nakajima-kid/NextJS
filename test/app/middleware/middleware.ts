import { log } from "console"
import { NextResponse } from "next/server"

export const middleware = (req:Request) => {
    log('Middleware')
    return NextResponse.redirect(new URL("/", req.url))
}