import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { toast } from 'sonner';

interface UseHandleErrorQueryToastProps {
  errorType: string;
  message: string;
}

export const useHandleErrorQueryToast = ({ errorType, message }: UseHandleErrorQueryToastProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentErrorType = searchParams.get('error');

    if (currentErrorType !== errorType) {
      return;
    }

    toast.error(message);

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete('error');

    const nextQuery = nextParams.toString();
    const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;

    router.replace(nextUrl, { scroll: false });
  }, [errorType, message, pathname, router, searchParams]);
};
