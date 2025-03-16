import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function GET(req) {
  const query = req.nextUrl.searchParams;
  const code = query.get("code");

  // console.log({ code });

  const cookieStore = await cookies();
  const codeVerifier = cookieStore.get("codeVerifier")?.value;

  //code validation
  const tokens = await google.validateAuthorizationCode(code, codeVerifier);
  const accessToken = tokens.accessToken();

  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  console.log({ data });

  //check user
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  //logicnya adalah, apakah user sudah ada di database?
  //if available, create new session and redirect ke dashboard
  //if not available, create new user and create new session and redirect ke dashboard

  //ini kalo gaada, yaudah buat usertannpa password
  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });

    //buat baryu session
    const newSession = await prisma.session.create({
      data: {
        userId: newUser.id,
      },
    });

    //set cookie
    cookieStore.set("sessionId", newSession.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    redirect("/dashboard");
  }

  // if available, create new session and redirect ke dashboard
  const newSession = await prisma.session.create({
    data: {
      userId: user.id,
    },
  });

  //set cookie
  cookieStore.set("sessionId", newSession.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  redirect("/dashboard");
}
