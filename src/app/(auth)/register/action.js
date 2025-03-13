"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return {
      status: "error",
      message: "Please fill in all fields",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    status: "success",
    message: "Registration successful",
  };
}
