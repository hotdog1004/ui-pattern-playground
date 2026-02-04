import { useState } from "react";
import { LocalStateModal } from "../../examples/modal/LocalStateModal";
import { SlotExampleBasic } from "../../examples/modal/SlotExampleBasic";
import { ExampleUsedCustomHook } from "../../examples/modal/ExampleUsedCustomHook";
import { ModalA, ModalB } from "../../examples/modal";

const ModalPage = () => {
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Modal 패턴</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">LocalStateModal</h2>
        <LocalStateModal />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Slot 예제</h2>
        <SlotExampleBasic />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Custom Hook 예제</h2>
        <ExampleUsedCustomHook />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">ModalA (Controlled)</h2>
        <button onClick={() => setModalAOpen(true)}>Open Modal A</button>
        <ModalA
          open={modalAOpen}
          onClose={() => setModalAOpen(false)}
          title="Modal A"
        >
          <p>Modal A Content</p>
        </ModalA>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">
          ModalB (Compound Component)
        </h2>
        <ModalB.Root open={modalBOpen} onOpenChange={setModalBOpen}>
          <ModalB.Trigger>Open Modal B</ModalB.Trigger>
          <ModalB.Content>
            <p>Modal B Content</p>
            <ModalB.Close>Close Modal B</ModalB.Close>
          </ModalB.Content>
        </ModalB.Root>
      </section>
    </div>
  );
};

export default ModalPage;
