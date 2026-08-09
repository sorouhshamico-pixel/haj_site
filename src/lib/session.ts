// Edge-safe session token helpers — no next/headers import here, so this module
// can be imported from src/middleware.ts (which runs in the Edge runtime) as well
// as from Node-based Route Handlers and Server Components.
import { SignJWT, jwtVerify } from 'jose';

export const SESSION_COOKIE_NAME = 'admin_session';
export const SESSION_DURATION_SECONDS = 60 * 60 * 8; // 8 hours

function getSecretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('SESSION_SECRET is not set (or is too short). See docs/ADMIN-SETUP.md.');
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionToken() {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecretKey());
}

export async function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload.role === 'admin';
  } catch {
    return false;
  }
}
