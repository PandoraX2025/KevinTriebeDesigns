import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-lg md:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              FD Developments
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex mr-8">
              <div className="flex flex-col">
                {/* Top Row - Main Navigation */}
                <div className="flex space-x-1 justify-end mb-1">
                  <Link href="/" className="px-3 py-1 font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition text-sm">Startseite</Link>
                  <a href="#services" className="px-3 py-1 font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition text-sm">Leistungen</a>
                  <a href="#ai" className="px-3 py-1 font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition text-sm">KI-Entwicklung</a>
                  <a href="#portfolio" className="px-3 py-1 font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition text-sm">Portfolio</a>
                  <a href="#about" className="px-3 py-1 font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition text-sm">Über uns</a>
                </div>
                
                {/* Bottom Row - Special Links */}
                <div className="flex space-x-1 justify-end">
                  <a href="#contact" className="px-3 py-1 font-medium text-blue-600 dark:text-blue-400 hover:text-primary dark:hover:text-primary transition text-sm">Kontakt</a>
                  <a href="#teamspeak" className="px-3 py-1 font-medium text-blue-600 dark:text-blue-400 hover:text-primary dark:hover:text-primary transition text-sm flex items-center">
                    <i className="fas fa-headset mr-1 text-xs"></i>
                    TeamSpeak
                  </a>
                  <a 
                    href="https://discord.gg/qEy8xf6CyV" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-3 py-1 font-medium text-[#5865F2] hover:text-primary transition text-sm flex items-center"
                  >
                    <i className="fab fa-discord mr-1 text-xs"></i> Discord
                  </a>
                </div>
              </div>
            </nav>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md dark:text-gray-200 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Menü öffnen"
              aria-expanded={mobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white dark:bg-gray-900 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col px-4 pt-2 pb-3 space-y-1.5">
          <Link 
            href="/" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-home mr-2 text-primary"></i> Startseite
          </Link>
          <a 
            href="#services" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-cogs mr-2 text-primary"></i> Leistungen
          </a>
          <a 
            href="#ai" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-robot mr-2 text-primary"></i> KI-Entwicklung
          </a>
          <a 
            href="#portfolio" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-briefcase mr-2 text-primary"></i> Portfolio
          </a>
          <a 
            href="#about" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-users mr-2 text-primary"></i> Über uns
          </a>
          <a 
            href="#contact" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-envelope mr-2 text-primary"></i> Kontakt
          </a>
          <a 
            href="#teamspeak" 
            className="px-3 py-2 rounded-md font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-headset mr-2"></i> TeamSpeak
          </a>
          <a 
            href="https://discord.gg/qEy8xf6CyV" 
            target="_blank" 
            rel="noreferrer" 
            className="px-3 py-2 rounded-md font-medium text-[#5865F2] hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fab fa-discord mr-2"></i> Discord
          </a>
        </div>
      </div>
    </header>
  );
}
