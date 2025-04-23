import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Typen für Portfolio-Projekte
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'script' | '3d' | 'design';
}

// Später werden wir diese mit echten Projekten füllen
const portfolioItems: PortfolioItem[] = [
  // Hier werden die Beispielprojekte später eingefügt
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
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-3xl w-full max-h-90vh overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full aspect-video object-cover"
                />
                <button 
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <i className="fas fa-times"></i>
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
      </Dialog>
    </div>
  );
}