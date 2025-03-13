"use server";

import { auth } from "@/libs/auth";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
  const cookieStore = await cookies();
  const email = formData.get("email");
  const password = formData.get("password");

  const session = await auth();
  
  if (session !== null) {
    redirect("/dashboard");
  }

  if (!email || !password) {
    return {
      status: "error",
      message: "Please fill in all fields",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      status: "error",
      message: "User not found!",
    };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return {
      status: "error",
      message: "Invalid Credentials!",
    };
  }

  const newSession = await prisma.session.create({
    data: {
      userId: user.id,
    },
  });

  cookieStore.set("sessionId", newSession.id, {
    httpOnly: true,
    sameSite: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 60 * 60 * 1000), //
  });

  redirect("/dashboard");
}
