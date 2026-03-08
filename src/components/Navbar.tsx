const navLinks = ["Home", "About", "Tech Stack", "Credentials", "Project"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-background border-b border-border">
      <span className="text-lg font-semibold text-foreground">Agustia Eriani</span>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
