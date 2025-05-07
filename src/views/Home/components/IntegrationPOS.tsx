import Maquina from "../../../assets/maquina.png";
import GooglePlayDark from "../../../assets/playstoreDark.png";
import AppStoreDark from "../../../assets/apple-store-dark.png";
import { motion } from "framer-motion";

export default function IntegrationPOS() {
  return (
    <section className="relative overflow-hidden bg-[#05313E]  ">
      <div className="relative  grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
        {/* Texto à esquerda */}
        <div className="text-[#CCE9E7] space-y-5">
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-tight roboto">
            Integração POS
          </h1>
          <h2 className="inter w-2xl font-bold text-[28px] md:text-[36px] lg:text-[40px] leading-snug">
            ACESSA NOSSO SISTEMA DIRETO DA MAQUININHA DE CARTÃO
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[22px] font-sans inter">
            A revolução no seu atendimento chegou: agora, nossos sistemas podem
            ser acessados diretamente da máquina de cartão!
          </p>

          <div>
            <h3 className="font-semibold text-2xl mb-2 inter">
              Funcionalidades
            </h3>
            <ul className="text-2xl space-y-1 list-disc list-inside inter">
              <li>Acessar o Kronos direto do terminal de pagamento</li>
              <li>
                Gerenciar vendas, pedidos e fluxo de caixa no mesmo dispositivo
              </li>
              <li>Reduzir tempo de atendimento</li>
              <li>Eliminar retrabalho e erros de digitação</li>
              <li>Ter mais praticidade no balcão ou na rua</li>
            </ul>
            <p className="mt-5 text-2xl ">
              Uma experiência ainda mais rápida, eficiente e segura para você e
              seus clientes.
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex items-center gap-4 pt-4 ">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={GooglePlayDark}
                alt="Disponível no Google Play"
                className="h-12 rounded-md shadow-md "
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStoreDark}
                alt="Disponível na App Store"
                className="h-12 rounded-md shadow-md"
              />
            </a>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="w-[949px] flex justify-center">
          <motion.img
            src={Maquina}
            alt="Aplicativos"
            className="w-auto h-auto"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
