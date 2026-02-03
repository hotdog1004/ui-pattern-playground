import { useState } from "react";
import { ExampleUsedCustomHook } from "./ui/modal/ExampleUsedCustomHook";
import { LocalStateModal } from "./ui/modal/LocalStateModal";
import { ModalA } from "./ui/modal/ModalA";
import { SlotExampleBasic } from "./ui/modal/SlotExampleBasic";
import { FormTextField } from "./ui/textField/FormTextField";
import { TextField } from "./ui/textField/TextField";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 p-4">
      <TextField />
      <FormTextField label="Name" placeholder="Enter your name" />
      <LocalStateModal />
      <SlotExampleBasic />
      <ExampleUsedCustomHook />
      <button onClick={() => setOpen(true)}>Open Modal A</button>
      <ModalA open={open} onClose={() => setOpen(false)} title="Modal A">
        <p>Modal A Content</p>
      </ModalA>
    </div>
  );
}

export default App;
