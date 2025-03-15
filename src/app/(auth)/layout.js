import Link from "next/link";
import { Button } from "@heroui/react";

export default function Page({ children }) {
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
            {/* <div>
              <Link href="">
                <Button
                  variant="primary"
                  size="md"
                  className="font-medium p-4 hover:bg-primary-50"
                >
                  Explore Events
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white shadow-sm rounded-lg p-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
