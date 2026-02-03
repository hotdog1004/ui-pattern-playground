import { useState } from "react";
import { LocalStateModal } from "../../examples/modal/LocalStateModal";
import { SlotExampleBasic } from "../../examples/modal/SlotExampleBasic";
import { ExampleUsedCustomHook } from "../../examples/modal/ExampleUsedCustomHook";
import { ModalA } from "../../examples/modal/ModalA";

const ModalPage = () => {
  const [open, setOpen] = useState(false);

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
        <button onClick={() => setOpen(true)}>Open Modal A</button>
        <ModalA open={open} onClose={() => setOpen(false)} title="Modal A">
          <p>Modal A Content</p>
        </ModalA>
      </section>
    </div>
  );
};

export default ModalPage;
