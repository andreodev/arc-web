import KronosAppImage from "../../../assets/kronosApp.png";
import GooglePlay from "../../../assets/google-play.png";
import AppStore from "../../../assets/app-store.png";

export default function KronosApp() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center ">
        {/* Imagem do aplicativo à esquerda */}
        <div className="flex justify-center md:mt-10 w-full">
          <img src={KronosAppImage} alt="Aplicativos" className="max-w-full h-auto" />
        </div>

        {/* Texto à direita */}
        <div className="text-[#009172] text-center md:text-left space-y-6">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold leading-tight roboto">
            KRONOS APP
          </h1>
          <h2 className="inter font-bold text-[28px] sm:text-[40px] lg:text-[48px] pb-6">
            SUA GESTÃO FINANCEIRA <br /> NA PALMA DA MÃO
          </h2>

          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-sans inter mb-6">
            Controle total do seu negócio, de forma simples e visual. <br />{" "}
            <span className="font-semibold">
              Com o Kronos App, você acompanha todas as finanças <br /> da sua
              empresa em tempo real, onde estiver.
            </span>
          </p>

          <div className="space-y-4">
            <ul className="text-lg space-y-2">
              <h3 className="font-semibold">Funcionalidades</h3>
              <li>&#9679; Fluxo de caixa completo e intuitivo</li>
              <li>&#9679; Gráficos e dashboards inteligentes</li>
              <li>&#9679; Gestão de receitas, despesas e categorias</li>
              <li>&#9679; Funciona mesmo sem internet</li>
              <li>&#9679; Emissão de relatórios</li>
              <li>&#9679; Relatórios fáceis de entender</li>
              <li>&#9679; Acesso multiusuário para sócios e colaboradores</li>
            </ul>

            <p className="font-semibold text-xl sm:text-2xl inter mb-6">
              Ideal para quem quer tomar decisões rápidas e <br /> estratégicas
              com base em dados reais.
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex items-center gap-4 sm:gap-6 pb-10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={GooglePlay}
                alt="Disponível no Google Play"
                className="h-12 sm:h-14 rounded-md shadow-md"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStore}
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
