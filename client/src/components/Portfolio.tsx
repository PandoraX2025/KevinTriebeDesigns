import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Bilder
const discordBotImage = "/src/assets/discord-bots.png";
const luaScriptingImage = "/src/assets/lua-scripting.png";
const codewalkerImage = "/src/assets/codewalker-beispiel.jpg";
const blenderCarImage = "/src/assets/blender-car-beispiel.jpeg";

// Typen für Portfolio-Projekte
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'script' | '3d' | 'design';
}

// Portfolio-Projekte
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Discord Music Bot",
    description: "Ein komplexer Discord Bot in Python, der Musik-Streaming-Funktionen bietet. Der Bot kann YouTube-Links abspielen, Wiedergabelisten verwalten und verwendet FFmpeg für die Audiokonvertierung. Er interagiert mit Benutzern in Sprachkanälen und reagiert auf Befehle, die in Textkanälen eingegeben werden.",
    image: discordBotImage,
    category: 'script'
  },
  {
    id: 2,
    title: "FiveM Lua Loot-System",
    description: "Ein fortschrittliches Loot-System für FiveM (GTA V Rollenspiel-Plattform), programmiert in Lua. Das System ermöglicht das dynamische Platzieren von Loot-Objekten in der Spielwelt, die Interaktion mit diesen Objekten und ein zufallsbasiertes Belohnungssystem. Die Skripte integrieren sich nahtlos in die ESX-Framework-Umgebung.",
    image: luaScriptingImage,
    category: 'script'
  },
  {
    id: 3,
    title: "GTA Farmhaus 3D-Mapping",
    description: "3D-Mapping eines Farmhauses mit Umgebung für einen GTA V Rollenspiel-Server mit Codewalker. Detaillierte Umgebungsgestaltung mit natürlicher Vegetation, Zäunen und realistischer Terrainmodellierung. Das Projekt umfasst Objekt-Platzierung, Lichteffekte und nahtlose Integration in die bestehende Spielwelt.",
    image: codewalkerImage,
    category: '3d'
  },
  {
    id: 4,
    title: "Blender Auto-Modell",
    description: "Ein mit Blender modelliertes und bearbeitetes Auto-Modell für einen GTA V Rollenspiel-Server. Das Modell wurde so angepasst, dass es ohne rechtliche Probleme verwendet werden kann. Die 3D-Modellierung umfasst detaillierte Geometrie, Texturen und Physik-Eigenschaften für eine realistische Integration in die Spielwelt.",
    image: blenderCarImage,
    category: '3d'
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [open, setOpen] = useState(false);

  // Filter-Funktionalität
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="w-full">
      {/* Filter-Leiste */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <Button 
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          className="rounded-full px-4 py-2"
        >
          Alle Projekte
        </Button>
        <Button 
          variant={filter === 'web' ? 'default' : 'outline'}
          onClick={() => setFilter('web')}
          className="rounded-full px-4 py-2"
        >
          Webentwicklung
        </Button>
        <Button 
          variant={filter === 'script' ? 'default' : 'outline'}
          onClick={() => setFilter('script')}
          className="rounded-full px-4 py-2"
        >
          Scripting
        </Button>
        <Button 
          variant={filter === '3d' ? 'default' : 'outline'}
          onClick={() => setFilter('3d')}
          className="rounded-full px-4 py-2"
        >
          3D Design
        </Button>
        <Button 
          variant={filter === 'design' ? 'default' : 'outline'}
          onClick={() => setFilter('design')}
          className="rounded-full px-4 py-2"
        >
          Grafikdesign
        </Button>
      </div>

      {/* Portfolio-Grid */}
      {portfolioItems.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold dark:text-white mb-2">Portfolio wird vorbereitet</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Hier werden bald Ihre Projekte angezeigt. Fügen Sie Screenshots mit Beschreibungen hinzu, um Ihre Arbeit zu präsentieren.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => {
                setSelectedItem(item);
                setOpen(true);
              }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedItem && open && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full aspect-video object-contain"
              />
              <button 
                className="absolute top-3 right-3 bg-black bg-opacity-75 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-100"
                onClick={() => setOpen(false)}
                aria-label="Schließen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold dark:text-white mb-2">{selectedItem.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedItem.description}</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {selectedItem.category === 'web' && 'Webentwicklung'}
                  {selectedItem.category === 'script' && 'Scripting'}
                  {selectedItem.category === '3d' && '3D Design'}
                  {selectedItem.category === 'design' && 'Grafikdesign'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}