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
  height = '400px'
}) => {
  return (
    <iframe 
      src={`https://discord.com/widget?id=${serverId}&theme=${theme}`}
      width={width}
      height={height}
      frameBorder="0" 
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      className="rounded-lg shadow-lg"
      title="Discord Server Widget"
    ></iframe>
  );
};

export default DiscordWidget;