import { useEffect, useRef } from "react";

interface IProps {
  defaultText: string;
}

export const EditableTextArea = ({ defaultText }: IProps) => {
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const resizeTextarea = useResizeTextArea();

  useEffect(() => {
    if (!areaRef.current) {
      return;
    }

    if (areaRef.current.scrollHeight <= 159) {
      areaRef.current.style.height = `161px`;
      return;
    }

    areaRef.current.style.height = "0";
    areaRef.current.style.height = `${areaRef.current.scrollHeight + 5}px`;
  }, [areaRef]);

  return (
    <>
      <textarea
        className="textarea-bordered textarea w-full"
        rows={2}
        placeholder="Description"
        ref={areaRef}
        defaultValue={defaultText}
        onInput={() => {
          resizeTextarea(areaRef.current);
        }}
      />
      <div className="mt-2 flex gap-2">
        <button className="btn">Save</button>
        <button className="btn-ghost btn">Cancel</button>
      </div>
    </>
  );
};

const useResizeTextArea = () => {
  return (areaRef: HTMLTextAreaElement | null) => {
    if (!areaRef) {
      return;
    }

    if (areaRef.scrollHeight <= 159) {
      areaRef.style.height = `161px`;
      return;
    }

    areaRef.style.height = "0";
    areaRef.style.height = `${areaRef.scrollHeight + 5}px`;
  };
};
