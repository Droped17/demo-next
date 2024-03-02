import User from "@/app/models/Users";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { options } from "../[...nextauth]/options";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userData = body.formData;

    // console.log(`BODY ====> `,body);

    if (!userData.username || !userData.password) {
      return NextResponse.json({ message: "fields are required" });
    }

    const duplicate = await User.findOne({ username: userData.username })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await User.create(userData);
    return NextResponse.json({ message: "Create User Success" });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}

