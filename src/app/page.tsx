import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col p-8 gap-8">
      <Logo />
      <Header />
      <Work />
    </main>
  );
}
