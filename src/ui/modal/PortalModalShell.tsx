import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalModalShellProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
/**
 * createPortal을 사용한 모달 쉘
 */
export const PortalModalShell = ({
  open,
  onClose,
  children,
}: PortalModalShellProps) => {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
