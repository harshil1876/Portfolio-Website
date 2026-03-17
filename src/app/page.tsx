import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BentoFoundation } from "@/components/sections/BentoFoundation";
import { SnakeJourney } from "@/components/sections/SnakeJourney";
import { ShowcaseSlider } from "@/components/sections/ShowcaseSlider";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <BentoFoundation />
        <SnakeJourney />
        <ShowcaseSlider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
