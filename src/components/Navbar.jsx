import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">Agustia Eriani</div>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Tech Stack</a>
          </li>
          <li>
            <a href="#credentials">Credentials</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </button>
      </div>

      {/* Mobile Sheet */}
      <div
        className={`sheet ${open ? "open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <nav className="sheet-panel" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setOpen(false)}>
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#credentials" onClick={() => setOpen(false)}>
                Credentials
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => setOpen(false)}>
                Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
