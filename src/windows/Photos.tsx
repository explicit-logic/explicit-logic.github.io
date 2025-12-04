import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import { Mail, Search } from "lucide-react";
import { photosLinks, gallery } from "~/constants";
import { useWindowStore } from "~/store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <img src={link.icon} alt={link.title} />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map((img) => (
              <li
                key={img.id}
                onClick={() =>
                  openWindow("imgfile", {
                    id: img.id,
                    name: "Gallery image",
                    icon: "images/image.png",
                    kind: "file",
                    fileType: "image",
                    href: img.img,
                  })
                }
              >
                <img src={img.img} alt={`Gallery image ${img.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const PhotosWindow = WindowWrapper(Photos, "photos");
