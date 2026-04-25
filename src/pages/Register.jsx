import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className="bg-black text-on-surface font-space min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="glass-card p-10 w-full max-w-md relative overflow-hidden group shadow-[0_0_50px_rgba(0,238,252,0.2)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent"></div>
          
          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-white mb-2 uppercase italic tracking-tighter">NOVO <span className="text-secondary-container">FLOW</span></h1>
            <p className="text-on-surface-variant font-label-caps text-[10px]">REALIZE SEU CADASTRO NA MANSÃO</p>
          </div>

          {error && <div className="bg-error-container/20 border border-error/50 text-error p-3 text-xs mb-6 text-center">{error}</div>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">NOME COMPLETO</label>
              <input 
                required 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary-container p-4 text-white font-body-md transition-all neon-glow-cyan" 
                placeholder="Seu Nome"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">E-MAIL</label>
              <input 
                required 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary-container p-4 text-white font-body-md transition-all neon-glow-cyan" 
                placeholder="usuario@mansao.com"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">SENHA</label>
              <input 
                required 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary-container p-4 text-white font-body-md transition-all neon-glow-cyan" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-secondary-container text-black font-headline-md font-bold uppercase tracking-widest hover:shadow-[0_0_20px_#00eefc] active:scale-[0.98] transition-all mt-4"
            >
              CRIAR MEU ACESSO
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant text-xs">
              JÁ FAZ PARTE DA MARCHA? <Link to="/login" className="text-secondary-container hover:underline font-bold">FAÇA LOGIN</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
