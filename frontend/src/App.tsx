import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experiences } from './components/Experiences';
import { SkillsSection } from './components/SkillsSection';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AddProjectModal } from './components/AddProjectModal';
import { EditProfileModal } from './components/EditProfileModal';
import { MessagesModal } from './components/MessagesModal';
import { fetchProfile, fetchProjects, fetchExperiences } from './services/api';
import type { Profile, Project, Experience } from './types';
import { Loader2 } from 'lucide-react';

export function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isMessagesModalOpen, setIsMessagesModalOpen] = useState(false);

  const loadAllData = async () => {
    try {
      const [prof, projs, exps] = await Promise.all([
        fetchProfile(),
        fetchProjects(),
        fetchExperiences()
      ]);

      if (prof) setProfile(prof);
      if (projs && projs.length > 0) setProjects(projs);
      if (exps && exps.length > 0) setExperiences(exps);
    } catch (err) {
      console.error('Error loading initial data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleProjectAdded = (newProject: Project) => {
    setProjects(prev => [newProject, ...prev]);
  };

  const displayName = profile?.name || "Nur Awalia";

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#171717] font-sans selection:bg-[#F59E0B] selection:text-black">
      <Navbar
        name={displayName}
        onOpenMessages={() => setIsMessagesModalOpen(true)}
        onEditProfile={() => setIsEditProfileOpen(true)}
      />

      {loading ? (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-[#F59E0B] animate-spin" />
          <p className="text-sm font-mono text-[#78716C]">Memuat portofolio...</p>
        </div>
      ) : (
        <main>
          {/* 1. Nama dan Ringkasan */}
          <Hero profile={profile} />

          {/* 2. Pendidikan Terakhir */}
          <Education />

          {/* 3. Pengalaman Praktik & Kerja */}
          <Experiences experiences={experiences} />

          {/* 4. Ringkasan Keahlian yang Diterapkan */}
          <SkillsSection />

          {/* 5. Portofolio Proyek */}
          <Projects
            projects={projects}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />

          {/* Kontak */}
          <Contact />
        </main>
      )}

      {/* Footer */}
      <Footer name={displayName} />

      {/* Modals for Dynamic Interaction */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={handleProjectAdded}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        profile={profile}
        onClose={() => setIsEditProfileOpen(false)}
        onSuccess={(updated) => setProfile(updated)}
      />

      <MessagesModal
        isOpen={isMessagesModalOpen}
        onClose={() => setIsMessagesModalOpen(false)}
      />
    </div>
  );
}

export default App;
