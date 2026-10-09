import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export function getPool(): Pool {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }
  if (!globalForDb.__arenaNextJsPostgresqlPool) {
    globalForDb.__arenaNextJsPostgresqlPool = new Pool({
      connectionString: databaseUrl,
    });
  }
  return globalForDb.__arenaNextJsPostgresqlPool;
}

export const pool = new Proxy({} as Pool, {
  get(_target, prop) {
    const p = getPool();
    const val = (p as any)[prop];
    return typeof val === "function" ? val.bind(p) : val;
  },
});

let _db: ReturnType<typeof drizzle> | null = null;
export function getDb(): ReturnType<typeof drizzle> {
  if (!_db) {
    _db = drizzle(getPool());
  }
  return _db;
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    const d = getDb();
    const val = (d as any)[prop];
    return typeof val === "function" ? val.bind(d) : val;
  },
});

