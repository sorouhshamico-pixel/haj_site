// Basic in-memory rate limiter for the login endpoint. This resets whenever the
// serverless function cold-starts and isn't shared across instances, so treat it
// as a deterrent against casual brute-forcing rather than a hard guarantee — see
// docs/ADMIN-SETUP.md for notes on upgrading to a shared store if needed.

const attempts = new Map<string, { count: number; resetAt: number }>();

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export function isRateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export function resetRateLimit(key: string) {
  attempts.delete(key);
}
