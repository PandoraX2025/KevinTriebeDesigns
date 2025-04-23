import { useState, useEffect } from 'react';

export default function TeamSpeakViewer() {
  const [iframeHeight, setIframeHeight] = useState('600px');

  // Passt die Höhe des iFrames basierend auf der Fenstergröße an
  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      // Berechne die Höhe (minus Kopf- und Fußzeile + etwas Abstand)
      const calculatedHeight = windowHeight - 300;
      setIframeHeight(`${Math.max(calculatedHeight, 400)}px`);
    };

    // Initial setzen und bei Größenänderungen aktualisieren
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <section id="teamspeak" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            TeamSpeak Support
          </h2>
          
          <div className="mb-8 text-center text-gray-700 dark:text-gray-300">
            <p className="mb-4">Verbinden Sie sich mit unserem TeamSpeak Server für direkten Support.</p>
            <p className="mb-2">Server: <span className="font-medium">2.59.134.241:9987</span></p>
            <p>Name: <span className="font-medium">Frozen District Services FD Developments</span></p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-8">
            <div className="relative overflow-hidden w-full" style={{ height: iframeHeight }}>
              <iframe 
                src={`https://view.light-speed.com/teamspeak/?server=2.59.134.241&port=9987&nickname=Website-Besucher&fontSize=13&fontFamily=Roboto&hideBackground=true&borderRadius=5`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  border: 'none' 
                }}
                title="TeamSpeak 3 Viewer"
                allow="microphone"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-8 mb-12">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Direkte Verbindung</h3>
            <a 
              href="ts3server://2.59.134.241:9987?nickname=FD-Website-Besucher"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-block"
            >
              Mit TeamSpeak verbinden
            </a>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Klicken Sie auf den Button, um direkt mit Ihrem TeamSpeak-Client zu verbinden.<br />
              Sie benötigen den TeamSpeak 3 Client, um diese Funktion zu nutzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}