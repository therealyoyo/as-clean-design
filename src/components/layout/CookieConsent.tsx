/**
 * GDPR Cookie Consent banner.
 * Displays at the bottom of the page on first visit.
 * Stores consent in localStorage.
 */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4">
        <Cookie className="h-6 w-6 text-accent shrink-0" />
        <p className="text-sm text-foreground flex-1">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={decline}>
            Refuser
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-primary" onClick={accept}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
}
