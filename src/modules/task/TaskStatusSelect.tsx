import type { Status } from "@prisma/client";
import RSelect, { type ActionMeta } from "react-select";

interface IProps {
  selectedStatusId?: string;
  disabled?: boolean;
  onChange: (
    option: { value: string; label: string } | null,
    actionMeta: ActionMeta<{ value: string; label: string }>,
  ) => void;
  statuses: Status[];
}

export const TaskStatusSelect = ({
  disabled,
  onChange,
  statuses,
  selectedStatusId,
}: IProps) => {
  const options = [
    { label: "Backlog", value: "EMPTY" },
    ...statuses.map((status) => ({
      value: status.id,
      label: status.name,
    })),
  ];

  const defaultOption = options.findIndex(
    (option) => option.value === selectedStatusId,
  );

  return (
    <div className="form-control">
      <RSelect
        options={options}
        isDisabled={disabled}
        onChange={onChange}
        defaultValue={selectedStatusId ? options[defaultOption] : options[0]}
      />
    </div>
  );
};
