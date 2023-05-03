import { EditableInput } from "src/components/Editable";
import { Menu } from "src/components/Menu";

interface IProps {
  taskTitle: string;
}

export const TaskHeader = ({ taskTitle }: IProps) => {
  return (
    <div className="flex items-center justify-between">
      <EditableInput
        defaultText={taskTitle}
        onSave={() => {
          return;
        }}
      />
      <Menu>
        <a>Remove Task</a>
      </Menu>
    </div>
  );
};
