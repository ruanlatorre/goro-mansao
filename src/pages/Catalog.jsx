import React from 'react';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

const Catalog = () => {
  const { addToCart } = useCart();
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const products = [
    { id: 'neon-lime', name: 'NEON LIME', price: 89.90, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxWHnLt1szRJlGRC5l_7Oml_RmVAqj0FSiSjKnm9mt8cHt7Zd6sbieaOShLdA-L7xa_x_B-tWRxgAKixJwvGODx8Wo9V0myDdVYDbPMT0rywFhOVEdoYmEe_iyTCSXLiQIqJ-xMyA8fP-K6gugzBQsKUQCC1q8r-2nEnuFbN5j50BrtMtxj2W1KYmbg8p5yUSaYBpBxGW37enw45MLD2XtevlrM6lv0zm41bkDL-Mf7uq-3b9FK_sT31FKhcXsQ6ZXifVpOOOq2QY' },
    { id: 'electric-berry', name: 'ELECTRIC BERRY', price: 75.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk_250QbXYuA6E_a0rPf2aEiYC5JRGKanJO_gPwZDT5wD-xjGmiReBijhdqPB9wJMkdPxqFHmI0h3_Y9a6k4ZKVM1YjxkuXsKENGbi32Srmm-5E-3ovizgN7F8BQmeLycv95TYfk8_vzvcVcD0x5Q-568KRMildWRsaOLIxKCeq94EneDz7rsgdpCXcWwPX775Ee6CtFvGvJ9AD9-M_9ojuJpgfevQT6h7aCJ80DBzv8-644M2umcVkRlJJpWRO3wr-UqrHXMLss0' },
    { id: 'tropical-flow', name: 'TROPICAL FLOW', price: 79.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDThjLQkgjAJz-5bFFXMKWRW55hPdHXzWEeNG2h6T-yvnf7xodg_0rd6EBtv8M7jFwZqtvw8p-AKC1kbIPTKJwMwP15O_Sg--phavBs2aPSASyfsVxZI-StPZ8yu7pDJQxK8nOkVM0U-eNI34VEDrgFwKhJzESLOS8KEjO_U8t6AED3ROl7I-EOdlaiofbLEdYpSo3xefJ7Iu2xtG15XH4ociMaSfA4iLdYLRYwqShUnbZzkSxRNJSHxjunfyZer8Lmp_TaxI2JY1Y' },
    { id: 'cyber-mint', name: 'CYBER MINT', price: 75.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf2-4MVmQTsQrnC0_0T83g3nJpaIQJRv5TrGSt-j7TjoAxHCqXM_DkBXYwhjLBo2Y_LKxyCzAF3VJYmtRiuiD3rsiQbKWtLVTNvcPAL1aTNiyligFXgykJ7_gTZ1ZsCUNZ-a6f_RgBqdcLQ3LU0zbkdhwUr1nR4og1EfZ7QS_bs8pgJvPszdEyLObYFaySDy5tEN7eTX4540U_W799XW4mrkEswLT0x_cE9Jp9a7005V0HSx6BCYN-pBfkOnCRCqHX3XhPJvlVyJY' },
  ];

  return (
    <div className="bg-black text-on-surface font-space">
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div id="lineup" className="mb-16">
          <p className="text-primary-container font-label-caps mb-4 uppercase">EXPERIÊNCIA SENSORIAL</p>
          <h1 className="font-headline-xl text-white mb-6 uppercase leading-none">CATÁLOGO DE <span className="text-primary-container">SABORES</span></h1>
          <div className="laser-line w-1/3"></div>
        </div>

        <div id="drops" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Item 1 */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-secondary-container/30 overflow-hidden relative group hover:shadow-[0_0_30px_rgba(0,238,252,0.2)] transition-all duration-500 rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
            <img className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:scale-110 transition-transform duration-700" src={products[0].image} />
            <div className="relative z-20 p-10 flex flex-col justify-end h-[500px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-secondary-container shadow-[0_0_10px_#00eefc]"></span>
                <span className="text-secondary-container font-label-caps text-[10px]">SIGNATURE WHISKY</span>
              </div>
              <h2 className="font-headline-lg text-white mb-4">NEON LIME</h2>
              <p className="text-on-surface-variant font-body-lg max-w-xl mb-8">Whisky premium com infusão cítrica e Blue Curaçao. O flow da noite em cada gole.</p>
              <div className="flex items-center gap-4">
                <button onClick={() => addToCart(products[0])} className="bg-secondary-container text-black font-label-caps px-8 py-4 hover:shadow-[0_0_20px_#00eefc] hover:scale-105 transition-all">COMPRAR</button>
                <span className="text-white font-headline-md text-xl">R$ 89,90</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="md:col-span-4 bg-surface-container-lowest border border-primary-container/30 overflow-hidden relative group hover:shadow-[0_0_30px_rgba(188,0,255,0.2)] transition-all duration-500 rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img className="w-full h-full object-cover absolute inset-0 opacity-50 group-hover:scale-110 transition-transform duration-700" src={products[1].image} />
            <div className="relative z-20 p-8 h-full flex flex-col justify-end">
              <h2 className="font-headline-md text-white mb-2">ELECTRIC BERRY</h2>
              <p className="text-on-surface-variant mb-6 text-sm">Frutas vermelhas e energia pura.</p>
              <button onClick={() => addToCart(products[1])} className="w-full border border-primary-container text-primary-container font-label-caps py-4 hover:bg-primary-container hover:text-white transition-all">ADICIONAR</button>
            </div>
          </div>

          {/* More Items... */}
          <div id="colecoes" className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
             {products.slice(2).map(product => (
               <div key={product.id} className="bg-surface-container p-6 border border-white/5 flex flex-col gap-6 group hover:border-primary-container/40 transition-all relative overflow-hidden">
                 <div className="flex justify-between items-start">
                   <h3 className="font-headline-md text-white text-sm uppercase">{product.name}</h3>
                   <span className="text-primary-container font-bold">R$ {product.price.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-center h-40">
                   <img src={product.image} alt={product.name} className="h-full object-contain group-hover:scale-110 transition-transform" />
                 </div>
                 <button onClick={() => addToCart(product)} className="w-full py-3 bg-white/5 border border-white/10 text-white font-label-caps hover:bg-white hover:text-black transition-all">ADICIONAR AO PACK</button>
               </div>
             ))}
          </div>
        </div>

        <div className="my-24 text-center">
          <h2 className="font-headline-lg text-white mb-4 italic tracking-widest uppercase italic">WHISKY. ENERGIA. <span className="text-primary-container">REVOLUÇÃO</span>.</h2>
          <div className="flex justify-center gap-1">
            <div className="w-1 h-8 bg-primary-container"></div>
            <div className="w-1 h-12 bg-primary-container"></div>
            <div className="w-1 h-16 bg-primary-container shadow-[0_0_15px_#BC00FF]"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
