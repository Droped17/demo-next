import { NextResponse } from "next/server";
import {hash} from "bcrypt";

export async function POST(req: Request){
try {
    const {username,password} = await req.json();
    console.log({username,password});

    const hashedPass = await hash(password,10);
    console.log(hashedPass);
    
} catch (e) {
    console.log({e});
}
    return NextResponse.json({message: "success"});
}