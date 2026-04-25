import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [submitted, setSubmitted] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    cpf: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    
    // Simple Masking Logic
    if (name === 'cep') {
      value = value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
    } else if (name === 'cpf') {
      value = value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').replace(/(\d{4})(\d)/g, '$1 $2').trim().slice(0, 19);
    } else if (name === 'cardExpiry') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
    } else if (name === 'cardCvv') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'cep' && value.replace(/\D/g, '').length === 8) {
      handleCepLookup(value.replace(/\D/g, ''));
    }
  };

  const handleCepLookup = async (cep) => {
    setLoadingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setFormData(prev => ({
          ...prev,
          address: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar CEP", error);
    } finally {
      setLoadingCep(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 2000);
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface font-space min-h-screen">
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold font-headline-md">1</span>
                <span className="font-label-caps text-xs text-white">IDENTIFICAÇÃO</span>
              </div>
              <div className="flex-1 h-[2px] bg-surface-container-highest">
                <div className="h-full w-full bg-primary-container"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full border-2 border-primary-container flex items-center justify-center text-primary-container font-bold font-headline-md">2</span>
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">PAGAMENTO</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <section>
                <h2 className="font-headline-md text-white mb-6 flex items-center gap-2 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-primary">local_shipping</span> ENTREGA RÁPIDA
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">E-MAIL</label>
                    <input name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="usuario@mansao.com" type="email" />
                  </div>
                  
                  <div className="space-y-2 relative">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">CEP</label>
                    <input name="cep" value={formData.cep} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="00000-000" type="text" maxLength="9" />
                    {loadingCep && <div className="absolute right-4 bottom-4 animate-spin h-5 w-5 border-2 border-primary-container border-t-transparent rounded-full"></div>}
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">CPF</label>
                    <input name="cpf" value={formData.cpf} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="000.000.000-00" type="text" />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">ENDEREÇO</label>
                    <input name="address" value={formData.address} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="Rua da Batida" type="text" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">NÚMERO</label>
                    <input name="number" value={formData.number} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="123" type="text" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">COMPLEMENTO</label>
                    <input name="complement" value={formData.complement} onChange={handleInputChange} className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="Apto, Bloco, etc." type="text" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">BAIRRO</label>
                    <input name="neighborhood" value={formData.neighborhood} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="Centro" type="text" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">CIDADE / UF</label>
                    <input name="city" value={`${formData.city}${formData.state ? ' / ' + formData.state : ''}`} readOnly className="w-full bg-surface-container-low/50 border-0 border-b-2 border-surface-container-highest p-4 text-white/50 font-body-md transition-all cursor-not-allowed" placeholder="São Paulo / SP" type="text" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-headline-md text-white mb-6 flex items-center gap-2 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span> MÉTODO DE PAGAMENTO
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button 
                    type="button" 
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex flex-col items-center justify-center p-6 border-2 transition-all group ${paymentMethod === 'pix' ? 'border-primary-container bg-primary-container/10 text-white' : 'border-surface-container-highest bg-surface-container-low text-on-surface-variant'}`}
                  >
                    <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">qr_code_2</span>
                    <span className="font-label-caps text-[10px]">PIX IMEDIATO</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center justify-center p-6 border-2 transition-all group ${paymentMethod === 'card' ? 'border-primary-container bg-primary-container/10 text-white' : 'border-surface-container-highest bg-surface-container-low text-on-surface-variant'}`}
                  >
                    <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">credit_card</span>
                    <span className="font-label-caps text-[10px]">CARTÃO CRÉDITO</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setPaymentMethod('boleto')}
                    className={`flex flex-col items-center justify-center p-6 border-2 transition-all group ${paymentMethod === 'boleto' ? 'border-primary-container bg-primary-container/10 text-white' : 'border-surface-container-highest bg-surface-container-low text-on-surface-variant'}`}
                  >
                    <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">payments</span>
                    <span className="font-label-caps text-[10px]">BOLETO</span>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="p-8 bg-surface-container border border-primary-container/30 rounded-lg space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">NOME NO CARTÃO</label>
                      <input name="cardName" value={formData.cardName} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple uppercase" placeholder="JOÃO D. MANSÃO" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">NÚMERO DO CARTÃO</label>
                      <div className="relative">
                        <input name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="0000 0000 0000 0000" type="text" />
                        <span className="absolute right-4 bottom-4 material-symbols-outlined text-on-surface-variant">lock</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">VALIDADE</label>
                        <input name="cardExpiry" value={formData.cardExpiry} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="MM/AA" type="text" maxLength="5" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">CVV</label>
                        <input name="cardCvv" value={formData.cardCvv} onChange={handleInputChange} required className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" placeholder="123" type="password" maxLength="3" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'pix' && (
                  <div className="p-8 bg-surface-container border border-primary-container/30 rounded-lg text-center space-y-4 animate-in fade-in duration-500">
                    <span className="material-symbols-outlined text-5xl text-primary-container">bolt</span>
                    <p className="text-on-surface-variant text-sm font-space">O QR Code será gerado após a confirmação do pedido. Pagamento instantâneo com aprovação na hora!</p>
                  </div>
                )}

                {paymentMethod === 'boleto' && (
                  <div className="p-8 bg-surface-container border border-primary-container/30 rounded-lg text-center space-y-4 animate-in fade-in duration-500">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant">description</span>
                    <p className="text-on-surface-variant text-sm font-space">O boleto será gerado após a confirmação. Lembre-se: o processamento pode levar até 2 dias úteis.</p>
                  </div>
                )}
              </section>

              <button 
                type="submit" 
                disabled={cart.length === 0 || loadingCep}
                className="w-full py-6 bg-gradient-to-r from-[#BC00FF] to-[#ebb2ff] text-black font-headline-md font-bold text-xl uppercase tracking-tighter transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(188,0,255,0.6)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? "PEDIDO ENVIADO!" : "ACELERA PRO FLOW"}
                <span className="material-symbols-outlined font-bold">bolt</span>
              </button>
            </form>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 glass-panel p-8 rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
              <h3 className="font-headline-md text-white mb-8 tracking-tight">RESUMO DO PEDIDO</h3>
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-on-surface-variant text-center font-label-caps py-10">SEU CARRINHO ESTÁ VAZIO</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <img className="w-full h-full object-contain rounded border border-white/10" src={item.image} alt={item.name} />
                        <span className="absolute -top-2 -right-2 bg-primary-container text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{item.quantity}</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start">
                          <h4 className="font-headline-md text-[10px] text-white uppercase tracking-wider">{item.name}</h4>
                          <span className="font-headline-md text-sm text-primary">R$ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="laser-line my-6"></div>
              <div className="space-y-3 pt-4">
                <div className="flex justify-between text-on-surface-variant font-label-caps text-[10px]">
                  <span>SUBTOTAL</span>
                  <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-label-caps text-[10px]">
                  <span>FRETE</span>
                  <span className="text-secondary-container font-bold">GRÁTIS</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="font-headline-md text-lg text-white uppercase">TOTAL</span>
                  <span className="font-headline-xl text-3xl text-white tracking-tighter">R$ {cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
