/**
 * Header component with sticky navigation, mega menu (desktop), and hamburger menu (mobile).
 * Logo left, navigation center, CTA button right.
 */
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services", hasMega: true },
  
  { label: "À propos", path: "/a-propos" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  // Close mega menu on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary shrink-0">
          <img src="/logo.png" alt="A.S. Cleaning Services" className="h-10 w-auto" />
          A.S. Cleaning Services
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
          {navItems.map((item) =>
            item.hasMega ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setMegaOpen(!megaOpen)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${
                    location.pathname.startsWith("/services") ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mega Menu Dropdown */}
                {megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-lg p-6 grid grid-cols-3 gap-6">
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug}>
                        <Link
                          to={`/services`}
                          className="font-semibold text-primary text-sm mb-2 block hover:text-accent transition-colors"
                        >
                          {cat.title}
                        </Link>
                        <ul className="space-y-1">
                          {cat.services.map((svc) => (
                            <li key={svc.slug}>
                              <Link
                                to={`/services/${cat.slug}/${svc.slug}`}
                                className="text-sm text-muted-foreground hover:text-accent transition-colors block py-0.5"
                              >
                                {svc.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${
                  location.pathname === item.path ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:block">
            <Button className="bg-accent text-accent-foreground hover:bg-primary rounded-full px-6">
              Demande de devis
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.hasMega ? (
                <Accordion key={item.label} type="single" collapsible>
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="single" collapsible>
                        {serviceCategories.map((cat) => (
                          <AccordionItem key={cat.slug} value={cat.slug} className="border-none">
                            <AccordionTrigger className="py-2 pl-4 text-sm hover:no-underline">
                              {cat.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-1 pl-8">
                                {cat.services.map((svc) => (
                                  <li key={svc.slug}>
                                    <Link
                                      to={`/services/${cat.slug}/${svc.slug}`}
                                      className="block py-1.5 text-sm text-muted-foreground hover:text-accent"
                                    >
                                      {svc.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                      <Link
                        to="/services"
                        className="block py-2 pl-4 text-sm font-medium text-accent"
                      >
                        Voir tous les services →
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block py-3 text-sm font-medium text-foreground hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              <Link to="/contact">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-primary rounded-full">
                  Demande de devis
                </Button>
              </Link>
              <a href="tel:+32460976545" className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" /> +32 460 97 65 45
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
