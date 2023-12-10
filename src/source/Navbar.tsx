import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 flex h-20 w-full items-center px-4 md:px-6">
       {/* add your logo */}
      <div className="relative"> 
        <a href="./">
          <Image
            src="/logo.png"
            alt="Logo"
            className="dark:invert"
            width={64}
            height={24}
            priority
          />
        </a>
      </div>
      <div className="ml-auto flex gap-2">
        <Link href="/dashboard">
          <button className="p-2 m-2 text-black bg-blue-300 border border-blue-300 rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-700 transition-all duration-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}