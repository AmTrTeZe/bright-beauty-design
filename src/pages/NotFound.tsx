import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Page non trouvée - 404"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de TRADEMARK™."
        keywords="404, page non trouvée, erreur, TRADEMARK"
      />
      
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-8">
          <h1 className="text-6xl md:text-8xl font-light text-[hsl(200_20%_59%)] mb-4">404</h1>
          <p className="text-[hsl(200_15%_45%)] text-sm md:text-base tracking-wider uppercase mb-8">
            Page non trouvée
          </p>
          <Link 
            to="/" 
            state={{ skipSplash: true }}
            className="inline-block bg-[hsl(200_20%_59%)] hover:bg-[hsl(200_20%_50%)] text-white px-8 py-3 text-sm tracking-widest uppercase font-light transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
