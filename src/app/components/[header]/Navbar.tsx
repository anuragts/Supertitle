'use client'

import Image from "next/image";
import supabase from "@/lib/storage/client";
import { useRouter } from 'next/navigation';

export default function Navbar() {

  const router = useRouter()

  async function signInWithGoogle() {
      await supabase.auth.signInWithOAuth({
          provider:"google",
          options: {
            redirectTo: `${location.origin}/auth/callback`,
          },
        })
        router.refresh()
  }

  const handleSignOut = async () => {
      await supabase.auth.signOut()
      router.refresh()
    } 

  return (
    <div className="absolute top-0 flex h-20 w-full items-center px-4 md:px-6">
      <div className="relative"> 
        <a href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className=""
            width={64}
            height={24}
            priority
          />
        </a>
      </div>
      <div className="ml-auto flex gap-2">
          <button onClick={signInWithGoogle} className="px-8 py-3 m-2 text-black bg-blue-300 border border-blue-300 rounded-xl hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-700 transition-all duration-300">
            Login
          </button>
          <button onClick={handleSignOut} className="px-8 py-3 m-2 border-blue-300 border-2 rounded-xl">Logout</button>

      </div>
    </div>
  );
}