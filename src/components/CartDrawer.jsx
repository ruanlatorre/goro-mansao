import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-surface-container-lowest border-l border-primary-container/30 shadow-[-10px_0_50px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50">
          <h2 className="font-headline-md text-white">SEU CARRINHO</h2>
          <button onClick={() => setIsCartOpen(false)} className="material-symbols-outlined text-on-surface-variant hover:text-white transition-colors">close</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/20">shopping_bag</span>
              <p className="text-on-surface-variant font-label-caps">SEU PACK ESTÁ VAZIO</p>
              <button onClick={() => setIsCartOpen(false)} className="text-primary-container font-bold hover:underline">VOLTAR ÀS COMPRAS</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-surface-container border border-white/5 relative group">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                <div className="flex-1">
                  <h3 className="font-headline-md text-sm text-white uppercase">{item.name}</h3>
                  <p className="text-primary-container font-bold text-sm">R$ {item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-on-surface-variant uppercase">QTD: {item.quantity}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="absolute top-2 right-2 text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-black/50 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-label-caps text-on-surface-variant">TOTAL</span>
              <span className="font-headline-md text-xl text-white">R$ {cartTotal.toFixed(2)}</span>
            </div>
            <Link 
              to="/checkout" 
              onClick={() => setIsCartOpen(false)}
              className="w-full py-4 bg-gradient-to-r from-[#BC00FF] to-[#ebb2ff] text-black font-headline-md font-bold text-center block uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              FINALIZAR PEDIDO
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
