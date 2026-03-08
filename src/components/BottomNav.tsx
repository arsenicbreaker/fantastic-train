import {
  Home,
  User,
  Github,
  FolderClosed,
  Instagram,
  Twitter,
} from "lucide-react";

const items = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: FolderClosed, label: "Projects", id: "project" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/agustiaeriani",
  },
  { icon: Twitter, label: "Twitter", href: "https://x.com/0xoceanfluxx" },
  { icon: Github, label: "Github", href: "https://github.com/arsenicbreaker" },
];

const BottomNav = () => {
  const handleClick = (item: (typeof items)[0]) => {
    if (item.href) {
      window.open(item.href, "_blank");
    } else if (item.id) {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2 rounded-full border border-border bg-background/80 backdrop-blur-md shadow-lg">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => handleClick(item)}
          className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label={item.label}
        >
          <item.icon className="w-5 h-5" />
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
