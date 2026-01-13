import React from 'react';
import Header from './Header';
import Footer from './home/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white selection:bg-[#5271FF] selection:text-white">

      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="w-full flex-col flex relative z-10">
        {children}
      </main>

      {/* Footer Global (Agora usando o Componente) */}
      <Footer />

    </div>
  );
};

export default MainLayout;