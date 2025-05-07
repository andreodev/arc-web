import bg from "../../../assets/Rectangle 1.png";
import telas from "../../../assets/arc-multitelas-app.png";

export default function Header() {
  return (
    <section className="relative h-screen overflow-hidden">
  <img
    src={bg}
    alt="Background"
    className="absolute object-cover z-0 bg-[#05313E]"
  />

        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0  backdrop-blur-sm z-10" />

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full px-6 md:px-16 gap-10">
  {/* Texto à esquerda */}
  <div className="text-white space-y-6 text-left max-w-2xl mx-auto">
    <p className="text-lg font-medium text-[#98d2d3]">
      Soluções completas para gestão da sua empresa
    </p>

    <h1 className="text-[48px] md:text-[64px] font-bold leading-tight roboto">
      TENHA O CONTROLE<br />
      <span className="text-[#98d2d3]">DO SEU COMÉRCIO</span><br />
      NA PALMA DA MÃO!
    </h1>

    <p className="text-[20px] md:text-[24px] font-sans w-11/12 h-6/12 inter">
      Transforme a gestão do seu negócio com nossos <strong>aplicativos inovadores</strong>, que oferecem total controle de vendas, pedidos e fluxo de caixa. Funcionando tanto offline quanto online, nossos apps são ideais para acompanhar todos os processos, do atendimento ao cliente até a análise financeira.
    </p>

    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-light transition w-5/12 inter">
      COMECE AGORA MESMO
    </button>
  </div>

  {/* Imagem à direita */}
  <div className="flex justify-center">
    <img
      src={telas}
      alt="Aplicativos"
      className="w-full max-w-xl md:max-w-5xl"
    />
  </div>
</div>

    </section>
  );
}
