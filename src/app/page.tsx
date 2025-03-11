import { Copyright } from "@/components/Copyright";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col p-8 gap-8 max-w-4xl">
      <Logo />
      <Header />
      <Work />
      <Education />
      <Copyright />
    </main>
  );
}
