import FreebieForm from "@/components/FreebieForm";

const Freebie = () => {
  return (
    <section className="relative overflow-x-clip">
      <div className="container bg-(--primary-800) rounded-2xl py-[5.2rem]! px-32! max-md:px-8! max-md:py-[4.8rem] flex items-center justify-between max-md:flex-col">
        <div className="max-w-150 max-md:max-w-full flex flex-col gap-[1.2rem]">
          <h2>
            Get your <span className="text-(--primary-400)">freebie</span>
          </h2>
          <p>
            Want to sell digital products smarter? Enter your email to get FREE
            expert tools and guides now!
          </p>
        </div>
        <FreebieForm />
      </div>
      <div className="absolute -bottom-2/3 blur-[56rem] opacity-30 right-0 translate-x-1/2 w-312 h-312 rounded-full bg-(--primary-500)"></div>
    </section>
  );
};
export default Freebie;
