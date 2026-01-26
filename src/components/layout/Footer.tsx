import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { SITE, NAV_LINKS } from "@/content/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
      
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center gap-3 group mb-6">
                <motion.img
                  src={SITE.logoUrl}
                  alt={SITE.logoAlt}
                  className="w-16 h-16 rounded-xl object-contain bg-white shadow-neon group-hover:shadow-glow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                />
                <span className="font-bold text-2xl text-primary-foreground font-display">
                  {SITE.name}
                </span>
              </Link>
              <p className="text-primary-foreground/60 mb-6 max-w-md leading-relaxed">
                U.S.-based technology firm delivering AI-driven, agentic platforms and federal IT modernization services since {SITE.foundedYear}.
              </p>
              
              {/* Stats badges */}
              <div className="flex flex-wrap gap-3">
                <div className="glass-dark px-4 py-2 rounded-full text-sm">
                  <span className="text-cyan font-semibold">Founded {SITE.foundedYear}</span>
                </div>
                <div className="glass-dark px-4 py-2 rounded-full text-sm">
                  <span className="text-primary-foreground/70">Federal & Regulated Focus</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-primary-foreground mb-6 font-display">Navigation</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-primary-foreground/60 hover:text-cyan transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4">
              <h4 className="font-semibold text-primary-foreground mb-6 font-display">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center gap-4 text-primary-foreground/60 hover:text-cyan transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan/30 group-hover:bg-cyan/10 transition-all duration-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="group flex items-center gap-4 text-primary-foreground/60 hover:text-cyan transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan/30 group-hover:bg-cyan/10 transition-all duration-300">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>{SITE.phone}</span>
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/10 transition-all duration-300"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/10 transition-all duration-300"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/40">
              © {currentYear} {SITE.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/40 hover:text-cyan transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-primary-foreground/40 hover:text-cyan transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
