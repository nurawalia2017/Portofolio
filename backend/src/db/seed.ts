import { db, profiles, skills, projects, experiences, client } from './index';
import { initialProfile, initialSkills, initialProjects, initialExperiences } from './seed-data';

async function seed() {
  console.log('🌱 Memulai proses seeding database PostgreSQL...');

  if (!db) {
    console.error('❌ Gagal: Koneksi PostgreSQL belum tersedia.');
    console.log('💡 Silakan pastikan DATABASE_URL sudah diatur di file .env');
    console.log('Contoh: DATABASE_URL=postgresql://user:password@ep-xyz.region.neon.tech/neondb?sslmode=require');
    process.exit(1);
  }

  try {
    // 1. Seed Profile
    console.log('Inserting profile...');
    const existingProfiles = await db.select().from(profiles).limit(1);
    if (existingProfiles.length === 0) {
      await db.insert(profiles).values(initialProfile);
      console.log('✅ Profil berhasil dibuat.');
    } else {
      console.log('ℹ️ Profil sudah ada.');
    }

    // 2. Seed Skills
    console.log('Inserting skills...');
    const existingSkills = await db.select().from(skills).limit(1);
    if (existingSkills.length === 0) {
      await db.insert(skills).values(initialSkills);
      console.log(`✅ ${initialSkills.length} skills berhasil dimasukkan.`);
    } else {
      console.log('ℹ️ Skills sudah ada.');
    }

    // 3. Seed Projects
    console.log('Inserting projects...');
    const existingProjects = await db.select().from(projects).limit(1);
    if (existingProjects.length === 0) {
      await db.insert(projects).values(initialProjects);
      console.log(`✅ ${initialProjects.length} proyek berhasil dimasukkan.`);
    } else {
      console.log('ℹ️ Proyek sudah ada.');
    }

    // 4. Seed Experiences
    console.log('Inserting experiences...');
    const existingExp = await db.select().from(experiences).limit(1);
    if (existingExp.length === 0) {
      await db.insert(experiences).values(initialExperiences);
      console.log(`✅ ${initialExperiences.length} data pengalaman/pendidikan berhasil dimasukkan.`);
    } else {
      console.log('ℹ️ Data pengalaman sudah ada.');
    }

    console.log('🎉 Seeding database selesai dengan sukses!');
  } catch (error) {
    console.error('❌ Terjadi kesalahan saat seeding:', error);
  } finally {
    if (client) {
      await client.end();
    }
    process.exit(0);
  }
}

seed();

