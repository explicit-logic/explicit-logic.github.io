import { WindowHeader } from "~/components/WindowHeader";
import { useState } from "react";
import { Search } from "lucide-react";
import { WindowWrapper } from "~/hoc/WindowWrapper";
import { locations } from "~/constants/locations";
import { useLocationStore } from "~/store/location";
import type { Location, LocationChild } from "~/types/location";
import { useWindowStore } from "~/store/window";

export const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleNavigate = (location: Location | LocationChild) => {
    setActiveLocation(location);
    setSelectedItemId(null);
  };

  const openItem = (item: LocationChild) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return handleNavigate(item);
    if (["fig", "url"].includes(item?.fileType ?? "") && item?.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name: string, items: (Location | LocationChild)[]) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavigate(item)}
            className={item.id === activeLocation.id ? "active" : "not-active"}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <WindowHeader target="finder">
        <Search className="icon" />
      </WindowHeader>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content" onClick={() => setSelectedItemId(null)}>
          {activeLocation.children?.map((item) => (
            <li
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemId(item.id);
                openItem(item);
              }}
              className={`${item.position} ${
                item.id === selectedItemId ? "selected" : ""
              }`}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const FinderWindow = WindowWrapper(Finder, "finder");
