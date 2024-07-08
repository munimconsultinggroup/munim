import Clients from "@/components/clients/Clients";
import Counts from "@/components/counts/Counts";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Counts />
      <Clients />
    </>
  );
}
