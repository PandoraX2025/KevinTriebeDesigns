import React from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'programming' | 'design' | 'tools';
  icon?: string;
}

const skills: Skill[] = [
  // Programmierung - ehrlicher Ansatz
  { name: 'HTML/CSS/JavaScript', level: 25, category: 'programming' },
  { name: 'React', level: 25, category: 'programming' },
  { name: 'Lua Scripting', level: 25, category: 'programming' },
  { name: 'Python', level: 25, category: 'programming' },
  { name: 'TypeScript', level: 25, category: 'programming' },
  
  // Design - realistische Werte
  { name: 'Photoshop', level: 50, category: 'design' },
  { name: 'GIMP', level: 60, category: 'design' },
  { name: 'UI/UX Design', level: 50, category: 'design' },
  { name: 'Grafikdesign', level: 50, category: 'design' },
  
  // Tools & Technologien
  { name: 'Blender 3D', level: 70, category: 'tools' },
  { name: 'Codewalker', level: 90, category: 'tools' },
  { name: 'FiveM Framework', level: 50, category: 'tools' },
  { name: 'Git & GitHub', level: 25, category: 'tools' },
];

export default function SkillsSection() {
  // Gruppiere Skills nach Kategorie
  const programmingSkills = skills.filter(skill => skill.category === 'programming');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Technische Kenntnisse</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Wir sind dabei, unsere Fähigkeiten kontinuierlich zu erweitern. Hier zeigen wir ehrlich, wo wir aktuell stehen und in welchen Bereichen wir bereits Erfahrung gesammelt haben.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programmierung */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center dark:text-white">Programmierung</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Design */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center dark:text-white">Design</h3>
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Tools & Technologien */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center dark:text-white">Tools & Technologien</h3>
            <div className="space-y-6">
              {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium dark:text-white">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );
}