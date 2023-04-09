import Image from "next/image";

interface IProps {
  text: string;
  size?: number;
  action?: () => void;
}

export const Error = ({ size = 512, text, action }: IProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        priority
        src="Bug.svg"
        height={size}
        width={size}
        alt="Follow us on Twitter"
      />
      <h2 className="text-2xl">{text}</h2>
      {action && (
        <button className="btn-primary btn mt-4" onClick={action}>
          Button
        </button>
      )}
    </div>
  );
};
