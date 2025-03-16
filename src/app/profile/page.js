import { prisma } from "@/utils/prisma";
import EditProfile from "./EditProfile";

export default async function EditProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Anda harus login untuk mengedit profil</p>;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return <EditProfile user={user} />;
}