import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-black border-t border-[#BC00FF]/20 shadow-[0_-10px_30px_rgba(255,0,255,0.1)]">
      <div className="text-lg font-black text-[#FF007A] tracking-widest font-space">
        GORÓ DA MANSÃO
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        <a className="font-space text-xs tracking-widest uppercase text-gray-600 hover:text-[#BC00FF] transition-all duration-150 transition-glow" href="https://www.instagram.com/mansaomaromba/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        <a className="font-space text-xs tracking-widest uppercase text-gray-600 hover:text-[#BC00FF] transition-all duration-150 transition-glow" href="https://www.tiktok.com/@mansaomaromba" target="_blank" rel="noopener noreferrer">TIKTOK</a>
        <a className="font-space text-xs tracking-widest uppercase text-gray-600 hover:text-[#BC00FF] transition-all duration-150 transition-glow" href="https://www.youtube.com/@mansaomaromba" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
        <a className="font-space text-xs tracking-widest uppercase text-gray-600 hover:text-[#BC00FF] transition-all duration-150 transition-glow" href="/privacy">POLÍTICA DE PRIVACIDADE</a>
      </div>
      <div className="font-space text-xs tracking-widest uppercase text-gray-600">
        © 2024 GORÓ DA MANSÃO - MARCHA
      </div>
    </footer>
  );
};

export default Footer;
