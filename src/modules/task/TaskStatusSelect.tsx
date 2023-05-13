import type { Status } from "@prisma/client";
import RSelect from "react-select";

interface IProps {
  selectedStatusId?: string;
  disabled?: boolean;
  onChange: () => void;
  statuses: Status[];
}

export const TaskStatusSelect = ({
  disabled,
  onChange,
  statuses,
  selectedStatusId,
}: IProps) => {
  const options = [
    { label: "Backlog", value: "" },
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
