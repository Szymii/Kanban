import {
  type ComponentProps,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Notification } from "src/components/Notification";

interface IToast extends ComponentProps<typeof Notification> {
  id: string;
}

const ToastContext = createContext<(toast: IToast) => void | undefined>(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  undefined!,
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [toasts.length]);

  const addToast = useCallback((toast: IToast) => {
    setToasts((toasts) => [
      ...toasts,
      {
        ...toast,
        id: toast.id + new Date().toString(),
      },
    ]);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      <>
        {children}
        {toasts.map((toast) => (
          <Notification
            type={toast.type}
            message={toast.message}
            key={toast.id}
          />
        ))}
      </>
    </ToastContext.Provider>
  );
};

export const useToastConsumer = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastConsumer must be used within a ToastContext");
  }

  return context;
};

export const withToasts = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <ToastContext.Provider
      value={() => {
        return;
      }}
    >
      <Story />
    </ToastContext.Provider>
  );
};
