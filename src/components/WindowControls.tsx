import { Minus, X } from "lucide-react";
import { useWindowStore } from "~/store/window";

const MaximizeIcon = () => (
  <svg
    className="control-icon opacity-0 group-hover:opacity-100 transition-opacity rotate-90"
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
  >
    <polyline points="4,0 6,0 6,2" />
    <polyline points="2,6 0,6 0,4" />
  </svg>
);

export const WindowControls: React.FC<{ target: string }> = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" className="group">
      <div className="close" onClick={() => closeWindow(target)}>
        <X className="control-icon opacity-0 group-hover:opacity-100 transition-opacity" strokeLinecap="round" />
      </div>
      <div className="minimize">
        <Minus className="control-icon opacity-0 group-hover:opacity-100 transition-opacity" strokeLinecap="round" />
      </div>
      <div className="maximize">
        <MaximizeIcon />
      </div>
    </div>
  );
};
