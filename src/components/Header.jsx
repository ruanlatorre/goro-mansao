import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-black/90 backdrop-blur-md border-b border-[#BC00FF]/50 shadow-[0_1px_15px_rgba(188,0,255,0.4)]">
        <Link to="/" className="text-2xl font-black italic text-white tracking-widest font-space">
          GORÓ DA MANSÃO
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 items-center">
          <Link to="/catalog#lineup" className="font-space uppercase tracking-tighter font-bold text-gray-400 hover:text-white transition-all">LINEUP</Link>
          <Link to="/catalog#drops" className="font-space uppercase tracking-tighter font-bold text-gray-400 hover:text-white transition-all">DROPS</Link>
          <Link to="/catalog#colecoes" className="font-space uppercase tracking-tighter font-bold text-gray-400 hover:text-white transition-all">COLEÇÕES</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="material-symbols-outlined text-white hover:text-[#BC00FF] transition-colors relative"
          >
            shopping_cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#BC00FF] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-400 uppercase">OLÁ, {user.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="text-[10px] font-bold text-gray-500 hover:text-red-500 transition-all uppercase">Sair</button>
              </div>
            ) : (
              <Link to="/login" className="bg-transparent border border-white/20 text-white px-4 py-2 font-space text-xs font-bold uppercase tracking-tighter hover:bg-white/10 transition-all">
                LOGIN
              </Link>
            )}

            <Link to="/checkout" className="bg-[#BC00FF] text-black px-6 py-2 font-space font-bold uppercase tracking-tighter hover:shadow-[0_0_15px_#BC00FF] transition-all">
              COMPRAR
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden material-symbols-outlined text-white hover:text-[#BC00FF] transition-colors"
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[40] md:hidden">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 p-8">
            <nav className="flex flex-col items-center gap-8">
              <Link to="/catalog#lineup" onClick={() => setIsMenuOpen(false)} className="text-2xl font-space uppercase tracking-widest font-black text-white hover:text-[#BC00FF] transition-all">LINEUP</Link>
              <Link to="/catalog#drops" onClick={() => setIsMenuOpen(false)} className="text-2xl font-space uppercase tracking-widest font-black text-white hover:text-[#BC00FF] transition-all">DROPS</Link>
              <Link to="/catalog#colecoes" onClick={() => setIsMenuOpen(false)} className="text-2xl font-space uppercase tracking-widest font-black text-white hover:text-[#BC00FF] transition-all">COLEÇÕES</Link>
            </nav>
            
            <div className="w-full h-px bg-white/10"></div>
            
            <div className="flex flex-col items-center gap-6 w-full">
              {user ? (
                <>
                  <span className="text-xs font-bold text-gray-400 uppercase">OLÁ, {user.name}</span>
                  <button onClick={handleLogout} className="text-sm font-bold text-red-500 uppercase">Encerrar Sessão</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center border border-white/20 text-white py-4 font-space text-lg font-bold uppercase tracking-widest">
                  LOGIN
                </Link>
              )}
              
              <Link to="/checkout" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-[#BC00FF] text-black py-4 font-space font-bold uppercase tracking-widest shadow-[0_0_20px_#BC00FF]">
                FINALIZAR COMPRA
              </Link>
            </div>
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
};

export default Header;
