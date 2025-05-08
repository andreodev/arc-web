import KronosAppImage from "../../../assets/kronosApp.png";
import GooglePlay from "../../../assets/google-play.png";
import AppStore from "../../../assets/app-store.png";
import iconKronosApp from "../../../assets/iconkronosApp.png"
export default function KronosApp() {
  return (
    <section className="relative overflow-hidden py-12 px-4 sm:px-8 md:px-16">
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Imagem do aplicativo à esquerda */}
        <div className="flex justify-center">
          <img
            src={KronosAppImage}
            alt="Aplicativo Kronos"
            className=""
          />
        </div>

        {/* Texto à direita */}
        <div className="text-[#009172] text-center md:text-left space-y-6">
          <div className="flex flex-col sm:flex-row items-center md:items-start md:justify-start gap-4">
            <img src={iconKronosApp} alt="Ícone Kronos" className="w-20 sm:w-24" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight roboto">
              Kronos App
            </h1>
          </div>

          <h2 className="inter font-bold text-2xl sm:text-3xl lg:text-4xl">
            SUA GESTÃO FINANCEIRA <br className="hidden sm:block" /> NA PALMA DA MÃO
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-sans inter">
            Controle total do seu negócio, de forma simples e visual. <br />
            <span className="font-semibold">
              Com o Kronos App, você acompanha todas as finanças <br className="hidden md:block" /> da sua empresa em tempo real, onde estiver.
            </span>
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Funcionalidades</h3>
              <ul className="text-base text-start sm:text-lg lg:text-xl space-y-2 list-disc list-inside inter ml-5">
                <li>Fluxo de caixa completo e intuitivo</li>
                <li>Gráficos e dashboards inteligentes</li>
                <li>Gestão de receitas, despesas e categorias</li>
                <li key="offline-support">Funciona mesmo sem internet</li>
                <li>Emissão de relatórios</li>
                <li>Relatórios fáceis de entender</li>
                <li>Acesso multiusuário para sócios e colaboradores</li>
              </ul>
            </div>

            <p className="font-semibold text-lg sm:text-xl inter">
              Ideal para quem quer tomar decisões rápidas e <br className="hidden sm:block" />
              estratégicas com base em dados reais.
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
