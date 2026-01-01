// Simple JWT-like utility for browser (no signing, just encoding/decoding)

const EXPIRY_SECONDS = 60 * 60 * 24; // 24 hours

export function createToken(data: any) {
  const payload = {
    data,
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
