import { Button } from "@heroui/react";
import Link from "next/link";

export const Navbar = () => {
	return (
    <header className="bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-black">
              Kuri-ku
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
