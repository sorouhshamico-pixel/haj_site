// Server-only helpers (Route Handlers / Server Components) that manage the
// admin session cookie. Token creation/verification itself lives in
// src/lib/session.ts, which is also safe to import from middleware.
import { cookies } from 'next/headers';
import { createSessionToken, verifySessionToken, SESSION_COOKIE_NAME, SESSION_DURATION_SECONDS } from '@/lib/session';

export async function createSession() {
  const token = await createSessionToken();
  cookies().set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION_SECONDS
  });
}

export function clearSession() {
  cookies().delete(SESSION_COOKIE_NAME);
}

export async function isAuthenticated() {
  const token = cookies().get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}
