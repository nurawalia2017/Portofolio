import React, { useState } from 'react';
import type { Skill } from '../types';
import { 
  Code, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  Box, 
  GitBranch, 
  Zap, 
  Flame, 
  Globe, 
  Palette, 
  Rocket, 
  FileCode,
  HardDrive
} from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & DevOps'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  // Helper for dynamic icons
  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Keahlian & Penguasaan
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">
            Tech Stack & Tools
          </p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3">
            Teknologi dan perangkat lunak yang saya gunakan untuk merancang dan membangun sistem digital secara efisien.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'Semua Keahlian' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all hover:-translate-y-1 duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    {renderIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm tracking-tight">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1.5 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
