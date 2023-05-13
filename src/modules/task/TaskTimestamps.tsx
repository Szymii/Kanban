interface IProps {
  createdAt: string;
  updatedAt: string;
}

export const TaskTimestamps = ({ createdAt, updatedAt }: IProps) => {
  return (
    <div className="mt-auto flex ">
      <div className="flex flex-col text-sm text-gray-400">
        <span>Created at {createdAt}</span>
        <span>Modified at {updatedAt}</span>
      </div>
    </div>
  );
};
