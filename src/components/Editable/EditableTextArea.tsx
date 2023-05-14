import { useEffect, useRef, useState } from "react";

interface IProps {
  defaultText: string | null;
  action: (value: string) => void;
  isDisabled: boolean;
}

export const EditableTextArea = ({
  defaultText,
  action,
  isDisabled,
}: IProps) => {
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const resizeTextarea = useResizeTextArea();
  const [value, setValue] = useState<string | null>(defaultText);

  const showActionButtons = value !== defaultText;

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
        value={value ?? ""}
        onInput={() => {
          resizeTextarea(areaRef.current);
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={isDisabled}
      />
      <div className="min-h-12 mt-2 flex gap-2">
        {showActionButtons && (
          <>
            <button
              className="btn"
              onClick={() => {
                action(value ?? "");
              }}
              disabled={isDisabled}
            >
              Save
            </button>
            <button
              className="btn-ghost btn"
              onClick={() => {
                setValue(defaultText ?? "");
              }}
              disabled={isDisabled}
            >
              Cancel
            </button>
          </>
        )}
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
