interface IProps {
  type: "info" | "error" | "warning" | "success";
  message: string;
}

export const Notification = (props: IProps) => {
  const type = {
    info: "alert-info",
    error: "alert-error",
    warning: "alert-warning",
    success: "alert-success",
  };

  return (
    <div className="toast-start toast">
      <div className={`alert ${type[props.type]}`}>
        <span>{props.message}</span>
      </div>
    </div>
  );
};
