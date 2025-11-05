import AboutMe from "@/components/AboutMe";
import APIsUsedTrack from "@/components/APIsUsedTrack";
import BookACall from "@/components/BookACall";
import FeaturedWork from "@/components/FeaturedWork";
import Freebie from "@/components/Freebie";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const page = () => {
  return (
    <>
      <Hero />
      <APIsUsedTrack />
      <FeaturedWork />
      <AboutMe />
      <Freebie />
      <Services />
      <BookACall />
    </>
  );
};
export default page;
