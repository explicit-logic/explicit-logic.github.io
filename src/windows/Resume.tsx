import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/bohdan_andrianov_resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/bohdan_andrianov_resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

export const ResumeWindow = WindowWrapper(Resume, "resume");
