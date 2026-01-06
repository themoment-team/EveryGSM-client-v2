const COMMON_LINKS = [
  { href: '/', label: '프로젝트' },
  { href: '/mypage', label: '마이 페이지' },
] as const;

const ADMIN_ONLY_LINKS = [{ href: '/admin', label: '프로젝트 등록 요청' }] as const;

export const NAV_LINKS = {
  client: COMMON_LINKS,
  admin: [...COMMON_LINKS, ...ADMIN_ONLY_LINKS],
} as const;
