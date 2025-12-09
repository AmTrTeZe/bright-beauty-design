import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  switchLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang?.startsWith("en")) return "en";
  return "fr"; // Default to French
};

// Get language from URL path
const getLanguageFromPath = (pathname: string): Language | null => {
  if (pathname.startsWith("/en")) return "en";
  return null; // No language prefix means French
};

// Detect language from country using ipapi.co (free, no registration required)
const detectCountryLanguage = async (): Promise<Language | null> => {
  try {
    const response = await fetch("https://ipapi.co/json/", { 
      signal: AbortSignal.timeout(3000) // 3 second timeout
    });
    if (!response.ok) return null;
    
    const data = await response.json();
    const countryCode = data.country_code;
    
    // English-speaking countries
    const englishCountries = ["US", "GB", "CA", "AU", "NZ", "IE", "ZA", "NG", "GH", "KE"];
    if (englishCountries.includes(countryCode)) return "en";
    
    // French-speaking countries (default to French for Morocco, Ivory Coast, etc.)
    return "fr";
  } catch {
    return null; // Fallback if API fails
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine initial language from URL or localStorage
  const getInitialLanguage = (): Language => {
    const urlLang = getLanguageFromPath(location.pathname);
    if (urlLang) return urlLang;
    
    // Check localStorage for saved preference
    const savedLang = localStorage.getItem("trademark-language") as Language;
    if (savedLang === "en" || savedLang === "fr") return savedLang;
    
    // Fallback to browser language (IP detection will update if different)
    return detectBrowserLanguage() === "en" ? "en" : "fr";
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // IP-based country detection on first load (only if no saved preference)
  useEffect(() => {
    const savedLang = localStorage.getItem("trademark-language");
    const urlLang = getLanguageFromPath(location.pathname);
    
    // Only detect by IP if no saved preference and no URL language
    if (!savedLang && !urlLang) {
      detectCountryLanguage().then((detectedLang) => {
        if (detectedLang && detectedLang !== language) {
          setLanguageState(detectedLang);
          localStorage.setItem("trademark-language", detectedLang);
          // Navigate to English version if detected
          if (detectedLang === "en" && location.pathname === "/") {
            navigate("/en", { replace: true });
          }
        }
      });
    }
  }, []); // Only run on mount

  // Sync language with URL on navigation
  useEffect(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    if (urlLang === "en" && language !== "en") {
      setLanguageState("en");
    } else if (!urlLang && language !== "fr" && !location.pathname.startsWith("/en")) {
      setLanguageState("fr");
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("trademark-language", lang);
  };

  const switchLanguage = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
    
    // Navigate to the equivalent page in the other language
    const currentPath = location.pathname;
    let newPath: string;
    
    if (newLang === "en") {
      // Going from French to English
      if (currentPath === "/") {
        newPath = "/en";
      } else {
        newPath = "/en" + currentPath;
      }
    } else {
      // Going from English to French
      if (currentPath === "/en" || currentPath === "/en/") {
        newPath = "/";
      } else {
        newPath = currentPath.replace(/^\/en/, "");
      }
    }
    
    navigate(newPath, { state: location.state });
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to French if key not found
        value = translations.fr;
        for (const fk of keys) {
          if (value && typeof value === "object" && fk in value) {
            value = value[fk];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translations
const translations: Record<Language, any> = {
  fr: {
    nav: {
      mentionsLegales: "MENTIONS LÉGALES",
      contact: "CONTACT",
      copyright: "©TRADEMARK™",
    },
    menu: {
      why: { word: "WHY", secondWord: "PURPOSE" },
      what: { word: "WHAT", secondWord: "PRACTICES" },
      how: { word: "HOW", secondWord: "PROCESS" },
      who: { word: "WHO", secondWord: "EXPERTISE" },
      with: { word: "WITH", secondWord: "EXPERIENCE" },
      where: { word: "WHERE", secondWord: "INFORMATION" },
    },
    brand: {
      line1: "BRAND",
      line2: "POWERS",
      line3: "BUSINESS",
    },
    seo: {
      home: {
        title: "Accueil - Brand Powers Business",
        description: "TRADEMARK™ - Cabinet conseil en ingénierie de marque. Brand Engineering & Business Empowerment. La marque comme vecteur de sens et levier de performance à Casablanca, Maroc.",
      },
      why: {
        title: "Why - Purpose",
        description: "Découvrez pourquoi la marque est un capital stratégique de long terme et un actif opérationnel de court terme. TRADEMARK™ - Brand Engineering & Business Empowerment.",
      },
      what: {
        title: "What - Practices",
        description: "Découvrez les pratiques et services de TRADEMARK™ en brand engineering: Brand Fortification, Market Activation et Business Acceleration.",
      },
      how: {
        title: "How - Process",
        description: "Découvrez le processus et l'écosystème TRADEMARK™. Une approche holistique par l'hybridation d'expertises multi-métiers pour une valeur ajoutée optimale.",
      },
      who: {
        title: "Who - Expertise",
        description: "Nawfel Bensari, Chairman & Senior Advisor - 30 ans d'expérience en consulting communication. Ex-Président Publicis Maroc, expert en brand engineering.",
      },
      with: {
        title: "With - Experience",
        description: "Découvrez les marques prestigieuses accompagnées par TRADEMARK™: Coca-Cola, L'Oréal, Air France, BMCI, Renault et plus de 100 références dans 13 secteurs d'activité.",
      },
      where: {
        title: "Where - Information & Contact",
        description: "Contactez TRADEMARK™ - Cabinet conseil en brand engineering. Bureaux à Casablanca (Maroc) et Abidjan (Côte d'Ivoire). Demandez un rendez-vous.",
      },
      mentionsLegales: {
        title: "Mentions Légales",
        description: "Mentions légales et politique de confidentialité de TRADEMARK™ SARL. Informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la protection des données personnelles.",
      },
    },
    why: {
      quote: "La marque n'est pas qu'un signe de reconnaissance, c'est un vecteur de sens et un levier de performance.",
      context: "Dans un monde en constante transformation par une digitalisation accélérée et des ruptures technologiques répétées, les modèles économiques sont challengés et les modes opératoires reconsidérés, les médias sont saturés et les points de contacts fragmentés, les consommateurs sont sur-sollicités par des messages instantanés et des contenus rapidement renouvelés, la marque devient alors, dans cette instabilité, plus que jamais un pilier, un bouclier, un levier.",
      sectionTitle: "Brand Engineering & Business Empowerment",
      sectionText: "TRADEMARK™ constitue le maillon manquant entre les cabinets conseil en stratégie, trop généralistes et les agences de communication, trop opérationnelles. Un concentré d'expertises focalisées sur les champs Brand & Business, avec pour ambition de transformer la marque en un véritable actif immatériel, générateur de soft power pour l'image, créateur de hard power pour le business.",
      blockquote: "« Before you have a share of market, you must have a share of mind »",
      practices: "Brand Fortification / Market Activation / Business Acceleration",
      tagline: "TRADEMARK™ | BRAND AS ASSET",
    },
    how: {
      quote: "Plus qu'une organisation en circuit fermé, un écosystème décloisonné.",
      context: "Par la complexité grandissante des problématiques clients et des spécificités sectorielles et par la distinction croissante des disciplines et la spécialisation des acteurs, il est désormais communément admis qu'aucun cabinet conseil ou agence de communication ne peut disposer en interne du large spectre des compétences et des expertises exigées pour couvrir l'ensemble de la chaine de valeur. Ce qui serait à l'évidence utopique, tant d'un point de vue organisationnel que de coûts de structure. Alors quelle organisation pourrait associer la valeur ajoutée réclamée à la viabilité économique exigée ?",
      sectionTitle: "INTÉGRATION DES MÉTIERS & HYBRIDATION DES COMPÉTENCES",
      intro: "Plutôt qu'une organisation limitée à ses ressources internes, le cabinet TRADEMARK™ est structuré en écosystème ouvert, caractérisé par :",
      point1: "Une équipe senior de consulting, «TRADEMARK™ TALENT TEAM», configurée sur mesure selon le périmètre de chaque mission,",
      point2: "Une approche holistique, par l'hybridation d'expertises multi-métiers qui permet de gérer l'ensemble des composantes de la problématique posée, de manière coordonnée et intégrée,",
      point3: "Un Top Management impliqué de bout en bout de la mission, pour garantir la fluidité comme la valeur ajoutée,",
      point4: "Une direction des opérations implantée à Casablanca, avec la possibilité d'intervenir depuis Paris, Abidjan ou encore Dubai, pour une imprégnation locale et une interface client facilitées ;",
      conclusion: "Soient autant de gages de pertinence, d'excellence et de confiance, d'agilité, de compétitivité et de rentabilité.",
      blockquote: "« Faire que le résultat soit supérieur à la somme des parties »",
      values: "BRAND, MARKETING & COMMUNICATION CENTRED / DIGITAL MINDED & TECH ORIENTED / BUSINESS FOCUSED & VALUE OBSESSED / HYBRID & AGILE / HOLISTIC & INTEGRATED / INNOVATIVE & COMPETITIVE / CLIENT CENTRIC & TAILOR MADE.",
      tagline: "TRADEMARK™ | AS OPEN ADDED VALUE",
    },
    who: {
      quote: "30 ANS D'EXPÉRIENCE DE CONSULTING EN AGENCES DE COMMUNICATION & CABINETS CONSEIL",
      name: "NAWFEL BENSARI",
      title: "CHAIRMAN & SENIOR ADVISOR",
      exp1_title: "10 ans à Paris au siège de leaders mondiaux du conseil en communication",
      exp1_detail: "Groupes HAVAS & PUBLICIS",
      exp2_title: "10 ans de Présidence de PUBLICIS MAROC",
      exp2_detail: "Filiale du Groupe Publicis au Maroc & Hub régional Afrique francophone",
      exp3_title: "10 ans d'entrepreneuriat : TRADEMARK™",
      exp3_detail1: "Cabinet Conseil en Brand Engineering & Business Empowerment.",
      exp3_detail2: "Founder, Chairman & Senior Advisor",
      exp4_title: "5 ans en tant que Vice-Président de l'UACC",
      exp4_detail: "Union des Agences Conseil en Communication (2 mandats)",
      exp5_title: "Speaker & Jury Palmarès",
      exp5_detail: "Les Impériales - Casablanca Conference, African Cristal Festival, World Tourism Day - International Day of Happiness",
      exp6_title: "Prix & Distinctions",
      exp6_detail1: "Grand Prix de la Publicité / Air France, ONMT",
      exp6_detail2: "Festival de New York / Club Med",
      exp6_detail3: "African Cristal Festival / Thé Fandy",
      exp6_detail4: "Top Com Award / BMCI Groupe BNP Paribas",
      conclusion: "PILOTANT UNE ÉQUIPE DE CONSULTANTS MULTIMÉTIERS EXPÉRIMENTÉS, COMPOSÉE SUR MESURE, SELON LES SPÉCIFICITÉS DE CHAQUE MISSION, À PARTIR D'UN ÉCOSYSTÈME ÉPROUVÉ.",
    },
    where: {
      form: {
        nom: "NOM",
        prenom: "PRÉNOM",
        email: "EMAIL",
        message: "MESSAGE",
        submit: "ENVOYER",
        submitting: "ENVOI...",
        nomRequired: "Le nom est requis",
        prenomRequired: "Le prénom est requis",
        emailInvalid: "Email invalide",
        messageRequired: "Le message est requis",
        successTitle: "Message envoyé",
        successDesc: "Nous vous répondrons dans les plus brefs délais.",
        errorTitle: "Erreur",
        errorDesc: "Une erreur est survenue. Veuillez réessayer.",
      },
      maroc: "Maroc / Siège",
      coteDivoire: "Côte d'Ivoire",
      download: "TRADEMARK™ EN BREF",
    },
    mentionsLegales: {
      title: "Mentions Légales",
      subtitle: "Mentions Légales & Politique de Confidentialité",
      closeLabel: "Fermer et retourner à l'accueil",
      lastUpdate: "Date de dernière mise à jour : décembre 2025",
    },
  },
  en: {
    nav: {
      mentionsLegales: "LEGAL NOTICE",
      contact: "CONTACT",
      copyright: "©TRADEMARK™",
    },
    menu: {
      why: { word: "WHY", secondWord: "PURPOSE" },
      what: { word: "WHAT", secondWord: "PRACTICES" },
      how: { word: "HOW", secondWord: "PROCESS" },
      who: { word: "WHO", secondWord: "EXPERTISE" },
      with: { word: "WITH", secondWord: "EXPERIENCE" },
      where: { word: "WHERE", secondWord: "INFORMATION" },
    },
    brand: {
      line1: "BRAND",
      line2: "POWERS",
      line3: "BUSINESS",
    },
    seo: {
      home: {
        title: "Home - Brand Powers Business",
        description: "TRADEMARK™ - Brand engineering consulting firm. Brand Engineering & Business Empowerment. The brand as a driver of meaning and performance lever in Casablanca, Morocco.",
      },
      why: {
        title: "Why - Purpose",
        description: "Discover why the brand is a long-term strategic capital and a short-term operational asset. TRADEMARK™ - Brand Engineering & Business Empowerment.",
      },
      what: {
        title: "What - Practices",
        description: "Discover TRADEMARK™'s brand engineering practices and services: Brand Fortification, Market Activation and Business Acceleration.",
      },
      how: {
        title: "How - Process",
        description: "Discover the TRADEMARK™ process and ecosystem. A holistic approach through the hybridization of multi-disciplinary expertise for optimal added value.",
      },
      who: {
        title: "Who - Expertise",
        description: "Nawfel Bensari, Chairman & Senior Advisor - 30 years of experience in communication consulting. Former President of Publicis Maroc, brand engineering expert.",
      },
      with: {
        title: "With - Experience",
        description: "Discover the prestigious brands supported by TRADEMARK™: Coca-Cola, L'Oréal, Air France, BMCI, Renault and more than 100 references in 13 business sectors.",
      },
      where: {
        title: "Where - Information & Contact",
        description: "Contact TRADEMARK™ - Brand engineering consulting firm. Offices in Casablanca (Morocco) and Abidjan (Ivory Coast). Request an appointment.",
      },
      mentionsLegales: {
        title: "Legal Notice",
        description: "Legal notice and privacy policy of TRADEMARK™ SARL. Information about the publisher, hosting, intellectual property and personal data protection.",
      },
    },
    why: {
      quote: "A brand is not just a sign of recognition, it is a vector of meaning and a lever for performance.",
      context: "In a world constantly transformed by accelerated digitalization and repeated technological disruptions, business models are challenged and operating methods reconsidered, media are saturated and contact points fragmented, consumers are over-solicited by instant messages and rapidly renewed content, the brand then becomes, in this instability, more than ever a pillar, a shield, a lever.",
      sectionTitle: "Brand Engineering & Business Empowerment",
      sectionText: "TRADEMARK™ constitutes the missing link between strategy consulting firms, too generalist, and communication agencies, too operational. A concentrate of expertise focused on Brand & Business fields, with the ambition of transforming the brand into a true intangible asset, generating soft power for the image, creating hard power for the business.",
      blockquote: "« Before you have a share of market, you must have a share of mind »",
      practices: "Brand Fortification / Market Activation / Business Acceleration",
      tagline: "TRADEMARK™ | BRAND AS ASSET",
    },
    how: {
      quote: "More than a closed-circuit organization, an open ecosystem.",
      context: "Due to the growing complexity of client issues and sector specificities, and the increasing distinction of disciplines and specialization of players, it is now commonly accepted that no consulting firm or communication agency can have internally the broad spectrum of skills and expertise required to cover the entire value chain. This would obviously be utopian, both from an organizational and structural cost perspective. So what organization could combine the added value demanded with the economic viability required?",
      sectionTitle: "INTEGRATION OF PROFESSIONS & HYBRIDIZATION OF SKILLS",
      intro: "Rather than an organization limited to its internal resources, TRADEMARK™ is structured as an open ecosystem, characterized by:",
      point1: "A senior consulting team, «TRADEMARK™ TALENT TEAM», tailor-made according to the scope of each mission,",
      point2: "A holistic approach, through the hybridization of multi-disciplinary expertise that allows managing all components of the problem posed, in a coordinated and integrated manner,",
      point3: "Top Management involved from start to finish of the mission, to guarantee fluidity as well as added value,",
      point4: "An operations management based in Casablanca, with the possibility of intervening from Paris, Abidjan or Dubai, for local immersion and facilitated client interface;",
      conclusion: "All guarantees of relevance, excellence and trust, agility, competitiveness and profitability.",
      blockquote: "« Making the result greater than the sum of its parts »",
      values: "BRAND, MARKETING & COMMUNICATION CENTRED / DIGITAL MINDED & TECH ORIENTED / BUSINESS FOCUSED & VALUE OBSESSED / HYBRID & AGILE / HOLISTIC & INTEGRATED / INNOVATIVE & COMPETITIVE / CLIENT CENTRIC & TAILOR MADE.",
      tagline: "TRADEMARK™ | AS OPEN ADDED VALUE",
    },
    who: {
      quote: "30 YEARS OF CONSULTING EXPERIENCE IN COMMUNICATION AGENCIES & CONSULTING FIRMS",
      name: "NAWFEL BENSARI",
      title: "CHAIRMAN & SENIOR ADVISOR",
      exp1_title: "10 years in Paris at the headquarters of global communication consulting leaders",
      exp1_detail: "HAVAS & PUBLICIS Groups",
      exp2_title: "10 years as President of PUBLICIS MAROC",
      exp2_detail: "Publicis Group subsidiary in Morocco & French-speaking Africa regional hub",
      exp3_title: "10 years of entrepreneurship: TRADEMARK™",
      exp3_detail1: "Brand Engineering & Business Empowerment Consulting Firm.",
      exp3_detail2: "Founder, Chairman & Senior Advisor",
      exp4_title: "5 years as Vice-President of UACC",
      exp4_detail: "Union of Communication Consulting Agencies (2 terms)",
      exp5_title: "Speaker & Awards Jury",
      exp5_detail: "Les Impériales - Casablanca Conference, African Cristal Festival, World Tourism Day - International Day of Happiness",
      exp6_title: "Awards & Distinctions",
      exp6_detail1: "Grand Prix de la Publicité / Air France, ONMT",
      exp6_detail2: "New York Festival / Club Med",
      exp6_detail3: "African Cristal Festival / Thé Fandy",
      exp6_detail4: "Top Com Award / BMCI Groupe BNP Paribas",
      conclusion: "LEADING A TEAM OF EXPERIENCED MULTI-DISCIPLINARY CONSULTANTS, TAILOR-MADE ACCORDING TO THE SPECIFICITIES OF EACH MISSION, FROM A PROVEN ECOSYSTEM.",
    },
    where: {
      form: {
        nom: "LAST NAME",
        prenom: "FIRST NAME",
        email: "EMAIL",
        message: "MESSAGE",
        submit: "SEND",
        submitting: "SENDING...",
        nomRequired: "Last name is required",
        prenomRequired: "First name is required",
        emailInvalid: "Invalid email",
        messageRequired: "Message is required",
        successTitle: "Message sent",
        successDesc: "We will respond as soon as possible.",
        errorTitle: "Error",
        errorDesc: "An error occurred. Please try again.",
      },
      maroc: "Morocco / Headquarters",
      coteDivoire: "Ivory Coast",
      download: "TRADEMARK™ AT A GLANCE",
    },
    mentionsLegales: {
      title: "Legal Notice",
      subtitle: "Legal Notice & Privacy Policy",
      closeLabel: "Close and return to home",
      lastUpdate: "Last updated: December 2025",
    },
  },
};

export { translations };
