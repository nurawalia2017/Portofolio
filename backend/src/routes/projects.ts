import { Elysia, t } from 'elysia';
import { db, projects } from '../db';
import { initialProjects } from '../db/seed-data';
import { eq, desc, asc } from 'drizzle-orm';

export const projectsRoutes = new Elysia({ prefix: '/projects' })
  .get('/', async ({ query }: { query: Record<string, string | undefined> }) => {
    try {
      if (db) {
        let queryBuilder = db.select().from(projects).orderBy(asc(projects.orderIndex), desc(projects.createdAt));
        const result = await queryBuilder;
        
        let filtered = result;
        if (query?.category && query.category !== 'All') {
          filtered = filtered.filter(p => p.category.toLowerCase() === query.category?.toLowerCase());
        }
        if (query?.featured === 'true') {
          filtered = filtered.filter(p => p.featured);
        }

        if (filtered.length > 0) {
          return { success: true, data: filtered, source: 'database' };
        }
      }
    } catch (err) {
      console.warn('Gagal membaca projects dari database, menggunakan fallback data:', err);
    }

    let filtered = initialProjects;
    if (query?.category && query.category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === query.category?.toLowerCase());
    }
    if (query?.featured === 'true') {
      filtered = filtered.filter(p => p.featured);
    }
    return { success: true, data: filtered, source: 'fallback' };
  })
  .get('/:id', async ({ params, set }: { params: { id: string }; set: any }) => {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      set.status = 400;
      return { success: false, message: 'ID tidak valid' };
    }

    try {
      if (db) {
        const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
        if (result.length > 0) {
          return { success: true, data: result[0] };
        }
      }
    } catch (err) {
      console.warn('Database error:', err);
    }

    const fallback = initialProjects.find((_, idx) => idx + 1 === id);
    if (fallback) {
      return { success: true, data: fallback };
    }

    set.status = 404;
    return { success: false, message: 'Proyek tidak ditemukan' };
  })
  .post('/', {
    body: t.Object({
      title: t.String(),
      slug: t.Optional(t.String()),
      description: t.String(),
      longDescription: t.Optional(t.String()),
      category: t.String(),
      imageUrl: t.Optional(t.String()),
      demoUrl: t.Optional(t.String()),
      githubUrl: t.Optional(t.String()),
      tags: t.Optional(t.Array(t.String())),
      featured: t.Optional(t.Boolean()),
      orderIndex: t.Optional(t.Integer())
    })
  }, async ({ body, set }: { body: any; set: any }) => {
    try {
      if (!db) {
        set.status = 503;
        return { success: false, message: 'Database PostgreSQL belum terhubung.' };
      }

      const inserted = await db.insert(projects).values({
        title: body.title,
        slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: body.description,
        longDescription: body.longDescription || null,
        category: body.category,
        imageUrl: body.imageUrl || null,
        demoUrl: body.demoUrl || null,
        githubUrl: body.githubUrl || null,
        tags: body.tags || [],
        featured: body.featured ?? false,
        orderIndex: body.orderIndex ?? 0
      }).returning();

      return { success: true, data: inserted[0] };
    } catch (err: any) {
      set.status = 500;
      return { success: false, message: err.message };
    }
  })
  .delete('/:id', async ({ params, set }: { params: { id: string }; set: any }) => {
    const id = parseInt(params.id);
    if (!db) {
      set.status = 503;
      return { success: false, message: 'Database belum terhubung.' };
    }
    try {
      const deleted = await db.delete(projects).where(eq(projects.id, id)).returning();
      if (deleted.length === 0) {
        set.status = 404;
        return { success: false, message: 'Proyek tidak ditemukan' };
      }
      return { success: true, message: 'Proyek berhasil dihapus' };
    } catch (err: any) {
      set.status = 500;
      return { success: false, message: err.message };
    }
  });
