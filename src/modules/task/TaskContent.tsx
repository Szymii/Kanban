import { EditableTextArea } from "src/components/Editable";

export const TaskContent = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <h2 className="font-semibold">Description</h2>
      <EditableTextArea defaultText={`Test`} />
    </div>
  );
};
