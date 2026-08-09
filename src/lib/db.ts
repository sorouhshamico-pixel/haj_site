import { neon } from '@neondatabase/serverless';

export const isDatabaseConfigured = Boolean(process.env.DATABASE_URL);

export function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set. See docs/ADMIN-SETUP.md to provision a database.');
  }
  return neon(process.env.DATABASE_URL);
}
