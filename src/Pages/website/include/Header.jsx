import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Navbar styles
  const navbarStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#111",
    color: theme === "light" ? "#333" : "#fff",
    padding: "18px 0",
    transition: "all 0.3s ease",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow:
      theme === "light"
        ? "0 2px 8px rgba(0,0,0,0.1)"
        : "0 2px 8px rgba(255,255,255,0.1)",
  };

  const linkStyle = {
    color: theme === "light" ? "#333" : "#fff",
    textDecoration: "none",
    padding: "12px 20px",
    fontSize: "1.3rem", // Increased link font size
    fontWeight: "500",
    borderRadius: "6px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const linkHover = {
    backgroundColor: theme === "light" ? "#f4f4f4" : "#333",
  };

  const activeLinkStyle = {
    backgroundColor: "#ff4b4b",
    color: "#fff",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "12px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: theme === "light" ? "#333" : "#f4f4f4",
    color: theme === "light" ? "#fff" : "#333",
    fontSize: "1.1rem", // Bigger button text
    transition: "all 0.3s ease",
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
        <h1 style={{ margin: 0, fontSize: "4.2rem" }}> {/* Larger logo text */}
          <b>
            <span style={{ color: "red" }}>&lt;&gt;</span> Codeova
          </b>
        </h1>

        {/* Navigation Links */}
        <ul
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
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "/Team", label: "Team" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  ...linkStyle,
                  ...(location.pathname === to ? activeLinkStyle : {}),
                }}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, linkHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, {
                    backgroundColor:
                      location.pathname === to ? "#ff4b4b" : "transparent",
                    color:
                      location.pathname === to
                        ? "#fff"
                        : theme === "light"
                        ? "#333"
                        : "#fff",
                  })
                }
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Phone */}
          <li style={{ marginLeft: "20px", fontSize: "1.2rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              📞 +923137747781
            </span>
          </li>

          {/* Dark/Light Mode Button */}
          
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
