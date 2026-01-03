// Simple JWT-like utility for browser (no signing, just encoding/decoding)

const EXPIRY_SECONDS = 60 * 60 * 24; // 24 hours

/**
 * Creates a JWT-like token with user data, level, and xp.
 * @param data - User data object. Should include lvl and xp properties.
 *   Example: { user: 'ME', habits: [], lvl: 1, xp: 0 }
 */
export function createToken(data: { [key: string]: any, lvl?: number, xp?: number }) {
  // Ensure order: user, lvl, xp, habits
  const { user, lvl, xp, habits, ...rest } = data;
  const payload = {
    data: {
      ...(user !== undefined ? { user } : {}),
      lvl: typeof lvl === 'number' ? lvl : 1,
      xp: typeof xp === 'number' ? xp : 0,
      ...(habits !== undefined ? { habits } : {}),
      ...(rest || {}),
    },
    exp: Math.floor(Date.now() / 1000) + EXPIRY_SECONDS,
  };
  return btoa(JSON.stringify(payload));
}

export function verifyToken(token: string) {
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp && decoded.exp > Math.floor(Date.now() / 1000)) {
      return decoded;
    }
    return null;
  } catch {
    return null;
  }
}

export function getTokenData(token: string) {
  try {
    const decoded = JSON.parse(atob(token));
    return decoded?.data;
  } catch {
    return null;
  }
}
