

import { Link, useLocation } from "react-router-dom";

function Footer() {
  
  
  const location = useLocation();

  return (
    <>
      <div className="site-footer">
        {/* Footer Top start */}
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              {/* Logo + Description */}
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-lwf">
                  <h3 className="footer-logo">
                    <h1>
                      <b>
                        <span style={{ color: "red", fontWeight: "bold" }}>
                          &lt;&gt;
                        </span>{" "}
                        Codeova
                      </b>
                    </h1>
                  </h3>
                  <p>
                    Welcome to our legal network. We connect you with a wide
                    range of legal professionals who are ready to assist with
                    your specific needs. Experience dedicated support and
                    expert advice from our trusted network.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-lwf footer-menu">
                  <h3 className="footer-lwf-title">Quick Links</h3>
                  <ul>
                    <li
                      className={location.pathname === "/" ? "active" : ""}
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      className={location.pathname === "/about" ? "active" : ""}
                    >
                      <Link to="/about">About</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/services" ? "active" : ""
                      }
                    >
                      <Link to="/services">Services</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/contact" ? "active" : ""
                      }
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-lwf">
                  <h3 className="footer-lwf-title">Contact Info</h3>
                  <ul className="footer-contact">
                    <li>
                      <i className="fa fa-phone" /> +923137747781
                    </li>
                    <li>
                      <i className="fa fa-envelope" /> Anasiqbal0009@gmail.com
                    </li>
                  </ul>

                  {/* Social Media Icons */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "10px",
                      fontSize: "1.4rem",
                    }}
                  >
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-instagram"
                        style={{ color: "#E1306C" }}
                      ></i>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-facebook"
                        style={{ color: "#3b5998" }}
                      ></i>
                    </a>
                    <a
                      href="https://wa.me/923137747781"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-whatsapp"
                        style={{ color: "#25D366" }}
                      ></i>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-linkedin"
                        style={{ color: "#0077b5" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="footer-lwf">
                  <h3 className="footer-lwf-title">Opening Hours</h3>
                  <ul className="open-hours">
                    <li>
                      <span>Mon to Fri:</span>{" "}
                      <span className="text-right">09:30AM to 05:30PM</span>
                    </li>
                    <li>
                      <span>Sat:</span>{" "}
                      <span className="text-right">Closed</span>
                    </li>
                    <li>
                      <span>Sun:</span>{" "}
                      <span className="text-right">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            © Codeova 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
