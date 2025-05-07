import KronosVendasImage from "../../../assets/KronosVendas.png";
import GooglePlayDark from "../../../assets/playstoreDark.png";
import AppStoreDark from "../../../assets/apple-store-dark.png";

export default function KronosVendas() {
  return (
    <section className="relative pt-20 bg-[#CCE9E7]">
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-12">
        {/* Imagem à esquerda */}
        <div className="flex justify-center w-full">
          <img
            src={KronosVendasImage}
            alt="Aplicativos"
            className="w-full h-auto object-cover max-w-md md:max-w-lg"
          />
        </div>

        {/* Texto à direita */}
        <div className="text-[#05313E] text-left space-y-6 mt-8 md:mt-0">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight roboto">
            Kronos Vendas
          </h1>
          <h2 className="inter font-bold text-[28px] sm:text-[36px] lg:text-[40px] leading-snug">
            GERENCIA SUAS VENDAS
            <br /> COM MAIS EFICIÊNCIA
          </h2>

          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-sans inter mb-4">
            <span className="font-semibold">
              O app ideal para quem quer manter tudo sob controle no ponto de venda.
            </span>{" "}
            Simples de usar, poderoso para escalar seu negócio.
          </p>

          <div>
            <h3 className="font-semibold text-2xl mb-2 inter">Funcionalidades</h3>
            <ul className="text-xl sm:text-2xl space-y-1 list-disc list-inside inter">
              <li>Cadastro e gestão de clientes</li>
              <li>Controle de pedidos, orçamentos e produtos</li>
              <li>Emissão de recibos e controle de pagamentos</li>
              <li>Histórico de vendas e negociações</li>
              <li>Integração com o Kronos App para visão financeira completa</li>
            </ul>
            <p className="mt-5 text-xl sm:text-2xl font-semibold inter">
              Feito para comércios, lojas e prestadores de serviço que buscam mais agilidade no dia a dia.
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex items-center gap-4 pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={GooglePlayDark}
                alt="Disponível no Google Play"
                className="h-12 sm:h-14 rounded-md shadow-md"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStoreDark}
                alt="Disponível na App Store"
                className="h-12 sm:h-14 rounded-md shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
