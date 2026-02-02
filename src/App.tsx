import { ExampleUsedCustomHook } from "./ui/modal/ExampleUsedCustomHook";
import { LocalStateModal } from "./ui/modal/LocalStateModal";
import { SlotExampleBasic } from "./ui/modal/SlotExampleBasic";
import { FormTextField } from "./ui/textField/FormTextField";
import { TextField } from "./ui/textField/TextField";

function App() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <TextField />
      <FormTextField label="Name" placeholder="Enter your name" />
      <LocalStateModal />
      <SlotExampleBasic />
      <ExampleUsedCustomHook />
    </div>
  );
}

export default App;
