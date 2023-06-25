import Image from "next/image";

interface IProps {
  text: string;
  size?: number;
  action?: () => void;
  actionLabel?: string;
}

export const Error = ({ size = 512, text, action, actionLabel }: IProps) => {
  return (
    <div className="flex flex-col items-center pb-4">
      <Image
        priority
        src="/images/Bug.svg"
        height={size}
        width={size}
        alt="An error ocurred"
      />
      <h2 className="text-2xl">{text}</h2>
      {action && (
        <button className="btn-primary btn mt-4" onClick={action}>
          {actionLabel || "Retry"}
        </button>
      )}
    </div>
  );
};
