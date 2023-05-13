import { useForm } from "react-hook-form";

interface IRelationData {
  relationId: string;
  taskNumber: string;
}

export const RelationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRelationData>();

  const onSubmit = async (data: IRelationData) => {
    // console.log(data);
  };

  return (
    <form className="flex w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full rounded-md border">
        <select
          className="select w-full max-w-[180px] basis-1/2"
          {...register("relationId", { required: true })}
        >
          <option className="text-lg" value="123">
            Blocked By
          </option>
          <option className="text-lg" value="123">
            Relates To
          </option>
          {/* TODO */}
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
      <button className="btn-primary btn-active btn min-w-[65px]">Add</button>
    </form>
  );
};
