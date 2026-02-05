import { createContext, useContext, type ReactNode } from "react";

export type ModalService = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalService | null>(null);

// 전역 Context에 접근하는 훅
// 모달을 open/close 하는 함수를 제공하고 있음
export function useModalService() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used indside provider");
  return ctx;
}
