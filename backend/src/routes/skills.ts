import { Elysia, t } from 'elysia';
import { db, skills } from '../db';
import { initialSkills } from '../db/seed-data';
import { asc } from 'drizzle-orm';

export const skillsRoutes = new Elysia({ prefix: '/skills' })
  .get('/', async () => {
    try {
      if (db) {
        const result = await db.select().from(skills).orderBy(asc(skills.orderIndex));
        if (result.length > 0) {
          return { success: true, data: result, source: 'database' };
        }
      }
    } catch (err) {
      console.warn('Gagal membaca skills dari database, menggunakan fallback data:', err);
    }
    return { success: true, data: initialSkills, source: 'fallback' };
  })
  .post('/', {
    body: t.Object({
      name: t.String(),
      category: t.String(),
      proficiency: t.Optional(t.Integer()),
      icon: t.Optional(t.String()),
      orderIndex: t.Optional(t.Integer())
    })
  }, async ({ body, set }: { body: any; set: any }) => {
    try {
      if (!db) {
        set.status = 503;
        return { success: false, message: 'Database PostgreSQL belum terhubung.' };
      }
      const inserted = await db.insert(skills).values(body).returning();
      return { success: true, data: inserted[0] };
    } catch (err: any) {
      set.status = 500;
      return { success: false, message: err.message };
    }
  });
