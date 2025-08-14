import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const navbarStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#111",
    color: theme === "light" ? "#333" : "#fff",
    padding: "14px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow:
      theme === "light"
        ? "0 2px 8px rgba(0,0,0,0.1)"
        : "0 2px 8px rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: theme === "light" ? "#333" : "#fff",
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "6px",
    display: "block",
  };

  const activeLinkStyle = {
    backgroundColor: "#ff4b4b",
    color: "#fff",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: theme === "light" ? "#333" : "#f4f4f4",
    color: theme === "light" ? "#fff" : "#333",
    fontSize: "0.9rem",
  };

  return (
    <div style={navbarStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <h1 style={{ margin: 0, fontSize: "2rem", whiteSpace: "nowrap" }}>
          <b>
            <span style={{ color: "red" }}>&lt;&gt;</span> Codeova
          </b>
        </h1>

        {/* Hamburger Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "1.8rem",
            cursor: "pointer",
            display: "none",
          }}
          className="menu-toggle"
        >
          ☰
        </div>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
            gap: "10px",
          }}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "/team", label: "Team" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  ...linkStyle,
                  ...(location.pathname === to ? activeLinkStyle : {}),
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Phone */}
          <li style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
            📞 +923137747781
          </li>

          {/* Theme Toggle */}
          <li>
            <button style={buttonStyle} onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile & Tablet Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .menu-toggle {
            display: block !important;
          }
          .nav-links {
            display: none !important;
            flex-direction: column;
            background: ${theme === "light" ? "#fff" : "#111"};
            position: absolute;
            top: 60px;
            right: 0;
            width: 220px;
            padding: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .nav-links.open {
            display: flex !important;
          }
          .nav-links li {
            margin: 8px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
