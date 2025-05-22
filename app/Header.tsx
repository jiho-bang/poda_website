"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const rawPath = usePathname();
  const pathname = rawPath?.replace(/\/$/, "") || "/";

  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode ? "true" : "false");
      return newMode;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setIsDark(true);
    }
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Research", path: "#research" },
    { label: "Projects", path: "#project" },
    { label: "Teaching", path: "#teaching" },
    { label: "Blog", path: "#blog" },
  ];

  return (
    <header>
      <div className="nav-buttons">
        <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
          {isDark ? <FiSun size={32} /> : <FiMoon size={32} />}
        </button>
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <svg className="w-6 h-6" style={{ color: 'var(--baseDark)' }} width="64" height="64" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
      </div>

      <div className="logo-holder">
        <img src="imgs/logo.jpg" alt="Logo" className="logo" />
        <div className="text-and-menu">
          <Link href="/" className="logo-text">
            Sebastian Wehlburg
          </Link>
          <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
              {navItems.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className={pathname === path ? "active-link" : ""}
                    onClick={() => setMenuOpen(false)} 
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}