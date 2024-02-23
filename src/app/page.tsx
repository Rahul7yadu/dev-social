import { Button } from "@/components/ui/button";
import Link from "next/link" 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-background ">
      <section className="text-2xl text-foreground bg-opacity-55"> 
        Welcome To <p className="text-3xl text-blue-500 font-bold underline ">DevSocial</p>  A social Media app Built for Developers By Developers.
      </section>
      <section className="flex gap-6">
        <Link href="/auth"><Button>Login</Button></Link>
        <Button>Signup</Button>
      </section>
    </main>
  );
}
