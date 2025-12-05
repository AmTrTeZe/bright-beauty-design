import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords = "brand engineering, conseil en marque, stratégie de marque, business empowerment, TRADEMARK, Casablanca, Maroc",
  canonicalUrl,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  structuredData
}: SEOProps) => {
  const fullTitle = `${title} | TRADEMARK™`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TRADEMARK",
    "description": "Brand Engineering & Business Empowerment Advisory",
    "url": "https://trademark.ma",
    "logo": "https://trademark.ma/logo-trademark.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Villa 25, rue 39, Lotissement Laymoune 2",
      "addressLocality": "Casablanca",
      "postalCode": "20190",
      "addressCountry": "MA"
    },
    "sameAs": []
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="TRADEMARK" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="TRADEMARK™" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
