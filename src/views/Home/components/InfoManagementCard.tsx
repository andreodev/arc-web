import rocket from "../../../assets/cardsManagement/rocket.png";
import control from "../../../assets/cardsManagement/control.png"
import security from "../../../assets/cardsManagement/security.png"
import arrow from "../../../assets/cardsManagement/arrow.png"
import experience from "../../../assets/cardsManagement/experience.png"
import document from "../../../assets/cardsManagement/document.png"
import suport from "../../../assets/cardsManagement/suport.png"
import machininha from "../../../assets/cardsManagement/machininha.png"
export default function InfoManagementSection() {
  const cards = [
    {
      id: 1,
      icons: rocket,
      texto: " em seu atendimento",
      textoBold: "Mais velocidade",
    },
    {
      id: 2,
      icons: control,
      texto: " de seus pedidos",
      textoBold: "Mais controle",
    },
    {
      id: 3,
      icons: security,
      texto: " em suas transações",
      textoBold: "Mais segurança",
    },
    {
      id: 4,
      icons: arrow,
      texto: undefined,
      textoBold: "Maior Redução de erros",
    },
    {
      id: 5,
      icons: experience,
      texto: " para o cliente",
      textoBold: "Melhor experiência",
    },
    {
      id: 6,
      icons: document,
      texto: undefined,
      textoBold: "Documentos fiscais organizados em um só lugar",
    },
    {
      id: 7,
      icons: suport,
      texto: undefined,
      textoBold: "Atendimento ágil e suporte humano",
    },
    {
      id: 8,
      icons: machininha,
      texto: "(POS)",
      textoBold: "Controle total direto da maquininha",
    },
  ];
  return (
    <div className="bg-[#CCE9E7] flex justify-center items-center py-16">
      <div className="w-9/12 text-center">
        <h1 className="font-bold text-[#009172] text-6xl roboto mb-12">
          TUDO QUE VOCÊ PRECISA PARA SUA GESTÃO
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {cards.map((cards) => (
            <div className="bg-white p-6 rounded-xl shadow w-[100%]" key={cards.id}>
              <img src={cards.icons} alt="" />
              <h1 className="text-[#009172] text-start mt-8 p-2 inter">
                <span className="font-bold">{cards.textoBold} </span>
                {cards.texto}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
