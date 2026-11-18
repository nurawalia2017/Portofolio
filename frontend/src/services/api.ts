import type { Profile, Skill, Project, Experience, MessageInput, ContactMessage } from '../types';

const API_BASE = '/api';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error('Health check failed');
    return await res.json();
  } catch (error) {
    console.error('Error fetching health status:', error);
    return null;
  }
}

export async function fetchProfile(): Promise<Profile | null> {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function updateProfile(data: Partial<Profile>) {
  const res = await fetch(`${API_BASE}/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Gagal memperbarui profil');
  }
  return json;
}

export async function fetchSkills(): Promise<Skill[]> {
  try {
    const res = await fetch(`${API_BASE}/skills`);
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export async function fetchProjects(category?: string): Promise<Project[]> {
  try {
    const url = category && category !== 'All' 
      ? `${API_BASE}/projects?category=${encodeURIComponent(category)}`
      : `${API_BASE}/projects`;
    const res = await fetch(url);
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function createProject(data: Partial<Project>) {
  const res = await fetch(`${API_BASE}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Gagal menambah proyek');
  }
  return json;
}

export async function deleteProject(id: number) {
  const res = await fetch(`${API_BASE}/projects/${id}`, {
    method: 'DELETE',
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Gagal menghapus proyek');
  }
  return json;
}

export async function fetchExperiences(): Promise<Experience[]> {
  try {
    const res = await fetch(`${API_BASE}/experiences`);
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export async function sendMessage(data: MessageInput) {
  const res = await fetch(`${API_BASE}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Gagal mengirim pesan');
  }
  return json;
}

export async function fetchMessages(): Promise<ContactMessage[]> {
  try {
    const res = await fetch(`${API_BASE}/messages`);
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
}

export async function markMessageAsRead(id: number) {
  try {
    const res = await fetch(`${API_BASE}/messages/${id}/read`, {
      method: 'PATCH'
    });
    return await res.json();
  } catch (error) {
    console.error('Error marking message as read:', error);
    return null;
  }
}
