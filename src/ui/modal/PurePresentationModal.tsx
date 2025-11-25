import type { ReactNode } from "react";

type PurePresentationModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

/**
 * UI 렌더링만 담당하는 프레젠테이션용 모달
 * Modal UI는 순수한 UI이므로, 스타일 작업, 스토리죽 작성에 좋음
 * HOC 쪽에서 open, close 로직 재사용할 수 있음
 *
 */
export const PurePresentationModal = ({
  open,
  onClose,
  title,
  children,
}: PurePresentationModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {children}
        <button
          className="mt-4 rounded bg-gray-800 px-3 py-1 text-sm text-white"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};
