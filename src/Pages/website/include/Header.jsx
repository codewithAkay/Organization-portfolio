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

  const topBarStyle = {
    backgroundColor: theme === "light" ? "#f4f4f4" : "#222",
    color: theme === "light" ? "#333" : "#fff",
    fontSize: "0.95rem",
    padding: "8px 0",
  };

  const navbarStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#111",
    color: theme === "light" ? "#333" : "#fff",
    padding: "20px 0",
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
    padding: "14px 20px",
    fontSize: "1.25rem",
    fontWeight: "600",
    borderRadius: "6px",
    display: "block",
  };

  const activeLinkStyle = {
    backgroundColor: "#ff4b4b",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "12px", fontSize: "1.1rem" }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram" style={{ color: "#ff4b4b" }}></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin" style={{ color: "#0077b5" }}></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook" style={{ color: "#3b5998" }}></i>
            </a>
          </div>

          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <i
              className="fa fa-envelope"
              style={{ color: "#ff4b4b", fontSize: "1rem" }}
            ></i>
            <span>info@bilal.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
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
          <h1
            style={{
              margin: 0,
              fontSize: "3rem",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            className="header-title"
          >
            <span style={{ color: "red" }}>&lt;&gt;</span> Codeova
          </h1>

          {/* Hamburger Icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "2.2rem",
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
              gap: "12px",
            }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
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
          </ul>
        </div>

        {/* Mobile & Tablet Styles */}
        <style>{`
          @media (max-width: 1024px) {
            .menu-toggle {
              display: block !important;
            }
            .nav-links {
              display: flex !important;
              flex-direction: column;
              background: ${theme === "light" ? "#fff" : "#111"};
              position: fixed;
              top: 0;
              left: -100%;
              height: 100%;
              width: 260px;
              padding: 20px;
              box-shadow: 2px 0 8px rgba(0,0,0,0.1);
              transition: left 0.3s ease;
              z-index: 2000;
            }
            .nav-links.open {
              left: 0;
            }
            .nav-links li {
              margin: 15px 0;
            }
            .header-title {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 600px) {
            .header-title {
              font-size: 2rem !important;
            }
            .nav-links a {
              font-size: 1.1rem !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Header;
