import { Elysia, t } from 'elysia';
import { db, profiles } from '../db';
import { initialProfile } from '../db/seed-data';

export const profileRoutes = new Elysia({ prefix: '/profile' })
  .get('/', async () => {
    try {
      if (db) {
        const result = await db.select().from(profiles).limit(1);
        if (result.length > 0) {
          return { success: true, data: result[0], source: 'database' };
        }
      }
    } catch (err) {
      console.warn('Gagal membaca profil dari database, menggunakan fallback data:', err);
    }
    return { success: true, data: initialProfile, source: 'fallback' };
  })
  .put('/', {
    body: t.Object({
      name: t.Optional(t.String()),
      title: t.Optional(t.String()),
      bio: t.Optional(t.String()),
      avatarUrl: t.Optional(t.String()),
      email: t.Optional(t.String()),
      location: t.Optional(t.String()),
      githubUrl: t.Optional(t.String()),
      linkedinUrl: t.Optional(t.String()),
      twitterUrl: t.Optional(t.String()),
      resumeUrl: t.Optional(t.String()),
      statusAvailable: t.Optional(t.Boolean()),
    })
  }, async ({ body, set }: { body: any; set: any }) => {
    try {
      if (!db) {
        set.status = 503;
        return { success: false, message: 'Database PostgreSQL belum terhubung.' };
      }
      const existing = await db.select().from(profiles).limit(1);
      if (existing.length === 0) {
        const inserted = await db.insert(profiles).values(body).returning();
        return { success: true, data: inserted[0] };
      } else {
        const targetId = existing[0]?.id;
        if (!targetId) {
          set.status = 500;
          return { success: false, message: 'Profil tidak valid' };
        }
        const updated = await db.update(profiles)
          .set({ ...body, updatedAt: new Date() })
          .where({ id: targetId } as any)
          .returning();
        return { success: true, data: updated[0] };
      }
    } catch (err: any) {
      set.status = 500;
      return { success: false, message: err.message };
    }
  });
