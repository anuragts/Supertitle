'use client'

import supabase from "@/lib/storage/client"
import { useRouter } from 'next/navigation'


export default function signin() {

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
    <>
    <div>
        Supertitle
    </div>
    <button onClick={signInWithGoogle}>Signin</button>
    <button onClick={handleSignOut}>Logout</button>
    </>
  )
}
