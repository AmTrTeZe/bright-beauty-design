import { useState, useEffect } from "react";
import { X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[hsl(200_20%_85%)] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {!showSettings ? (
          /* Main Banner */
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1">
              <h3 className="text-[hsl(200_20%_30%)] text-sm font-normal tracking-wide uppercase mb-2">
                Gestion des cookies
              </h3>
              <p className="text-[hsl(200_20%_50%)] text-xs md:text-sm leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
                Conformément à la loi 09-08 et aux recommandations de la CNDP, vous pouvez accepter, refuser ou personnaliser vos choix.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button
                onClick={refuseAll}
                variant="outline"
                className="text-xs tracking-wide border-[hsl(200_20%_75%)] text-[hsl(200_20%_50%)] hover:bg-[hsl(200_20%_95%)]"
              >
                Refuser
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                className="text-xs tracking-wide border-[hsl(200_20%_75%)] text-[hsl(200_20%_50%)] hover:bg-[hsl(200_20%_95%)]"
              >
                <Settings className="w-3 h-3 mr-1" />
                Personnaliser
              </Button>
              <Button
                onClick={acceptAll}
                className="text-xs tracking-wide bg-[hsl(200_20%_59%)] hover:bg-[hsl(200_20%_50%)] text-white"
              >
                Accepter tout
              </Button>
            </div>
          </div>
        ) : (
          /* Settings Panel */
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-[hsl(200_20%_30%)] text-sm font-normal tracking-wide uppercase">
                Personnaliser vos préférences
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
                    Cookies strictement nécessaires
                  </p>
                  <p className="text-[hsl(200_20%_60%)] text-xs mt-1">
                    Indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                </div>
                <span className="text-[hsl(200_20%_70%)] text-xs">Toujours actif</span>
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
                    Cookies analytiques
                  </p>
                  <p className="text-[hsl(200_20%_60%)] text-xs mt-1">
                    Permettent de mesurer l'audience du site via Google Analytics (IP anonymisé). Durée : 13 mois maximum.
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
                    Cookies fonctionnels et de performance
                  </p>
                  <p className="text-[hsl(200_20%_60%)] text-xs mt-1">
                    Améliorent l'expérience utilisateur et les performances du site.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                onClick={refuseAll}
                variant="outline"
                className="text-xs tracking-wide border-[hsl(200_20%_75%)] text-[hsl(200_20%_50%)] hover:bg-[hsl(200_20%_95%)]"
              >
                Tout refuser
              </Button>
              <Button
                onClick={saveCustom}
                className="text-xs tracking-wide bg-[hsl(200_20%_59%)] hover:bg-[hsl(200_20%_50%)] text-white"
              >
                Enregistrer mes choix
              </Button>
            </div>

            <p className="text-[hsl(200_20%_70%)] text-[10px] text-center">
              Pour plus d'informations, consultez notre{" "}
              <a href="/mentions-legales" className="underline hover:text-[hsl(200_20%_50%)]">
                Politique de confidentialité
              </a>
              . Vous pouvez modifier vos choix à tout moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
