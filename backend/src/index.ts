import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { db } from './db';
import { profileRoutes } from './routes/profile';
import { projectsRoutes } from './routes/projects';
import { skillsRoutes } from './routes/skills';
import { experiencesRoutes } from './routes/experiences';
import { messagesRoutes } from './routes/messages';

const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const app = new Elysia()
  .use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  }))
  .get('/', () => ({
    name: 'Portfolio API Backend',
    runtime: 'Bun ' + Bun.version,
    framework: 'ElysiaJS',
    database: db ? 'PostgreSQL (Connected)' : 'Fallback Demo Mode (Set DATABASE_URL in .env to connect PostgreSQL)',
    endpoints: [
      '/api/health',
      '/api/profile',
      '/api/projects',
      '/api/skills',
      '/api/experiences',
      '/api/messages'
    ]
  }))
  .group('/api', (api) => 
    api
      .get('/health', () => ({
        status: 'ok',
        uptime: process.uptime(),
        bunVersion: Bun.version,
        database: {
          type: 'postgresql',
          connected: Boolean(db),
          mode: db ? 'live' : 'fallback-demo'
        }
      }))
      .use(profileRoutes)
      .use(projectsRoutes)
      .use(skillsRoutes)
      .use(experiencesRoutes)
      .use(messagesRoutes)
  )
  .listen(port);

console.log(`🚀 Server Elysia berjalan pada http://localhost:${port}`);
console.log(`📊 Mode Database: ${db ? 'PostgreSQL Aktif' : 'Demo Mode (atur DATABASE_URL di .env)'}`);

export type App = typeof app;

