import type { StatusType } from './types';

export interface ProjectRequestStatusMetaType {
  label: string;
  textColorClassName: string;
}

const PROJECT_REQUEST_STATUS_META: Record<StatusType, ProjectRequestStatusMetaType> = {
  PENDING: {
    label: '확인 중',
    textColorClassName: 'text-[#888888]',
  },
  APPROVED: {
    label: '승인',
    textColorClassName: 'text-[#888888]',
  },
  REJECTED: {
    label: '거절',
    textColorClassName: 'text-[#FF7C7C]',
  },
  INACTIVE: {
    label: '비활성',
    textColorClassName: 'text-[#888888]',
  },
};

export const getProjectRequestStatusMeta = (status: StatusType) => {
  return PROJECT_REQUEST_STATUS_META[status];
};
