import { useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";

const frases = [
  {
    texto: "DO SEU RESTAURANTE",
    animacao: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20 } }
  },
  {
    texto: "DO SEU COMÉRCIO",
    animacao: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20 } }
  },
  {
    texto: "DA SUA LOJA",
    animacao: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x:0 }, exit: { opacity: 0, x: 20 } }
  }
];

export default function TextoAlternado() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const { texto, animacao } = frases[index];

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={texto}
        className="font-bold text-[#009172] inline-block"
        initial={animacao.initial}
        animate={animacao.animate}
        exit={animacao.exit}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {texto}
      </motion.span>
    </AnimatePresence>
  );
}
