"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {

  const [isDark, setIsDark] = useState(false);

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

  return (
    <header>
      <div className="logo-holder">
        <img src="imgs/logo.jpg" alt="Logo" className="logo" />
        <div className="text-and-menu">
          <Link href="/" className="logo-text">
            Sebastian Wehlburg
          </Link>
          <nav>
            <ul id="menu">
              <li>
                <a href="#">Home</a>
              </li> 
              <li>
                <a href="#research">Research</a>
              </li> 
              <li>
                <a href="#project">Projects</a>
              </li> 
              <li>
                <a href="#teaching">Teaching</a>
              </li> 
              <li>
                <a href="#Blog">Blog</a>
              </li> 
            </ul>
          </nav>
        </div>
        <div className="dark-button">
          <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
            {isDark ? <FiSun size={32} /> : <FiMoon size={32} />}
          </button>
        </div>
      </div>
    </header>
  )
}