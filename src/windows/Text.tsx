import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowHeader } from "~/components/WindowHeader";
import { useWindowStore } from "~/store/window";

interface TextFileData {
  name: string;
  subtitle?: string;
  image?: string;
  description?: string[];
}

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data as TextFileData;

  if (!data) return null;

  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <WindowHeader target="txtfile">
        <h2>{data.name}</h2>
      </WindowHeader>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="mx-auto max-w-2xl space-y-2">
          {data.image && (
            <img
              src={data.image}
              alt={data.name}
              className="h-auto w-full max-w-[200px] rounded"
            />
          )}

          <div className="space-y-2">
            {/* <h1 className="text-3xl font-bold tracking-tight">{data.name}</h1> */}
            {data.subtitle && (
              <p className="text-lg font-bold">{data.subtitle}</p>
            )}
          </div>

          {data.description && (
            <div className="space-y-2 text-gray-700">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const TextWindow = WindowWrapper(Text, "txtfile");
