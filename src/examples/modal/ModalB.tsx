import { createContext, useContext, type ReactNode } from "react";
import { PortalModalShell } from "../../ui/modal/PortalModalShell";

/**
 * Compound Component 패턴을 사용한 모달 컴포넌트
 * Trigger, Content, Close가 Root의 상태를 공유해야하므로 Context를 사용
 */

type ModalConextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ModalContext = createContext<ModalConextValue | null>(null);

function useModalContext() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Modal components must be inside <Modal.Root>");
  return ctx;
}
type RootProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function Root({ open, onOpenChange, children }: RootProps) {
  return (
    <ModalContext.Provider value={{ open, setOpen: onOpenChange }}>
      {children}
    </ModalContext.Provider>
  );
}

export function Trigger({ children }: { children: ReactNode }) {
  const { setOpen } = useModalContext();
  return <button onClick={() => setOpen(true)}>{children}</button>;
}

export function Content({ children }: { children: ReactNode }) {
  const { open, setOpen } = useModalContext();

  return (
    <PortalModalShell open={open} onClose={() => setOpen(false)}>
      {children}
    </PortalModalShell>
  );
}

export function Close({ children }: { children: ReactNode }) {
  const { setOpen } = useModalContext();
  return <button onClick={() => setOpen(false)}>{children}</button>;
}
