import image from "../../../assets/Group 3.png";
import { Link } from "react-scroll";

export default function AboutSolution() {
  return (
    <div className="flex justify-center items-center mt-10 px-4">
      <div className="p-4 md:p-6 lg:p-10 rounded-2xl w-full max-w-6xl">
        <h1 className="roboto text-[#009172] text-xl md:text-2xl mb-4 text-center">
          SUPORTE SUPER RÁPIDO PARA SUA EMPRESA{" "}
          <span className="font-bold">NÃO PARAR!</span>
        </h1>

        <div className="bg-[#F3F2F2] p-4 md:p-6 lg:p-10 rounded-2xl mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#009172] roboto text-center mb-4">
            NOSSAS SOLUÇÕES MOBILE
          </h1>

          <p className="text-center text-[#009172] text-base md:text-lg max-w-3xl mx-auto">
            Nossos aplicativos oferecem{" "}
            <span className="font-bold">soluções completas e integradas</span>{" "}
            para o seu negócio, com versões tanto para dispositivos móveis
            quanto para desktop.
          </p>

          {/* Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="p-2 md:p-4 rounded-xl text-center md:text-start space-y-6">
              <div className="mb-6">
                <h2 className="text-[#009172] font-bold text-2xl md:text-3xl roboto mb-2">
                  Kronos App
                </h2>
                <p className="text-[#009172] inter text-sm md:text-base">
                  <span className="font-bold">
                    Acompanhe o desempenho financeiro da sua empresa com o
                    Kronos App.
                  </span>{" "}
                  Dashboards completos de fluxo de caixa, receitas, contas a receber e a pagar.
                </p>
              </div>
              <div>
                <h2 className="text-[#009172] font-bold text-2xl md:text-3xl roboto mb-2">
                  Kronos Vendas
                </h2>
                <p className="text-[#009172] inter text-sm md:text-base">
                  <span className="font-bold">
                    Gerencie vendas e pedidos de forma eficiente.
                  </span>{" "}
                  Funciona offline e online, com suporte a desktop e mobile.
                </p>
              </div>
            </div>

            {/* Imagem e botão */}
            <div className="rounded-xl text-center flex flex-col items-center justify-between gap-6">
              <img src={image} alt="soluções" className="w-full max-w-xs mx-auto" />
              <Link
                to="secondary-header"
                smooth={true}
                duration={800}
                offset={-20}
                className="font-light inter bg-[#009172] rounded-xl px-6 py-3 w-full sm:w-9/12 text-xl text-white shadow-md shadow-gray-500 cursor-pointer hover:drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                Saiba mais
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-2 md:p-4 rounded-xl text-center md:text-start space-y-6">
              <div className="mb-6">
                <h2 className="text-[#009172] font-bold text-2xl md:text-3xl roboto mb-2">
                  Kronos Food
                </h2>
                <p className="text-[#009172] inter text-sm md:text-base">
                  <span className="font-bold">
                    Gerenciamento fácil de mesas e comandas.
                  </span>{" "}
                  Envio direto ao servidor com sistema de caixa integrado.
                </p>
              </div>
              <div>
                <h2 className="text-[#009172] font-bold text-2xl md:text-3xl roboto mb-2">
                  Integração POS
                </h2>
                <p className="text-[#009172] inter text-sm md:text-base">
                  <span className="font-bold">
                    Acesse via maquininha de cartão
                  </span>{" "}
                  e gerencie pedidos com agilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
