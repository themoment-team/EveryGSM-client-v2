import { ApiResponse } from '@/shared/types';

export interface OAuthSignInReqType {
  authCode: string;
  codeVerifier?: string;
}

export interface OAuthSignInType {
  accessToken: string;
}

export type OAuthSignInResponseType = ApiResponse<OAuthSignInType>;

export interface JwtPayloadType {
  userId?: number;
  email?: string;
  name?: string;
  grade?: number;
  classNum?: number;
  number?: number;
  role?: string;
  exp?: number;
}

export interface AuthUserType {
  userId?: number;
  email?: string;
  name?: string;
  grade?: number;
  classNum?: number;
  number?: number;
  role?: string;
}
