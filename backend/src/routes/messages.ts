import { Elysia, t } from 'elysia';
import { db, messages } from '../db';
import { desc, eq } from 'drizzle-orm';

// In-memory store for fallback if DB is not connected yet
const inMemoryMessages: any[] = [];

export const messagesRoutes = new Elysia({ prefix: '/messages' })
  .get('/', async () => {
    try {
      if (db) {
        const result = await db.select().from(messages).orderBy(desc(messages.createdAt));
        return { success: true, data: result, source: 'database' };
      }
    } catch (err) {
      console.warn('Gagal membaca pesan dari database:', err);
    }
    return { success: true, data: inMemoryMessages, source: 'in-memory' };
  })
  .post('/', {
    body: t.Object({
      name: t.String({ minLength: 2, error: 'Nama minimal 2 karakter' }),
      email: t.String({ format: 'email', error: 'Format email tidak valid' }),
      subject: t.Optional(t.String()),
      message: t.String({ minLength: 5, error: 'Pesan minimal 5 karakter' })
    })
  }, async ({ body, set }: { body: any; set: any }) => {
    try {
      if (db) {
        const inserted = await db.insert(messages).values({
          name: body.name,
          email: body.email,
          subject: body.subject || 'Pesan dari Web Portofolio',
          message: body.message,
          isRead: false
        }).returning();

        return { 
          success: true, 
          message: 'Pesan berhasil dikirim dan tersimpan di database!', 
          data: inserted[0] 
        };
      }
    } catch (err: any) {
      console.warn('PostgreSQL write failed, saving to in-memory fallback:', err.message);
    }

    // Fallback store
    const newMsg = {
      id: inMemoryMessages.length + 1,
      name: body.name,
      email: body.email,
      subject: body.subject || 'Pesan dari Web Portofolio',
      message: body.message,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    inMemoryMessages.unshift(newMsg);

    return {
      success: true,
      message: 'Pesan berhasil diterima!',
      data: newMsg
    };
  })
  .patch('/:id/read', async ({ params, set }: { params: { id: string }; set: any }) => {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      set.status = 400;
      return { success: false, message: 'ID tidak valid' };
    }

    if (db) {
      try {
        const updated = await db.update(messages)
          .set({ isRead: true })
          .where(eq(messages.id, id))
          .returning();
        return { success: true, data: updated[0] };
      } catch (err: any) {
        set.status = 500;
        return { success: false, message: err.message };
      }
    }

    const item = inMemoryMessages.find(m => m.id === id);
    if (item) item.isRead = true;
    return { success: true, data: item };
  });
