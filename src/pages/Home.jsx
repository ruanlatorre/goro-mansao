import React from 'react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 'neon-berry', name: 'NEON BERRY', price: 149.90, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9kg4bhXwAvl-9od6Qneoy5bdOJ5uevtJMnexKe4NXltvV4whwgIvF5MRzJUl0z6yRnZ0Pfga97sKcHyjUaPxlN1JoTRf_PUwlhuaybZHPEzvpnoo6S-eZq5bVu0EWfwzdQmYc-Eh_Lj4rC5ztrWBx_pBu1TXoyG-YbYtvMEGBUr5WcdHeyxG0j5HEn780A6ifeF1f-P-7iuhO9Be0STrR8t7ttcuVu5hFe0TGlFAYx_Cw7f3xMn7wrm334_Y0DCpsh6kvIucLr4A' },
    { id: 'cyan-freeze', name: 'CYAN FREEZE', price: 129.90, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3mo0LsUArf47AQPw8V6ibdN1kd-qSWG8eQ8YOhXpzGRCwPqFX8w_7qDpeImEmRYllH9H6LVdxU_EJTdidggVGTi7l0FzluzXRAecZ8QlSLtpmWSpGJkLCoFwf-1d_JgSpC0GijrU_btPnTUYwnbTTdrpPq0HfIQj3Pl6Pb_JqmdibomtxaYbHmS9gdBLnPUKf0_MFbyx2z0eEwnzHoaF5v6Dp4zT-Z1aXbeBt99qlR2pU3NCHDttmntUq2O8ofvUhFmO3iWItFfc' },
    { id: 'vibe-pink', name: 'VIBE PINK', price: 139.90, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsLUCzynoRUngCTWDLkSCyic2_524SzeJxQThENjwN_0vYfE8hhfH2qI52KTgI5EGFJu-r01jU-6sJQAauwMWWY_0UT1e9Qwe5RcALE5V4YxaJQFSJBVHpCHA9QYZrv18LdM7N5QUQx7hWw3I6kEOskBcZbH5YKQ77TYWC2amu3DuVfHYIU7Ddu7B_Em_2g8pvVOCSg0b25Y2Y58jnLnLVSO-80xw5ItT4tKvWqwaPTXHjWWzjTllnSIekmD46o9EHGCerZFfE9i0' },
  ];

  return (
    <div className="bg-black text-on-surface font-space">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-[#000000]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BC00FF] to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FF007A] to-transparent"></div>
          </div>
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-tertiary-container/20 rounded-full blur-[120px]"></div>
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#FF007A] rounded-full strobe-pulse animate-pulse"></div>
                <span className="font-label-caps text-secondary-container text-xs">A EVOLUÇÃO DO DESTILADO</span>
              </div>
              <h1 className="font-headline-xl text-white uppercase leading-none">
                WHISKY COM <span className="text-primary-container">SABOR ENERGÉTICO</span>
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg">
                Esqueça o comum. O Goró da Mansão é o primeiro whisky premium com o flow do energético, sem os colaterais da mistura tradicional. Intensidade pura, sabor marcante.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => addToCart({ id: 'main-whisky', name: 'GORÓ PREMIUM WHISKY', price: 199.90, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf2-4MVmQTsQrnC0_0T83g3nJpaIQJRv5TrGSt-j7TjoAxHCqXM_DkBXYwhjLBo2Y_LKxyCzAF3VJYmtRiuiD3rsiQbKWtLVTNvcPAL1aTNiyligFXgykJ7_gTZ1ZsCUNZ-a6f_RgBqdcLQ3LU0zbkdhwUr1nR4og1EfZ7QS_bs8pgJvPszdEyLObYFaySDy5tEN7eTX4540U_W799XW4mrkEswLT0x_cE9Jp9a7005V0HSx6BCYN-pBfkOnCRCqHX3XhPJvlVyJY' })}
                  className="bg-primary-container text-white px-10 py-4 font-headline-md uppercase tracking-widest neon-glow-purple border border-primary-container hover:bg-black transition-all"
                >
                  EXPERIMENTE O FLOW
                </button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute w-64 h-96 bg-primary-container/40 blur-[100px] rounded-full"></div>
              <img 
                alt="Premium Black Energy Can" 
                className="relative z-10 w-full max-w-sm drop-shadow-[0_0_50px_rgba(188,0,255,0.3)] transform hover:rotate-2 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf2-4MVmQTsQrnC0_0T83g3nJpaIQJRv5TrGSt-j7TjoAxHCqXM_DkBXYwhjLBo2Y_LKxyCzAF3VJYmtRiuiD3rsiQbKWtLVTNvcPAL1aTNiyligFXgykJ7_gTZ1ZsCUNZ-a6f_RgBqdcLQ3LU0zbkdhwUr1nR4og1EfZ7QS_bs8pgJvPszdEyLObYFaySDy5tEN7eTX4540U_W799XW4mrkEswLT0x_cE9Jp9a7005V0HSx6BCYN-pBfkOnCRCqHX3XhPJvlVyJY" 
              />
              {/* Taurine Animation Removed as requested */}
            </div>
          </div>
        </section>

        {/* Sabores Section */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="container mx-auto px-8">
            <div className="mb-16 text-center">
              <h2 className="font-headline-lg text-white mb-4 uppercase italic">LINHA SENSORIAL</h2>
              <div className="laser-line mx-auto w-48"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 group relative overflow-hidden bg-surface-container border border-white/5 p-8 transition-all hover:border-[#BC00FF]/50">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-[#BC00FF]/20 text-[#BC00FF] px-3 py-1 font-label-caps border border-[#BC00FF]/30 text-[10px]">PREMIUM DROP</span>
                </div>
                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="space-y-4">
                    <h3 className="font-headline-md text-white">NEON BERRY WHISKY</h3>
                    <p className="text-on-surface-variant font-body-md">Destilado premium com infusão de frutas vermelhas e o flow do energético.</p>
                  </div>
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-500">
                    <img alt="Neon Berry Can" className="h-64 object-contain" src={products[0].image} />
                  </div>
                  <button 
                    onClick={() => addToCart(products[0])}
                    className="w-full py-4 border border-[#BC00FF] text-[#BC00FF] font-label-caps hover:bg-[#BC00FF] hover:text-black transition-all"
                  >
                    ADICIONAR AO PACK
                  </button>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-surface-container border border-white/5 p-8 transition-all hover:border-secondary-container/50">
                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="space-y-4">
                    <h3 className="font-headline-md text-secondary-container">CYAN FREEZE</h3>
                    <p className="text-on-surface-variant font-body-md text-sm italic">O whisky mais gelado da cena.</p>
                  </div>
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-500">
                    <img alt="Cyan Freeze Can" className="h-48 object-contain" src={products[1].image} />
                  </div>
                  <button 
                    onClick={() => addToCart(products[1])}
                    className="w-full py-3 border border-secondary-container text-secondary-container font-label-caps hover:bg-secondary-container hover:text-black transition-all"
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-surface-container border border-white/5 p-8 transition-all hover:border-tertiary-container/50">
                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="space-y-4">
                    <h3 className="font-headline-md text-tertiary-container">VIBE PINK</h3>
                    <p className="text-on-surface-variant font-body-md text-sm italic">Para quem não para um segundo.</p>
                  </div>
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-500">
                    <img alt="Vibe Pink Can" className="h-48 object-contain" src={products[2].image} />
                  </div>
                  <button 
                    onClick={() => addToCart(products[2])}
                    className="w-full py-3 border border-tertiary-container text-tertiary-container font-label-caps hover:bg-tertiary-container hover:text-black transition-all"
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
