interface Feature {
  text: string;
}

interface ServiceCardProps {
  service: {
    title: string;
    icon: string;
    iconColor: string;
    description: string;
    features: Feature[];
    image: string | any; // Akzeptiert auch importierte Bilder
    secondaryImage?: string | any; // Optionales zweites Bild
    gradientFrom: string;
    gradientTo: string;
    programLogos?: any[]; // Programmlogos
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className={`h-48 bg-gradient-to-r from-${service.gradientFrom} to-${service.gradientTo} relative overflow-hidden`}>
        <img 
          src={service.image}
          alt={service.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay für Logos, falls vorhanden */}
        {service.programLogos && service.programLogos.length > 0 && (
          <div className="absolute top-2 right-2 flex space-x-2">
            {service.programLogos.map((logo, index) => (
              <div key={index} className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md flex items-center justify-center">
                <img src={logo} alt="Program Logo" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 flex items-center dark:text-white">
          <i className={`${service.icon} ${service.iconColor} mr-2`}></i>
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>
        <ul className="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-300">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd"
                ></path>
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
