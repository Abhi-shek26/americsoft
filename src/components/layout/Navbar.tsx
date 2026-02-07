import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/content/site";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass border-b border-white/10 shadow-lg" 
          : "bg-white/5 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 rounded-xl overflow-hidden flex items-center justify-center  transition-all duration-300 group-hover:shadow-glow-lg">
              <motion.img
                src={SITE.logoUrl}
                alt={SITE.logoAlt}
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
            </div>
            <span className="font-bold text-base sm:text-lg lg:text-xl text-foreground font-display">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = !link.external && location.pathname === link.href;
              const classes = `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`;

              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={classes}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className={classes}>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-accent/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side: Theme Toggle + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            
            <div className="hidden lg:block">
              <Button 
                asChild 
                className="bg-gradient-to-r from-cyan to-cyan-light hover:from-cyan-light hover:to-cyan text-white font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <Link to="/contact">Talk to an Architect</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden glass-card rounded-2xl mb-4"
            >
              <div className="py-4 px-2 space-y-1">
                {NAV_LINKS.map((link, index) => {
                  const isActive = !link.external && location.pathname === link.href;
                  const linkClasses = `block px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setIsOpen(false)}
                          className={linkClasses}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={linkClasses}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
                <div className="pt-4 px-2">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-cyan to-cyan-light hover:from-cyan-light hover:to-cyan text-white"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Talk to an Architect
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
