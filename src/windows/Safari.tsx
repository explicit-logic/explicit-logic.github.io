import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import {
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  MoveRight,
  Search,
  Share,
  ShieldHalf,
  Plus,
  Copy,
} from "lucide-react";
import { posts } from "~/constants/posts";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>My Blog</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="col-span-4">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Check out of the full post{" "}
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const SafariWindow = WindowWrapper(Safari, "safari");
