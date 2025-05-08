import KronosFoodImage from "../../../assets/kronosFood.png";
import iconKronosFood from "../../../assets/IconkronosFoodBig.png";
import GooglePlayDark from "../../../assets/playstoreDark.png";
import AppStoreDark from "../../../assets/apple-store-dark.png";
import { motion } from "framer-motion";

export default function KronosFood() {
  return (
    <section className="relative overflow-hidden bg-[#05313E] ">
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Texto à esquerda */}
        <div className="text-[#CCE9E7] space-y-6 text-center md:text-left ml-0 md:ml-20">
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <img src={iconKronosFood} alt="Ícone Kronos Food" className="w-20 sm:w-24" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight roboto ml-0 sm:ml-7">
              Kronos Food
            </h1>
          </div>
          
          <h2 className="inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
            A SOLUÇÃO COMPLETA PARA BARES E RESTAURANTES
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl font-semibold inter">
            Comande, controle e cresça com o app
            <br /> desenvolvido especialmente para o ramo alimentício.
          </p>

          <div>
            <h3 className="font-semibold text-2xl mb-2 inter">Funcionalidades</h3>
            <ul className="text-base text-start sm:text-lg lg:text-xl space-y-2 list-disc list-inside inter ml-5">
              <li>Criação e acompanhamento de comandas</li>
              <li>Lançamento de pedidos por mesa ou balcão</li>
              <li>Organização de produtos e cardápios</li>
              <li>Integração com o financeiro no Kronos App</li>
              <li>Gestão ágil para entregas e atendimento presencial</li>
            </ul>
            <p className="mt-5 text-base sm:text-lg lg:text-xl">
              Seja você dono de um food truck, lanchonete ou restaurante,{" "}
              <span className="font-semibold">
                o Kronos Food entrega velocidade no atendimento e controle total
                da operação.
              </span>
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
        <div className="flex  ">
          <motion.img
            src={KronosFoodImage}
            alt="Aplicativo Kronos Food"
            className="w-full object-cover"
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
