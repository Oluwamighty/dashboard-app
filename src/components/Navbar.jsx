'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/analytics", label: "Analytics" },
  { href: "/transactions", label: "Transactions" },
  { href: "/settings", label: "Settings" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="w-full min-h-3 bg-white  flex flex-col p-6 lg:w-64 lg:min-h-screen">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-bold text-green-800">
          📊 <span className="text-green-800">Dash</span>Board
        </h1>
        <p className="text-gray-500 text-xs mt-1">Analytics Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              pathname === link.href
                ? "bg-green-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div>
            <p className="text-green-900 text-sm font-medium">Azeez Olawale</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}