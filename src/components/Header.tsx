import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "features", label: "Benefícios" },
    { id: "demo", label: "Demo" },
    { id: "planos", label: "Planos" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div 
        className={`pointer-events-auto transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'w-full max-w-lg rounded-2xl' : 'w-auto rounded-full'}
          bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg shadow-black/5`}
      >
        <div className="flex items-center justify-between px-8 py-3 md:py-4 gap-8">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group shrink-0"
          >
            <img 
              src="/logo.png" 
              alt="Sous Clinic" 
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-[#00A3FF] transition-colors font-sans"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              size="sm"
              className="rounded-full px-6 bg-gradient-to-r from-rose-200 to-amber-100 hover:from-rose-300 hover:to-amber-200 text-rose-950 font-medium border-0 shadow-sm transition-all hover:shadow-md"
            >
              <Link to="/register">Assine Agora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <nav className="flex flex-col p-6 pt-2 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/30 last:border-0"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-muted-foreground">Tema</span>
                  <ThemeToggle />
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <Button
                    asChild
                    variant="default"
                    className="w-full rounded-full bg-gradient-to-r from-rose-200 to-amber-100 text-rose-950"
                  >
                    <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                      Assine Agora
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full rounded-full"
                  >
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      Área do Assinante
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
