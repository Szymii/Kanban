import type { Status } from "@prisma/client";
import {
  SelectField,
  TextAreaField,
  TextField,
} from "src/components/FormFields";

import { useCategories } from "./useCategories";

interface IProps {
  statuses: Status[];
}

export const CreateTaskForm = (props: IProps) => {
  const categories = useCategories();
  const statuses = props.statuses.map((status) => ({
    label: status.name,
    value: status.name,
    selected: false,
  }));

  return (
    <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
      <TextField type="text" label="Task title" name="title" required />
      <TextAreaField label="Task description" name="description" />
      <SelectField label="Task category" name="type" options={categories} />
      <SelectField
        label="Task status"
        name="status"
        options={[
          {
            label: "Backlog",
            value: "",
            selected: true,
          },
          ...statuses,
        ]}
      />
    </form>
  );
};
