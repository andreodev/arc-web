import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KronosFoodImagem from "../../../assets/imagensAlternadas/KronosFood.png";
import KronosVendaImagem from "../../../assets/imagensAlternadas/kronosVendas.png";
import KronosAppImagem from "../../../assets/imagensAlternadas/kronosApp.png";

const imagens = [
  {
    imagem: KronosFoodImagem,
    animacao: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x:0 }, exit: { opacity: 0, x: 20 } }

  },
  {
    imagem: KronosVendaImagem,
    animacao: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x:0 }, exit: { opacity: 0, x: 20 } }

  },
  {
    imagem: KronosAppImagem,
    animacao: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x:0 }, exit: { opacity: 0, x: 20 } }
  }
];

export default function ImagemAlternada() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000); // trocando a cada 2 segundos
    return () => clearInterval(intervalo);
  }, []);

  const { imagem, animacao } = imagens[index]; // corrigido para "imagem"

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={imagem} // agora usamos "imagem"
        src={imagem} // passando a imagem
        alt="Imagem Alternada"
        className="font-bold text-[#009172] inline-block"
        initial={animacao.initial}
        animate={animacao.animate}
        exit={animacao.exit}
        transition={{ duration: 0.6 }}
      />
    </AnimatePresence>
  );
}
