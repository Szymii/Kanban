import { RelationForm } from "./RelationForm";
import { RelationList } from "./RelationList";

export const TaskRelations = () => {
  return (
    <div className="mt-8 py-4">
      <h2 className="mb-4 font-semibold">Relations</h2>
      <RelationForm />
      <RelationList relations={[]} />
    </div>
  );
};
