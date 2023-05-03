interface IProps {
  createdAt: string;
  updatedAt: string;
}

export const TaskTimestamps = ({ createdAt, updatedAt }: IProps) => {
  return (
    <div className="mt-auto flex justify-end">
      <div className="flex flex-col text-sm text-gray-400">
        <span>Created at {createdAt}</span>
        <span>Modified at {updatedAt}</span>
      </div>
    </div>
  );
};
<main className="min-h-screen ">
  <div>Test</div>
  <div>Test</div>
  <div>Test</div>
  <div>Data</div>
</main>;
