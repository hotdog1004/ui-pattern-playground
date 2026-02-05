import { useState, type ReactNode } from "react";
import { PortalModalShell } from "../../ui/modal/PortalModalShell";
import { ModalContext } from "./ModalCContext";

// 전역 모달의 상태 소유자
// 실제 모달을 렌더링함
export function ModalCProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode | null>(null);

  return (
    <ModalContext.Provider
      value={{ openModal: setContent, closeModal: () => setContent(null) }}
    >
      {children}

      <PortalModalShell
        open={content !== null}
        onClose={() => setContent(null)}
      >
        {content}
        <button
          className="mt-6 rounded bg-gray-800 px-3 py-2 text-sm text-white"
          onClick={() => setContent(null)}
        >
          닫기
        </button>
      </PortalModalShell>
    </ModalContext.Provider>
  );
}
