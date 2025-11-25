import { useState, type ReactNode } from "react";

type BasicModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};
/**
 * Local State로 관리하는 모달
 * 단순한 형태
 * 모달이 필요한 만큼 const [open, setOpen] = useState(false) + 모달 UI 패턴이 계속 반복되는 구조
 * 여러 모달을 한 번에 제어하기 불편함
 */
const BasicModal = ({ open, onClose, children, title }: BasicModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
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

export const LocalStateModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setOpen(true)}
      >
        모달 열기
      </button>
      <BasicModal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-semibold">Local State Modal</h2>
      </BasicModal>
    </div>
  );
};
