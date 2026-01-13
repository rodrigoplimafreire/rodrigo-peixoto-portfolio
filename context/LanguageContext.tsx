import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define os tipos de idioma permitidos
type Language = 'en' | 'pt';

// Define o formato do contexto
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en'); // Padrão Inglês

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para usar o idioma em qualquer lugar
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
};