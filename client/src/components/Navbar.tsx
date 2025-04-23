import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-xl md:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            FD Developments
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition">Startseite</a>
          <a href="#services" className="font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition">Leistungen</a>
          <a href="#ai" className="font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition">KI-Entwicklung</a>
          <a href="#about" className="font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition">Über uns</a>
          <a href="#contact" className="font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition">Kontakt</a>
          <a 
            href="https://discord.gg/qEy8xf6CyV" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center bg-[#5865F2] text-white px-4 py-2 rounded-lg font-medium transition hover:bg-opacity-90"
          >
            <i className="fab fa-discord mr-2"></i> Discord
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md dark:text-dark-text text-light-text hover:bg-gray-200 dark:hover:bg-dark-card"
          aria-label="Menü öffnen"
          aria-expanded={mobileMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white dark:bg-gray-900 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col px-4 pt-2 pb-3 space-y-3">
          <a 
            href="#home" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Startseite
          </a>
          <a 
            href="#services" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Leistungen
          </a>
          <a 
            href="#ai" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            KI-Entwicklung
          </a>
          <a 
            href="#about" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Über uns
          </a>
          <a 
            href="#contact" 
            className="px-3 py-2 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-200 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakt
          </a>
          <a 
            href="https://discord.gg/qEy8xf6CyV" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center bg-[#5865F2] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition"
          >
            <i className="fab fa-discord mr-2"></i> Discord
          </a>
        </div>
      </div>
    </header>
  );
}
