import React, { useEffect, useRef } from 'react';

// Declare the global discordWidget variable from the external script
declare global {
  interface Window {
    discordWidget: {
      init: (config: any) => void;
      render: () => void;
    };
  }
}

interface DiscordWidgetProps {
  serverId: string;
  title?: string;
  theme?: 'light' | 'dark';
  width?: string;
  height?: string;
  join?: boolean;
  showAllUsers?: boolean;
}

const DiscordWidget: React.FC<DiscordWidgetProps> = ({
  serverId,
  title,
  theme = 'dark',
  width = '100%',
  height = '400px',
  join = true,
  showAllUsers = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Add the script dynamically
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = '/src/assets/discord.min.js';
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
        initializeWidget();
      };
      document.body.appendChild(script);
    } else {
      initializeWidget();
    }

    function initializeWidget() {
      if (window.discordWidget && containerRef.current) {
        // Initialize the widget
        window.discordWidget.init({
          serverId: serverId,
          title: title || 'FD Developments and Design\'s',
          join: join,
          theme: theme,
          showAllUsers: showAllUsers,
          alphabetical: true,
          allUsersDefaultState: true,
        });

        // Render the widget
        window.discordWidget.render();
      }
    }

    return () => {
      // Clean up script if needed when component unmounts
      if (scriptLoaded.current) {
        const scripts = document.querySelectorAll('script');
        scripts.forEach(s => {
          if (s.src.includes('discord.min.js')) {
            s.remove();
          }
        });
      }
    };
  }, [serverId, title, theme, join, showAllUsers]);

  return (
    <div 
      ref={containerRef}
      className="discord-widget" 
      style={{ 
        width, 
        height, 
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    ></div>
  );
};

export default DiscordWidget;