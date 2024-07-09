import Clients from "@/components/clients/Clients";
import Counts from "@/components/counts/Counts";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Counts />
      <Clients />
      <Testimonials />
    </>
  );
}
