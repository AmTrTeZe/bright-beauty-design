import { useState, useEffect } from "react";
import { X, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const { language } = useLanguage();

  const isEnglish = language === "en";

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, functional: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const refuseAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, functional: false };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  // Translations
  const t = {
    title: isEnglish ? "Cookie Management" : "Gestion des cookies",
    description: isEnglish 
      ? "This site uses cookies to improve your experience, analyze traffic and personalize content. In accordance with Law 09-08 and CNDP recommendations, you can accept, refuse or customize your choices."
      : "Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Conformément à la loi 09-08 et aux recommandations de la CNDP, vous pouvez accepter, refuser ou personnaliser vos choix.",
    refuse: isEnglish ? "Refuse" : "Refuser",
    customize: isEnglish ? "Customize" : "Personnaliser",
    acceptAll: isEnglish ? "Accept all" : "Accepter tout",
    customizeTitle: isEnglish ? "Customize your preferences" : "Personnaliser vos préférences",
    necessaryCookies: isEnglish ? "Strictly necessary cookies" : "Cookies strictement nécessaires",
    necessaryDesc: isEnglish 
      ? "Essential for the website to function. They cannot be disabled."
      : "Indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
    alwaysActive: isEnglish ? "Always active" : "Toujours actif",
    analyticsCookies: isEnglish ? "Analytics cookies" : "Cookies analytiques",
    analyticsDesc: isEnglish 
      ? "Allow measuring website audience via Google Analytics (anonymized IP). Duration: 13 months maximum."
      : "Permettent de mesurer l'audience du site via Google Analytics (IP anonymisé). Durée : 13 mois maximum.",
    functionalCookies: isEnglish ? "Functional and performance cookies" : "Cookies fonctionnels et de performance",
    functionalDesc: isEnglish 
      ? "Improve user experience and website performance."
      : "Améliorent l'expérience utilisateur et les performances du site.",
    refuseAll: isEnglish ? "Refuse all" : "Tout refuser",
    saveChoices: isEnglish ? "Save my choices" : "Enregistrer mes choix",
    moreInfo: isEnglish 
      ? "For more information, see our"
      : "Pour plus d'informations, consultez notre",
    privacyPolicy: isEnglish ? "Privacy Policy" : "Politique de confidentialité",
    modifyAnytime: isEnglish 
      ? "You can change your choices at any time."
      : "Vous pouvez modifier vos choix à tout moment.",
  };

  const privacyLink = isEnglish ? "/en/legal-notice" : "/mentions-legales";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[hsl(200_20%_85%)] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {!showSettings ? (
          /* Main Banner */
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1">
              <h3 className="text-[hsl(200_20%_30%)] text-sm font-normal tracking-wide uppercase mb-2">
                {t.title}
              </h3>
              <p className="text-[hsl(200_20%_50%)] text-xs md:text-sm leading-relaxed">
                {t.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={refuseAll}
                className="px-4 py-2 text-xs tracking-wide border border-[hsl(200_20%_75%)] text-[hsl(200_20%_40%)] bg-white hover:bg-[hsl(200_20%_95%)] rounded-md transition-colors"
              >
                {t.refuse}
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-xs tracking-wide border border-[hsl(200_20%_75%)] text-[hsl(200_20%_40%)] bg-white hover:bg-[hsl(200_20%_95%)] rounded-md transition-colors flex items-center gap-1"
              >
                <Settings className="w-3 h-3" />
                {t.customize}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs tracking-wide bg-[hsl(200_20%_59%)] hover:bg-[hsl(200_20%_50%)] text-white rounded-md transition-colors"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          /* Settings Panel */
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-[hsl(200_20%_30%)] text-sm font-normal tracking-wide uppercase">
                {t.customizeTitle}
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-[hsl(200_20%_50%)] hover:text-[hsl(200_20%_30%)] transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={1} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4 pb-4 border-b border-[hsl(200_20%_90%)]">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mt-1 accent-[hsl(200_20%_59%)]"
                />
                <div className="flex-1">
                  <p className="text-[hsl(200_20%_35%)] text-sm font-normal">
                    {t.necessaryCookies}
                  </p>
                  <p className="text-[hsl(200_20%_60%)] text-xs mt-1">
                    {t.necessaryDesc}
                  </p>
                </div>
                <span className="text-[hsl(200_20%_70%)] text-xs">{t.alwaysActive}</span>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 pb-4 border-b border-[hsl(200_20%_90%)]">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 accent-[hsl(200_20%_59%)] cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-[hsl(200_20%_35%)] text-sm font-normal">
                    {t.analyticsCookies}
                  </p>
                  <p className="text-[hsl(200_20%_60%)] text-xs mt-1">
                    {t.analyticsDesc}
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                  className="mt-1 accent-[hsl(200_20%_59%)] cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-[hsl(200_20%_35%)] text-sm font-normal">
                    {t.functionalCookies}
                  </p>
                  <p className="text-[hsl(200_20%_60%)] text-xs mt-1">
                    {t.functionalDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={refuseAll}
                className="px-4 py-2 text-xs tracking-wide border border-[hsl(200_20%_75%)] text-[hsl(200_20%_40%)] bg-white hover:bg-[hsl(200_20%_95%)] rounded-md transition-colors"
              >
                {t.refuseAll}
              </button>
              <button
                onClick={saveCustom}
                className="px-4 py-2 text-xs tracking-wide bg-[hsl(200_20%_59%)] hover:bg-[hsl(200_20%_50%)] text-white rounded-md transition-colors"
              >
                {t.saveChoices}
              </button>
            </div>

            <p className="text-[hsl(200_20%_70%)] text-[10px] text-center">
              {t.moreInfo}{" "}
              <a href={privacyLink} className="underline hover:text-[hsl(200_20%_50%)]">
                {t.privacyPolicy}
              </a>
              . {t.modifyAnytime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;