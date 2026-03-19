import { create } from 'zustand';

interface RequestModalStore {
  isOpen: boolean;
  content: React.ReactNode | null;
  openRequestModal: (content: React.ReactNode) => void;
  closeRequestModal: () => void;
}

export const useRequestModalStore = create<RequestModalStore>((set) => ({
  isOpen: false,
  content: null,
  openRequestModal: (content) => set({ isOpen: true, content }),
  closeRequestModal: () => set({ isOpen: false, content: null }),
}));
