import KronosVendasImage from "../../../assets/KronosVendas.png";
import iconKronosVendas from "../../../assets/bigIcon/iconKronosVendasBig.png"
import GooglePlayDark from "../../../assets/playstoreDark.png";
import AppStoreDark from "../../../assets/apple-store-dark.png";

export default function KronosVendas() {
  return (
    <section className="relative pt-5 bg-[#CCE9E7] px-4 sm:px-8 md:px-16">
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Imagem à esquerda */}
        <div className="flex justify-center md:justify-start">
          <img
            src={KronosVendasImage}
            alt="Aplicativo"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-cover md:object-contain"
          />
        </div>

        {/* Texto à direita */}
        <div className="text-[#05313E] text-left space-y-6 mt-8 md:mt-0">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img src={iconKronosVendas} alt="Ícone Kronos Vendas" className="w-20 sm:w-24" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight roboto ml-0 sm:ml-4">
              Kronos Vendas
            </h1>
          </div>

          <h2 className="inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
            GERENCIA SUAS VENDAS
            <br /> COM MAIS EFICIÊNCIA
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-sans inter mb-4">
            <span className="font-semibold">
              O app ideal para quem quer manter tudo sob controle no ponto
              <br /> de venda.
            </span>{" "}
            Simples de usar, poderoso para escalar seu negócio.
          </p>

          <div>
            <h3 className="font-semibold text-2xl sm:text-3xl mb-4 inter">Funcionalidades</h3>
            <ul className="text-base text-start sm:text-lg lg:text-xl space-y-2 list-disc list-inside inter ml-5">
              <li>Cadastro e gestão de clientes</li>
              <li>Controle de pedidos, orçamentos e produtos</li>
              <li>Emissão de recibos e controle de pagamentos</li>
              <li>Histórico de vendas e negociações</li>
              <li>Integração com o Kronos App para visão financeira completa</li>
            </ul>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold inter">
              Feito para comércios, lojas e prestadores de serviço que
              <br /> buscam mais agilidade no dia a dia.
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex items-center gap-4 pt-4 justify-center md:justify-start p-3">
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
