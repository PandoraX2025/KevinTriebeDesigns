import React from 'react';

interface DiscordWidgetProps {
  serverId: string;
  theme?: 'light' | 'dark';
  width?: string;
  height?: string;
}

const DiscordWidget: React.FC<DiscordWidgetProps> = ({
  serverId,
  theme = 'dark',
  width = '100%',
  height = '500px'
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg" style={{ width, height }}>
      <iframe 
        src={`https://discord.com/widget?id=${serverId}&theme=${theme}`}
        width="100%"
        height="100%"
        allowtransparency="true" 
        frameBorder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        title="Discord Server Widget"
      ></iframe>
    </div>
  );
};

export default DiscordWidget;