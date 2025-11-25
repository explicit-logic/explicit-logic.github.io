import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import { useWindowStore } from "~/store/window";

interface ImageFileData {
  name: string;
  imageUrl: string;
}

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data as ImageFileData;

  if (!data) return null;

  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p className="w-full text-center">{data.name}</p>
      </div>

      <div className="preview flex-1 overflow-hidden">
        <img src={data.imageUrl} alt={data.name} />
      </div>
    </div>
  );
};

export const ImageWindow = WindowWrapper(Image, "imgfile");
