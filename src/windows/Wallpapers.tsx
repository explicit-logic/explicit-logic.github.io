import { useState } from "react";
import { Share, Copy, Check } from "lucide-react";
import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import { Modal } from "~/components/Modal";

const Wallpapers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://explicit-logic.github.io/wallpapers/";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <div id="window-header">
        <WindowControls target="wallpapers" />
        <p className="w-full text-center">Wallpapers</p>

        {/* Share Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          aria-label="Share"
          title="Share"
        >
          <Share className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        <iframe
          src="/wallpapers/index.html"
          title="Wallpapers"
          className="h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>

      {/* Share Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Share Wallpapers"
      >
        <div className="flex flex-col items-center gap-6">
          {/* QR Code */}
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
            title="Click to open wallpapers in new window"
          >
            <img
              src="/images/wallpapers-qr.png"
              alt="QR Code for wallpapers"
              className="w-48 h-48 object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Copy Link Section */}
          <div className="w-full space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Share Link
            </label>
            <div className="relative">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="w-full pl-3 pr-24 py-2.5 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleCopy}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-md transition-colors flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const WallpapersWindow = WindowWrapper(Wallpapers, "wallpapers");
