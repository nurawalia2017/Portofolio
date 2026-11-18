import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

let client: ReturnType<typeof postgres> | null = null;
let db: ReturnType<typeof drizzle<typeof schema>> | null = null;

if (connectionString && connectionString !== 'YOUR_POSTGRESQL_CONNECTION_STRING_HERE') {
  try {
    const isLocal = connectionString.includes('localhost') || connectionString.includes('127.0.0.1');
    client = postgres(connectionString, {
      ssl: isLocal ? false : 'require',
      max: 10,
      connect_timeout: 10,
    });
    db = drizzle(client, { schema });
    console.log('✅ PostgreSQL Drizzle connection configured.');
  } catch (error) {
    console.warn('⚠️ Warning: PostgreSQL client initialization failed:', error);
  }
} else {
  console.log('ℹ️ DATABASE_URL belum diatur. Menggunakan data demo fallback.');
}

export { client, db };
export * from './schema';

