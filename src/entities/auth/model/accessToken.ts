import { AuthUserType, JwtPayloadType } from './types';

const decodePayload = (accessToken: string): JwtPayloadType | null => {
  try {
    const [, payload] = accessToken.split('.');

    if (!payload) return null;

    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
    const decoded = atob(padded);

    return JSON.parse(decoded) as JwtPayloadType;
  } catch {
    return null;
  }
};

export const parseAuthUserFromAccessToken = (accessToken: string): AuthUserType | null => {
  const payload = decodePayload(accessToken);

  if (!payload) return null;

  return {
    userId: payload.userId,
    email: payload.email,
    name: payload.name,
    grade: payload.grade,
    classNum: payload.classNum,
    number: payload.number,
    role: payload.role,
  };
};
