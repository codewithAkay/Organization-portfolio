import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const topBarStyle = {
    backgroundColor: theme === "light" ? "#f4f4f4" : "#222",
    color: theme === "light" ? "#333" : "#fff",
    fontSize: "1rem",
    padding: "10px 0",
  };

  const navbarStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#111",
    color: theme === "light" ? "#333" : "#fff",
    padding: "22px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow:
      theme === "light"
        ? "0 2px 8px rgba(0,0,0,0.06)"
        : "0 2px 8px rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: theme === "light" ? "#333" : "#fff",
    textDecoration: "none",
    padding: "12px 22px",
    fontSize: "1.25rem",
    fontWeight: "600",
    borderRadius: "6px",
    display: "block",
    transition: "all 0.3s ease",
  };

  const activeLinkStyle = {
    backgroundColor: "transparent",
    borderBottom: "3px solid #ff4b4b",
    fontWeight: "bold",
  };

  const hoverStyle = {
    transform: "scale(1.08)",
    color: "#ff4b4b",
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
          <div style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
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
          <Link
  to="/"
  style={{ textDecoration: "none", color: "inherit" }}
  onClick={() => setMenuOpen(false)}
>
  <img
    src="/assets/website/images/codeova.JPEG"
    alt="Logo"
    style={{
      height: "60px",   // adjust size as needed
      width: "auto",
      objectFit: "contain",
    }}
  />
</Link>


          {/* Hamburger Icon */}
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              fontSize: "2.4rem",
              cursor: "pointer",
              display: "none",
            }}
            className="menu-toggle"
          >
            {menuOpen ? "×" : "☰"}
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
              gap: "14px",
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
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, hoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, {
                      ...linkStyle,
                      ...(location.pathname === to ? activeLinkStyle : {}),
                    })
                  }
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
              z-index: 3001;
              position: relative;
            }
            .nav-links {
              flex-direction: column;
              background: rgba(173, 216, 230, 0.35);
              backdrop-filter: blur(18px) saturate(180%);
              -webkit-backdrop-filter: blur(18px) saturate(180%);
              position: fixed;
              top: 0;
              left: -100%;
              height: 100%;
              width: 280px;
              padding: 20px;
              box-shadow: 2px 0 15px rgba(0,0,0,0.2);
              transition: all 0.4s ease;
              z-index: 3000;
              border-right: 2px solid rgba(255, 255, 255, 0.25);
            }
            .nav-links.open {
              left: 0;
              animation: slideIn 0.4s ease forwards;
            }
            .nav-links li {
              margin: 18px 0;
              text-align: left;
            }
            .header-title {
              font-size: 2.4rem !important;
            }
            @keyframes slideIn {
              from { transform: translateX(-50px); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Header;
