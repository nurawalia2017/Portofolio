import { Elysia, t } from 'elysia';
import { db, experiences } from '../db';
import { initialExperiences } from '../db/seed-data';
import { asc } from 'drizzle-orm';

export const experiencesRoutes = new Elysia({ prefix: '/experiences' })
  .get('/', async () => {
    try {
      if (db) {
        const result = await db.select().from(experiences).orderBy(asc(experiences.orderIndex));
        if (result.length > 0) {
          return { success: true, data: result, source: 'database' };
        }
      }
    } catch (err) {
      console.warn('Gagal membaca pengalaman dari database, menggunakan fallback data:', err);
    }
    return { success: true, data: initialExperiences, source: 'fallback' };
  })
  .post('/', {
    body: t.Object({
      role: t.String(),
      company: t.String(),
      location: t.Optional(t.String()),
      period: t.String(),
      type: t.String(), // work | education
      description: t.String(),
      skillsUsed: t.Optional(t.Array(t.String())),
      orderIndex: t.Optional(t.Integer())
    })
  }, async ({ body, set }: { body: any; set: any }) => {
    try {
      if (!db) {
        set.status = 503;
        return { success: false, message: 'Database PostgreSQL belum terhubung.' };
      }
      const inserted = await db.insert(experiences).values({
        role: body.role,
        company: body.company,
        location: body.location || null,
        period: body.period,
        type: body.type,
        description: body.description,
        skillsUsed: body.skillsUsed || [],
        orderIndex: body.orderIndex ?? 0
      }).returning();

      return { success: true, data: inserted[0] };
    } catch (err: any) {
      set.status = 500;
      return { success: false, message: err.message };
    }
  });
