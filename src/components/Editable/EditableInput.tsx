import EdiText from "react-editext";

interface IProps {
  defaultText: string;
  onSave: (value: string) => void;
}

export const EditableInput = ({ defaultText, onSave }: IProps) => {
  return (
    <EdiText
      value={defaultText}
      tabIndex={1}
      onSave={onSave}
      startEditingOnFocus
      className="min-h-16 flex w-full justify-center pr-4 "
      viewContainerClassName="text-xl md:text-3xl font-semibold flex gap-4"
      editButtonClassName="hidden"
      saveButtonClassName="btn md:w-24 btn-primary"
      saveButtonContent="Save"
      cancelButtonClassName="btn md:w-24 btn-ghost ml-2"
      cancelButtonContent="Cancel"
      inputProps={{
        className:
          "input input-primary w-full text-xl md:text-3xl font-semibold",
      }}
      viewProps={{
        className: "truncate text-ellipsis overflow-hidden",
      }}
    />
  );
};
