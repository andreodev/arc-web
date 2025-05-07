import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import kronos from "../../../assets/kronos.png";
import GooglePlay from "../../../assets/google-play.png";
import AppStore from "../../../assets/app-store.png";

export default function BottomBar() {
  return (
    <div className="w-full bg-[#CCE9E7] py-6 px-8 bottom-0 left-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo e nome */}
        <div className="flex items-center gap-3">
          <img src={kronos} alt="Logo ARC Solution" className="w-14 h-14" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-[#008374]">ARC</span>
            <span className="text-base text-[#008374]/80 tracking-wide">SOLUTION</span>
          </div>
        </div>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#008374] text-white px-5 py-2.5 rounded-md shadow-md hover:brightness-110 text-base"
        >
          <FaWhatsapp size={20} />
          Fale Conosco
        </a>

        {/* Redes Sociais */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#2d2d2d] font-semibold tracking-wide uppercase">
            Siga-nos nas <br></br><strong className="font-bold">Redes Sociais</strong>
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008374] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008374] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Botões de download */}
        <div className="flex items-center gap-3">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlay} alt="Disponível no Google Play" className="h-12 rounded-md shadow-md" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={AppStore} alt="Disponível na App Store" className="h-12 rounded-md shadow-md" />
          </a>
        </div>
      </div>
    </div>
  );
}
