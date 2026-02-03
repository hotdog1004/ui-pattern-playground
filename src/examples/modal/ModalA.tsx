import type { ReactNode } from "react";
import { PortalModalShell } from "../../ui/modal/PortalModalShell";

type ModalAProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
};
export const ModalA = ({ open, onClose, title, children }: ModalAProps) => {
  return (
    <PortalModalShell open={open} onClose={onClose}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
      <button onClick={onClose}>닫기</button>
    </PortalModalShell>
  );
};
