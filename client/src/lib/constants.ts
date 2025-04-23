import blender3dImage from '../assets/blender3d.jpg';
import blenderLogo from '../assets/blender-logo.png';
import codewalkerLogo from '../assets/codewalker-logo.png'; 
import luaLogo from '../assets/lua-logo.png';
import pythonLogo from '../assets/python-logo.png';

export const services = [
  {
    title: "Web-Entwicklung",
    icon: "fas fa-code",
    iconColor: "text-primary",
    description: "Moderne responsive Webseiten, PWAs und Web-Anwendungen mit aktuellsten Technologien.",
    features: [
      { text: "Responsive Webdesign" },
      { text: "Progressive Web Apps (PWA)" },
      { text: "Moderne Frameworks" }
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    gradientFrom: "blue-400",
    gradientTo: "indigo-500"
  },
  {
    title: "Scripting & Bots",
    icon: "fas fa-terminal",
    iconColor: "text-purple-500",
    description: "Maßgeschneiderte Skripte und Bots für verschiedene Plattformen.",
    features: [
      { text: "Lua Scripts für FiveM/GTA" },
      { text: "Discord Bots mit Python" },
      { text: "Automatisierungs-Skripte" }
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    gradientFrom: "purple-400",
    gradientTo: "pink-500"
  },
  {
    title: "3D Design",
    icon: "fas fa-cube",
    iconColor: "text-teal-500",
    description: "Professionelle 3D-Modellierung und -Rendering für verschiedene Zwecke.",
    features: [
      { text: "Blender 3D-Modellierung" },
      { text: "Codewalker für GTA-Ressourcen" },
      { text: "Game Asset Creation" }
    ],
    image: blender3dImage,
    gradientFrom: "teal-400",
    gradientTo: "cyan-500"
  },
  {
    title: "Grafikdesign",
    icon: "fas fa-paintbrush",
    iconColor: "text-amber-500",
    description: "Kreative Grafikdesign-Lösungen für digitale und Druckmedien.",
    features: [
      { text: "Photoshop-Bearbeitung" },
      { text: "GIMP für offene Projekte" },
      { text: "UI/UX Design-Elemente" }
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    gradientFrom: "amber-400",
    gradientTo: "orange-500"
  }
];
