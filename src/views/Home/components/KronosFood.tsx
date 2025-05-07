import KronosFoodImage from "../../../assets/kronosFood.png";
import GooglePlayDark from "../../../assets/playstoreDark.png";
import AppStoreDark from "../../../assets/apple-store-dark.png";
import { motion } from "framer-motion";

export default function KronosFood() {
  return (
    <section className="relative overflow-hidden bg-[#05313E]">
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8  max-w-8xl mx-auto">
        {/* Texto à esquerda */}
        <div className="text-[#CCE9E7] space-y-5 text-center md:text-left p-16">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight roboto">
            Kronos Food
          </h1>
          <h2 className="inter font-bold text-[28px] sm:text-[36px] lg:text-[40px] leading-snug">
            A SOLUÇÃO COMPLETA PARA BARES E RESTAURANTES
          </h2>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold inter">
            Comande, controle e cresça com o app<br/> desenvolvido especialmente para o ramo alimentício.
          </p>

          <div>
            <h3 className="font-semibold text-2xl mb-2 inter">
              Funcionalidades
            </h3>
            <ul className="text-xl sm:text-2xl space-y-1 list-disc list-inside inter">
              <li>Criação e acompanhamento de comandas</li>
              <li>Lançamento de pedidos por mesa ou balcão</li>
              <li>Organização de produtos e cardápios</li>
              <li>Integração com o financeiro no Kronos App</li>
              <li>Gestão ágil para entregas e atendimento presencial</li>
            </ul>
            <p className="mt-5 text-xl sm:text-2xl">
              Seja você dono de um food truck, lanchonete ou restaurante,{" "}
              <span className="font-semibold">
                o Kronos Food entrega velocidade no atendimento e controle total
                da operação.
              </span>
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

        {/* Imagem à direita */}
        <div className="w-full flex mt-8 md:mt-0">
  <motion.img
    src={KronosFoodImage}
    alt="Aplicativos"
    className="w-full h-full object-cover"
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
