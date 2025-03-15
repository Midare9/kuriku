import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";
import { auth } from "@/libs/auth";
import Avatar from "boring-avatars";
import { Sidebar } from "./_components/sidebar";

export async function logoutAction() {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete("sessionId");
  redirect("/");
}

export default async function Page({ children }) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-black">
                Kuri-ku
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {session && (
                <div className="hidden sm:flex items-center gap-2 font-semibold">
                  <div>{session.user.name}</div>
                  <Avatar
                    size={40}
                    name={session.user.name}
                    colors={[
                      "#fb6900",
                      "#f63700",
                      "#004853",
                      "#007e80",
                      "#00b9bd",
                    ]}
                  />
                </div>
              )}
              <form action={logoutAction}>
                <Button
                  variant="ghost"
                  type="submit"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-current"
                  >
                    <g>
                      <g
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M3 7a5 5 0 0 1 5-5h5a1 1 0 1 1 0 2H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5a1 1 0 1 1 0 2H8a5 5 0 0 1-5-5z" />
                        <path d="M14.47 7.316a1 1 0 0 1 1.414-.046l4.8 4.5a1 1 0 0 1 0 1.46l-4.8 4.5a1 1 0 1 1-1.368-1.46l2.955-2.77H8a1 1 0 1 1 0-2h9.471l-2.955-2.77a1 1 0 0 1-.046-1.414" />
                      </g>
                    </g>
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        <aside className="w-64 flex-shrink-0">
          <Sidebar />
        </aside>

        <main className="flex-1 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
