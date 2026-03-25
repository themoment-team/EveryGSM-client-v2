import { cookies } from 'next/headers';

import { COOKIE_KEYS } from '@/shared/constants';

import 'server-only';

interface ApiFetcherOptions {
  endpoint: string;
  context: string;
  errorMessage: string;
  method?: RequestInit['method'];
  cache?: RequestCache;
  headers?: HeadersInit;
}

export const apiFetcher = async <T>({
  endpoint,
  context,
  errorMessage,
  method = 'GET',
  cache = 'no-store',
  headers,
}: ApiFetcherOptions): Promise<T | undefined> => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

    const url = new URL(endpoint, process.env.NEXT_PUBLIC_API_BASE_URL);

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...headers,
      },
      cache,
    });

    if (!response.ok) {
      console.error(`[${context}] HTTP 오류: ${response.status} ${response.statusText}`);
      return undefined;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`[${context}] ${errorMessage}`, error);
    return undefined;
  }
};
