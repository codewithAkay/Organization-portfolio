import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Team from "./include/Team"; // used in JSX, keep it

function Home() {
  const sliderImages = [
    "/assets/website/images/home-bg2.jpg",
    "/assets/website/images/ana.jpg",
    "/assets/website/images/ans.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]); // fixed ESLint warning

  // Show Back-to-Top button on scroll
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Slider Section */}
      <div className="home-slider" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {sliderImages.map((img, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 1,
            }}
          />
        ))}

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 2,
          }}
        />

        {/* Slider Text */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>Welcome to Software Network</h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "800px", color: "white" }}>
            We build innovative web, mobile, and AI solutions that drive success for your business.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: "12px 25px", fontSize: "1.2rem", marginTop: "20px" }}>
            Get Started
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="howitwrap" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/assets/website/images/software.WEBP" alt="About Us" />
            </div>
            <div className="col-md-8">
              <div className="stcontent">
                <div className="section-title">
                  <h3>
                    Welcome to <span>Software & Development Network</span>
                  </h3>
                  <p>
                    We connect you with skilled software professionals delivering innovative and efficient digital solutions.
                  </p>
                </div>
                <ul className="howlist">
                  <li>
                    <div className="howbox">
                      <div className="iconcircle"><i className="fa fa-code" /></div>
                      <h4>Custom Software Development</h4>
                      <p>Tailor-made software solutions to meet your business needs and drive efficiency.</p>
                    </div>
                  </li>
                  <li>
                    <div className="howbox">
                      <div className="iconcircle"><i className="fa fa-mobile" /></div>
                      <h4>Mobile App Solutions</h4>
                      <p>High-performance mobile apps for both Android and iOS platforms.</p>
                    </div>
                  </li>
                  <li>
                    <div className="howbox">
                      <div className="iconcircle"><i className="fa fa-lightbulb-o" /></div>
                      <h4>Innovative Digital Strategies</h4>
                      <p>Leverage cutting-edge technology to enhance your brand’s visibility.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="practicearea" style={{ padding: "80px 0", backgroundColor: "#f4f7fa" }}>
        <div className="container" style={{ textAlign: "center", marginBottom: "60px" }}>
          <h3 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#1a1a1a" }}>
            Our <span style={{ color: "#ff0800ff" }}>Services</span>
          </h3>
          <p style={{ color: "#555", fontSize: "2rem", maxWidth: "720px", margin: "0 auto" }}>
            We combine innovation, technology, and creativity to deliver high-end software solutions.
          </p>
        </div>

        <div className="row">
          {[
            { title: "Software Development", img: "/assets/website/images/software 22.jpeg", icon: "fa fa-code", desc: "Modern websites built with latest technologies." },
            { title: "Mobile App Development", img: "/assets/website/images/mobile.jpg", icon: "fa fa-mobile", desc: "Feature-rich mobile applications." },
            { title: "UI/UX Design", img: "/assets/website/images/design.jpg", icon: "fa fa-paint-brush", desc: "Beautiful, user-friendly designs." },
            { title: "AI Solutions", img: "/assets/website/images/ai.jpg", icon: "fa fa-brain", desc: "Intelligent AI models for automation." },
            { title: "Graphic Designing", img: "/assets/website/images/graphic.jpg", icon: "fa fa-pencil-ruler", desc: "Creative visuals and branding materials." },
            { title: "SEO Optimization", img: "/assets/website/images/seo 11.WEBP", icon: "fa fa-search", desc: "Boost your online presence with SEO." },
          ].map((service, index) => (
            <div className="col-md-4 col-sm-6" key={index} style={{ marginBottom: "80px" }}>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 25px rgba(0,0,0,0.1)", transition: "transform 0.4s ease, boxShadow 0.4s ease", backgroundColor: "#fff" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)"; }}
              >
                <div style={{ position: "relative", height: "250px" }}>
                  <img src={service.img} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", top: "15px", left: "15px", backgroundColor: "#ff4b4b", color: "#fff", padding: "12px", borderRadius: "50%", fontSize: "1.2rem", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <i className={service.icon}></i>
                  </div>
                </div>
                <div style={{ padding: "25px", textAlign: "center" }}>
                  <h4 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>{service.title}</h4>
                  <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: "1.6" }}>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team & Call-to-Action */}
        <Team />
        <div className="taglinewrap" style={{ padding: "60px 0", textAlign: "center" }}>
          <h2>Call Today for a Free Consultation</h2>
          <p>Get in touch with us today for a free consultation and let our experts help you with your next big project.</p>
          <Link to="/contact"><i className="fa fa-phone" /> Contact Us Now</Link>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "linear-gradient(45deg, #ff0800, #ff4b4b)",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            zIndex: 9999,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)"; }}
        >
          <i className="fa fa-arrow-up" style={{ fontSize: "1.5rem" }}></i>
        </div>
      )}
    </>
  );
}

export default Home;
