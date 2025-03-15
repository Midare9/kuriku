import Link from "next/link";
export function Sidebar() {
  return (
    <div className="flex-1 flex">
      <aside className="w-64 border-r border-gray-200 hidden md:block">
        <div className="p-4 space-y-4">
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Generate New
            </Link>
            <Link
              href="/my-curriculum"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              My Curriculum
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}
