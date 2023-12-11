import supabase from "@/lib/storage/client";
import { useRouter } from 'next/navigation';

export async function signInWithGoogle() {
    const router = useRouter();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  }
