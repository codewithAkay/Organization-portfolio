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
  <div className="row align-items-center">
    <div className="col-md-4 col-sm-12 mb-3" style={{ textAlign: "center" }}>
      <img
        src="/assets/website/images/software.WEBP"
        alt="About Us"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "350px", // keeps image from being too big on large screens
        }}
      />
    </div>
    <div className="col-md-8 col-sm-12">
      <div className="stcontent">
        <div className="section-title">
          <h3 style={{ fontSize: "1.8rem" }}>
            Welcome to{" "}
            <span style={{ color: "#ff4b4b" }}>
              Software & Development Network
            </span>
          </h3>
          <p style={{ fontSize: "1rem" }}>
            We connect you with skilled software professionals delivering
            innovative and efficient digital solutions.
          </p>
        </div>
        <ul className="howlist" style={{ paddingLeft: 0 }}>
          <li style={{ listStyle: "none", marginBottom: "20px" }}>
            <div className="howbox">
              <div className="iconcircle" style={{ marginBottom: "10px" }}>
                <i className="fa fa-code" />
              </div>
              <h4 style={{ fontSize: "1.2rem" }}>Custom Software Development</h4>
              <p style={{ fontSize: "1.1rem" }}>
            Tailor-made solutions to meet your business needs and drive efficiency
              </p>
            </div>
          </li>
          <li style={{ listStyle: "none", marginBottom: "20px" }}>
            <div className="howbox">
              <div className="iconcircle" style={{ marginBottom: "10px" }}>
                <i className="fa fa-mobile" />
              </div>
              <h4 style={{ fontSize: "1.2rem" }}>Mobile App Solutions</h4>
              <p style={{ fontSize: "1.1rem" }}>
                High-performance mobile apps for both Android and iOS platforms.
              </p>
            </div>
          </li>
          <li style={{ listStyle: "none", marginBottom: "20px" }}>
            <div className="howbox">
              <div className="iconcircle" style={{ marginBottom: "10px" }}>
                <i className="fa fa-lightbulb-o" />
              </div>
              <h4 style={{ fontSize: "1.2rem" }}>
                Innovative Digital Strategies
              </h4>
              <p style={{ fontSize: "1rem" }}>
                Leverage cutting-edge technology to enhance your brand’s
                visibility.
              </p>
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
    <div className="col-md-4 col-sm-5 d-flex" key={index} style={{ marginBottom: "30px" }}>
      <div
        style={{
          position: "relative",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
          backgroundColor: "#fff",
          maxWidth: "360px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          height: "100%" // ensures equal height inside flex row
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
        }}
      >
        <div style={{ position: "relative", height: "180px" }}>
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#ff4b4b",
              color: "#fff",
              padding: "8px",
              borderRadius: "50%",
              fontSize: "1rem",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
            }}
          >
            <i className={service.icon}></i>
          </div>
        </div>
        <div style={{ padding: "15px", textAlign: "center", flexGrow: 1 }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "8px", color: "#1a1a1a" }}>
            {service.title}
          </h4>
          <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.4" }}>
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Team & Call-to-Action */}
        <Team />
        <div style={{ padding: "60px 0", textAlign: "center" }}>
          <Link to="/contact">
            <i className="fa fa-phone" /> Contact Us Now
          </Link>
          <h2>Call Today for a Free Consultation</h2>
          <p>
            Get in touch with us today for a free consultation and let our
            experts help you with your next big project.
          </p>
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
