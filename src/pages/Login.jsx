import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
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
        <div className="glass-card p-10 w-full max-w-md relative overflow-hidden group shadow-[0_0_50px_rgba(188,0,255,0.2)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
          
          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-white mb-2 uppercase italic tracking-tighter">ACESSO À <span className="text-primary-container">MANSÃO</span></h1>
            <p className="text-on-surface-variant font-label-caps text-[10px]">IDENTIFIQUE-SE PARA CONTINUAR O FLOW</p>
          </div>

          {error && <div className="bg-error-container/20 border border-error/50 text-error p-3 text-xs mb-6 text-center">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-surface-variant ml-1">E-MAIL</label>
              <input 
                required 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" 
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
                className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container p-4 text-white font-body-md transition-all neon-glow-purple" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-primary-container text-white font-headline-md font-bold uppercase tracking-widest hover:shadow-[0_0_20px_#BC00FF] active:scale-[0.98] transition-all"
            >
              ENTRAR NA MARCHA
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant text-xs">
              AINDA NÃO É DO CLUBE? <Link to="/register" className="text-primary-container hover:underline font-bold">CADASTRE-SE</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
