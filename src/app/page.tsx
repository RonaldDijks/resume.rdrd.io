import Header from "@/components/Header";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex flex-col p-8 max-w-(--breakpoint-sm)">
      <Logo />
      <Header />
    </main>
  );
}
