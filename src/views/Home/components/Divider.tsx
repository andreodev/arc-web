import divider from "../../../assets/divider.png";

export default function Divider() {
  return (
    <div className="relative w-full">
      {/* Container da imagem com máscara */}
      <div className="relative w-full h-38 md:h-40"> {/* Defina uma altura fixa */}
        {/* Imagem de fundo */}
        <img
          src={divider}
          alt="Divisor"
          className="w-full h-full object-cover"
        />
        {/* Máscara colorida */}
        <div className="absolute inset-0 bg-[#05313E] opacity-80"></div>
      </div>
      
      {/* Texto sobreposto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl md:text-2xl text-center px-4 py-2">
          Quer controle total do seu negócio? <a className="font-bold" target="_blank" rel="noopener noreferrer">Veja uma demonstração grátis!</a>
        </p>
      </div>
    </div>
  );
}