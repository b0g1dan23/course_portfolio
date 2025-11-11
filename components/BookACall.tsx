import Button from "@/components/ui/Button";

const BookACall = () => {
  return (
    <section id="book-a-call" className="max-lg:px-8!">
      <div
        className="container rounded-4xl bg-linear-to-br to-(--primary-500) from-(--primary-500)/70 
                    pt-[9.6rem]! pb-60! text-center relative overflow-hidden"
      >
        <h2>You scrolled this far...</h2>
        <p className="opacity-100! mt-[2.4rem]!">
          I think the next logical step is to book the call with me.
        </p>
        <div className="w-fit mx-auto! relative  mt-[4.8rem]!">
          <Button className="text-(--primary-600) hover:text-(--black)" href="https://calendly.com/hi-boge/let-s-discuss-your-project">
            Book a 30-min call
          </Button>
          <span className="absolute top-0 right-0 -translate-y-1/2 text-[2.4rem]! rotate-15 translate-x-1/2 opacity-100!">
            🤫
          </span>
        </div>

        <div className="absolute max-md:w-220 max-md:h-220 -top-40 -right-60 translate-x-1/2 -translate-y-1/2 w-328 h-328 border-[.6rem] border-(--primary-800)/40 rounded-full"></div>
        <div className="absolute max-md:w-200 max-md:h-200 -top-40 -right-60 translate-x-1/2 -translate-y-1/2 w-5xl h-256 border-[.6rem] border-(--white) rounded-full"></div>
        <div className="absolute max-md:w-360 max-md:h-360 -bottom-144 -left-22 translate-y-1/2 -translate-x-1/2 w-360 h-360 border-[.6rem] border-(--white) rounded-full"></div>
        <div className="absolute max-md:w-7xl max-md:h-320 -bottom-144 -left-22 translate-y-1/2 -translate-x-1/2 w-400 h-400 border-[.6rem] border-(--primary-800)/40 rounded-full"></div>
      </div>
    </section>
  );
};
export default BookACall;
