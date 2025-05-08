
export default function SecondaryHeader() {
  return (
    <section className="relative  px-6 py-16 md:px-12 lg:px-20 bg-[#05313E] overflow-hidden h-screen w-full">
     

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center h-full px-6 sm:px-8 md:px-16 gap-6 sm:gap-10">
        <div className="text-white space-y-6 text-left max-w-2xl mx-auto md:mx-0">
          <p className="text-xl sm:text-2xl font-medium text-[#98d2d3] roboto">
            Nossas soluções
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-[64px] font-bold leading-tight roboto">
            TUDO QUE SUA EMPRESA PRECISA
          </h1>

          <p className="text-base sm:text-lg md:text-[24px] font-sans inter sm:w-11/12">
            <span className="font-bold">
              Na Arc Solution, desenvolvemos sistemas completos para facilitar a
              rotina de quem empreende.
            </span>{" "}
            Conheça nossos aplicativos e descubra como eles transformam a gestão
            do seu negócio — do atendimento à análise financeira.
          </p>
        </div>
      </div>
    </section>
  );
}
