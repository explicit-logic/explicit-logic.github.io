import type { Location } from "~/types/location";

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Appartement Monthly Rent Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      children: [
        {
          id: 1,
          name: "appartement.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Monthly Property Rental Application",
            "Guests submit detailed descriptions of their rental preferences and personal profiles.",
            "Hosts can view and respond to these applications, and the system matches compatible guests with available properties.",
            "Hosts must upload clear, up-to-date photos of their property. All images expire after 3 months or upon guest checkout to ensure relevance",
            "Both parties can request a video call. If either party accepts, they must suggest at least one available time slot."
          ],
        },
        {
          id: 2,
          name: "appartement.icu",
          icon: "/images/apps/appartement.png",
          kind: "file",
          fileType: "url",
          href: "https://appartement.icu",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "snippets.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "md",
          href: "/projects/appartement/snippets.md",
          position: "top-60 right-30",
        },
        {
          id: 4,
          name: "appartement.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          href: "/images/appartement.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "A tool to build quizzes - Light Pass",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 right-20",
      children: [
        {
          id: 1,
          name: "light-pass.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Open source tool for building quiz and tests websites.",
          ],
        },
        {
          id: 2,
          name: "Repository",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/explicit-logic/light-pass",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "DeepWiki",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "url",
          href: "https://deepwiki.com/explicit-logic/light-pass",
          position: "top-40 right-40",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Spot Serve",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      children: [
        {
          id: 1,
          name: "Spot Server.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A seamless solution for developers to share quick, interactive previews of their websites.",
          ],
        },
        {
          id: 2,
          name: "Repository",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/explicit-logic/spot-serve-gui",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Spot Serve",
          icon: "/images/apps/spot-serve.png",
          kind: "file",
          fileType: "url",
          href: "https://spot-serve.pages.dev/",
          position: "top-52 right-80",
        },
        {
          id: 4,
          name: "Demo",
          icon: "/images/youtube.png",
          kind: "file",
          fileType: "video",
          href: "https://youtube.com/shorts/i_3ejgZxLDg?si=3grIV7t3Z3SrTk_s",
          position: "top-10 left-60",
        },
        {
          id: 5,
          name: "DeepWiki",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "url",
          href: "https://deepwiki.com/explicit-logic/spot-serve-gui",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
     {
      id: 8,
      name: "Wallpapers",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 right-80",
      children: [
        {
          id: 1,
          name: "wallpapers.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Personal collection of photos from travel adopted for use as wallpaper on the phone.",
          ],
        },
        {
          id: 2,
          name: "Repository",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/explicit-logic/wallpapers",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Wallpapers",
          icon: "/images/apps/wallpapers.png",
          kind: "file",
          fileType: "wallpapers",
          href: "https://explicit-logic.github.io/wallpapers/",
          position: "top-52 right-80",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: Location = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      href: "/images/avatar.jpg",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-20 left-40",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/avatar.jpg",
      description: [
        "Hey! My name is Bohdan 👋, I'm a software engineer with a strong background in full-stack development.",
        "I love building practical solutions that make products work better for real users.",
        "I am comfortable jumping between technologies - Node.js, PHP, React, Rust and more - and enjoy finding clean, scalable ways to solve complex problems.",
        "My collaboration across a variety of teams and industries, gives me a wide perspective on how to build useful, reliable, and user-friendly applications.",
        "At my core, I enjoy learning, improving systems, and making tech feel smoother for everyone who uses it.",
        "Outside of tech, I enjoy traveling, discovering new places, and meeting interesting people along the way.",
        "I love exploring unfamiliar cultures, trying new experiences, and finding inspiration in the world around me.",
        "I also enjoy reading books, which helps me unwind, learn, and stay curious."
      ],
    },
    {
      id: 3,
      name: "project-docs.md",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "md",
      position: "top-50 left-10",
      href: "/files/project-docs.md",
    },
    {
      id: 4,
      name: "dev-notes.md",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "md",
      position: "top-50 right-20",
      href: "/files/dev-notes.md",
    },
  ],
};

const RESUME_LOCATION: Location = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION: Location = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "trash1.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-10",
    //   href: "/images/trash-1.png",
    // },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   href: "/images/trash-2.png",
    // },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
} as const;
