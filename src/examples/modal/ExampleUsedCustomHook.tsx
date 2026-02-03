import { useModal } from "../../hooks/useModal";
import { PurePresentationModal } from "../../ui/modal/PurePresentationModal";

/**
 * useModal 커스텀 훅을 사용한 모달 컴포넌트
 */
export const ExampleUsedCustomHook = () => {
  const { open, onOpen, onClose } = useModal();

  return (
    <>
      <button onClick={onOpen}>열기</button>
      <PurePresentationModal open={open} onClose={onClose} title="알림">
        <p className="mt-2 text-sm text-gray-700">저장이 완료되었습니다.</p>
      </PurePresentationModal>
    </>
  );
};
