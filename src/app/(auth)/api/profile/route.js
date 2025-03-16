import { prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const {name, email, avatar, password} = await req.json();


    let updateData = {name, avatar, password};

    if (password && password.length >= 6) {
        const hashedPassword = await bcrypt.hash(password, 10)
        updateData.password = hashedPassword;
      
    }

    const UpdatedUser = await prisma.user.update ({
      where: { email },
      data: updateData
    });

    return NextResponse.json(UpdatedUser);
  } catch (error) {
    return NextResponse.json(
      { error:"gagal memperbarui profil" }, 
      { status: 500 })
  }
}
