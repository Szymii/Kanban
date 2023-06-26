import { type RelationType, type Status } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useToastConsumer } from "src/containers/Toasts";
import { useParams } from "src/utils";
import { api } from "src/utils/api";

import { getOptionFromRelationType } from "./getOptionFromRelationType";

interface IRelationData {
  relationId: RelationType;
  taskNumber: string;
}

interface IProps {
  taskId: string;
  taskStatus: Status | null;
}

export const RelationForm = ({ taskId, taskStatus }: IProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IRelationData>();
  const { board } = useParams<{ board: string }>();
  const options = getOptionFromRelationType(taskStatus?.final);
  const showNotification = useToastConsumer();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.task.addRelation.useMutation({
    async onSettled() {
      await utils.task.getRelations.invalidate();
    },
  });

  const onSubmit = async (data: IRelationData) => {
    try {
      await mutateAsync({
        relatedTaskNumber: Number(data.taskNumber),
        slug: board,
        relation: data.relationId,
        taskId,
      });
      reset();
      showNotification({
        id: "relation-created-successfully",
        message: "Relation created successfully",
        type: "success",
      });
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "relation-creation-failed",
        message: message ?? "Relation creation failed",
        type: "error",
      });
    }
  };

  return (
    <form className="flex w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full rounded-md border">
        <select
          className="select w-full max-w-[180px] basis-1/2"
          {...register("relationId", { required: true })}
        >
          {options.map(({ label, value }) => (
            <option className="text-lg" value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <div className="divider divider-horizontal m-0" />
        <input
          type="text"
          placeholder="Task number"
          {...register("taskNumber", { required: true })}
          className={`input w-full basis-full ${
            errors["taskNumber"] ? "input-error" : ""
          }`}
        />
      </div>
      <button
        type="submit"
        className="btn-primary btn-active btn min-w-[65px]"
        disabled={isLoading}
      >
        Add
      </button>
    </form>
  );
};
