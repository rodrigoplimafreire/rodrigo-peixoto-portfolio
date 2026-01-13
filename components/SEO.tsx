import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Senior Product Designer & Design Engineer specialized in Design Systems and React.",
    image = "/og-image.png" // Certifique-se de ter esta imagem na pasta public
}) => {
    const siteTitle = "Rodrigo Peixoto";
    const fullTitle = `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Padrão */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;