import Layout from "../../../components/Layout";
import image from "../../../assets/Group 3.png";

export default function AboutSolution() {
  return (
    <Layout>
      <div className="flex justify-center items-center mt-10 px-4">
        <div className="p-6 rounded-2xl w-full max-w-6xl">
          <h1 className="roboto text-[#009172] text-[24px] mb-4 text-center">
            SUPORTE SUPER RÁPIDO PARA SUA EMPRESA{" "}
            <span className="font-bold">NÃO PARAR!</span>
          </h1>

          <div className="bg-[#F3F2F2] p-6 rounded-2xl mb-10">
            <h1 className="text-[64px] font-extrabold text-[#009172] roboto text-center mb-4">
              NOSSAS SOLUÇÕES MOBILE
            </h1>
            <p className="text-center text-[#009172] text-[18px] w-7/12 mx-auto ">
              Nossos aplicativos oferecem{" "}
              <span className="font-bold">soluções completas e integradas</span>{" "}
              para o seu negócio, com versões tanto para dispositivos móveis
              quanto para desktop.
            </p>

            {/* Colunas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Card 1 */}
              <div className=" p-4 rounded-xl  text-start space-y-6">
                <div className="p-2 w-full mb-[138px]">
                  <h2 className="text-[#009172] font-bold text-4xl mb-2 roboto">
                    Kronos App
                  </h2>
                  <p className="text-[#009172] inter ">
                    <span className="font-bold">
                      Acompanhe o desempenho financeiro da sua empresa com o
                      Kronos App.
                    </span>{" "}
                    Tenha acesso a dashboards completos de fluxo de caixa,
                    receitas, contas a receber e a pagar, tanto em dispositivos
                    móveis quanto em desktop.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#009172] font-bold text-4xl mb-2 roboto">
                    Kronos Vendas
                  </h2>
                  <p className="text-[#009172] inter">
                    <span className="font-bold">
                      Gerencie suas vendas e pedidos de maneira eficiente com o
                      Kronos Vendas.
                    </span>{" "}
                    Funciona offline e online, permitindo que você cadastre
                    clientes e registre vendas mesmo sem internet, com suporte
                    completo para desktop e mobile.
                  </p>
                </div>
              </div>

              {/* Imagem */}
              <div className="rounded-xl text-center">
                <img src={image} alt="" />
                <button className="mt-20 font-light inter bg-[#009172] rounded-2xl p-2 w-7/12 text-[32px] text-white  shadow-md shadow-gray-500 cursor-pointer hover:drop-shadow-xl">
                  Saiba mais
                </button>
              </div>

              {/* Card 2 */}
              <div className=" p-4 rounded-xl  text-start space-y-6">
                <div className="w-full mb-[138px] p-2">
                  <h2 className="text-[#009172] font-bold text-4xl mb-2 roboto">
                    Kronos Food
                  </h2>
                  <p className="text-[#009172] inter">
                    <span className="font-bold">
                      Ideal para restaurantes e bares, o Kronos Food permite o
                      gerenciamento de mesas e comandas com facilidade.
                    </span>{" "}
                    Registre pedidos e envie diretamente ao servidor, com
                    suporte para um sistema de caixa integrado em desktop.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#009172] font-bold text-4xl mb-2 roboto">
                    Integração POS
                  </h2>
                  <p className="text-[#009172] inter">
                    Com a nova integração POS,{" "}
                    <span className="font-bold">
                      você acessa nosso sistema direto da maquininha de cartão
                    </span>{" "}
                    e gerencia vendas, pedidos com mais agilidade e praticidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
