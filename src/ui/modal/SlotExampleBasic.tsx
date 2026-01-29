import { useState } from "react";
import { PurePresentationModal } from "./PurePresentationModal";

/**
 * PurePresentationModal을 사용한 모달 컴포넌트
 * children을 body slot으로 title은 header slot으로 사용
 * 모달은 레이아웃+오버레이/닫기만 책임
 * 본문 컨텐츠는 children 슬롯으로 주입
 */
export const SlotExampleBasic = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>열기</button>

      <PurePresentationModal open={open} onClose={close} title="알림">
        <p className="mt-2 text-sm text-gray-700">저장이 완료되었습니다.</p>
      </PurePresentationModal>
    </>
  );
};
