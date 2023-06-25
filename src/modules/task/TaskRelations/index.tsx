import { RelationForm } from "./RelationForm";
import { RelationList } from "./RelationList";

interface IProps {
  taskId: string;
}

export const TaskRelations = ({ taskId }: IProps) => {
  return (
    <div className="mt-8 py-4">
      <h2 className="mb-4 font-semibold">Relations</h2>
      <RelationForm taskId={taskId} />
      <RelationList relations={[]} />
    </div>
  );
};
