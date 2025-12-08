import { WindowControls } from "~/components/WindowControls";

interface WindowHeaderProps {
  target: string;
  children?: React.ReactNode;
  className?: string;
}

export const WindowHeader = ({
  target,
  children,
  className = "",
}: WindowHeaderProps) => {
  return (
    <div className={`window-header ${className}`}>
      <WindowControls target={target} />
      {children}
    </div>
  );
};
