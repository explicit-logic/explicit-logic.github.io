import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import { useWindowStore } from "~/store/window";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownFileData {
  name: string;
  href: string;
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Markdown = () => {
  const { windows } = useWindowStore();
  const data = windows.mdfile.data as MarkdownFileData;
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!data?.href) return;

    let isMounted = true;

    fetch(data.href)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to load markdown file: ${response.statusText}`
          );
        }
        return response.text();
      })
      .then((text) => {
        if (isMounted) {
          setContent(text);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [data?.href]);

  if (!data) return null;

  return (
    <div
      id="mdfile"
      className="flex h-full w-full flex-col bg-white text-black"
    >
      <div id="window-header">
        <WindowControls target="mdfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {loading && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Loading...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-full">
            <p className="text-red-500">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="markdown-content mx-auto max-w-4xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-3xl font-semibold mt-6 mb-4" {...props} />
                ),
                h2: ({ ...props }) => (
                  <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
                ),
                h4: ({ ...props }) => (
                  <h4 className="text-lg font-semibold mt-3 mb-2" {...props} />
                ),
                h5: ({ ...props }) => (
                  <h5
                    className="text-base font-semibold mt-2 mb-1"
                    {...props}
                  />
                ),
                h6: ({ ...props }) => (
                  <h6 className="text-sm font-semibold mt-2 mb-1" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="mb-4 leading-7" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul
                    className="list-disc list-inside mb-4 space-y-1"
                    {...props}
                  />
                ),
                ol: ({ ...props }) => (
                  <ol
                    className="list-decimal list-inside mb-4 space-y-1"
                    {...props}
                  />
                ),
                li: ({ ...props }) => <li className="ml-4" {...props} />,
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700"
                    {...props}
                  />
                ),
                code: ({
                  inline,
                  className,
                  children,
                  ...props
                }: CodeProps) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match ? match[1] : "";

                  return inline ? (
                    <code
                      className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-red-600"
                      {...props}
                    >
                      {children}
                    </code>
                  ) : (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={language || "text"}
                      PreTag="div"
                      className="my-4 rounded-lg overflow-hidden"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
                pre: ({ ...props }) => <pre {...props} />,
                a: ({ ...props }) => (
                  <a
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                img: ({ ...props }) => (
                  <img className="max-w-full h-auto rounded my-4" {...props} />
                ),
                table: ({ ...props }) => (
                  <div className="overflow-x-auto my-4">
                    <table
                      className="min-w-full border-collapse border border-gray-300"
                      {...props}
                    />
                  </div>
                ),
                thead: ({ ...props }) => (
                  <thead className="bg-gray-100" {...props} />
                ),
                th: ({ ...props }) => (
                  <th
                    className="border border-gray-300 px-4 py-2 text-left font-semibold"
                    {...props}
                  />
                ),
                td: ({ ...props }) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
                hr: ({ ...props }) => (
                  <hr className="my-6 border-gray-300" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export const MarkdownWindow = WindowWrapper(Markdown, "mdfile");
