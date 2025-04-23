interface FooterProps {
  year: number;
}

export default function Footer({ year }: FooterProps) {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">FD Developments</h3>
            <p className="text-gray-300 mb-4">
              Web-Entwicklung, Scripting und Design-Lösungen für Ihre digitalen Projekte.
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-discord text-xl"></i>
              </a>
              <a href="mailto:kevintriebe2025@gmail.com" className="text-gray-300 hover:text-white transition">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="fas fa-globe text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Leistungen</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition">Web-Entwicklung</a></li>
              <li><a href="#services" className="hover:text-white transition">Lua Scripting</a></li>
              <li><a href="#services" className="hover:text-white transition">Discord Bots</a></li>
              <li><a href="#services" className="hover:text-white transition">3D Design (Blender)</a></li>
              <li><a href="#services" className="hover:text-white transition">Grafikdesign</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition">Startseite</a></li>
              <li><a href="#services" className="hover:text-white transition">Leistungen</a></li>
              <li><a href="#about" className="hover:text-white transition">Über uns</a></li>
              <li><a href="#contact" className="hover:text-white transition">Kontakt</a></li>
              <li><a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="hover:text-white transition">Discord Server</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {year} FD Developments and Design. Alle Rechte vorbehalten.</p>
          <p className="mt-2">Designed and developed by Kevin Triebe</p>
        </div>
      </div>
    </footer>
  );
}
