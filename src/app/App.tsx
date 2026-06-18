import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CustomCursor } from "./components/CustomCursor";
import { SmoothScroll } from "./components/SmoothScroll";
import { motion } from "framer-motion";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <SmoothScroll />
        <CustomCursor />
        <AnimatedBackground />
        {/* Floating Glass Navigation */}
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
          <nav className={`w-full max-w-5xl rounded-full border border-border/40 transition-all duration-300 shadow-lg ${
            scrolled 
              ? "bg-background/70 backdrop-blur-xl py-1.5 px-6 border-primary/10" 
              : "bg-background/40 backdrop-blur-md py-2 px-6"
          }`}>
            <div className="flex justify-between items-center h-14">
              <div className="shrink-0 pl-2">
                <h3 className="tracking-tight font-semibold">Vishesh Verma</h3>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-baseline space-x-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors relative ${
                        activeSection === item.href.slice(1)
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-primary/10 dark:bg-accent/40 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  ))}
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile menu section */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-2 pb-4">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-2xl bg-background/90 backdrop-blur-lg border border-border/40">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground block px-4 py-2.5 rounded-xl text-base transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>

        {/* Main Content */}
        <main>
          <div id="home" className="scroll-mt-28">
            <Hero />
          </div>
          <div id="skills" className="scroll-mt-24">
            <Skills />
          </div>
          <div id="experience" className="scroll-mt-24">
            <Experience />
          </div>
          <div id="projects" className="scroll-mt-24">
            <Projects />
          </div>
          <div id="contact" className="scroll-mt-24">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-secondary/10 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4">Vishesh Verma</h3>
            <p className="text-muted-foreground mb-6">
              SDE | Full-Stack Developer | Mobile App Developer
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 Vishesh Verma. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}