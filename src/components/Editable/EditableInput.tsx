import EdiText from "react-editext";

interface IProps {
  defaultText: string;
  onSave: () => void;
}

export const EditableInput = ({ defaultText, onSave }: IProps) => {
  return (
    <EdiText
      value={defaultText}
      tabIndex={1}
      onSave={onSave}
      startEditingOnFocus
      className="min-h-16 flex w-full justify-center pr-4"
      editButtonClassName="hidden"
      viewContainerClassName="text-3xl font-semibold flex gap-4"
      saveButtonClassName="btn w-24 btn-primary"
      saveButtonContent="Save"
      cancelButtonClassName="btn w-24 btn-ghost ml-2"
      cancelButtonContent="Cancel"
      inputProps={{
        className: "input input-primary w-full text-3xl font-semibold",
      }}
    />
  );
};
