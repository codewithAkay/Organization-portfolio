import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Team from "./include/Team";

function Home() {
  const sliderImages = [
    "/assets/website/images/home-bg2.jpg",
    "/assets/website/images/ana.jpg",
    "/assets/website/images/ans.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Slider auto-change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Show back-to-top button
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Hero Slider */}
      <div
        className="home-slider"
        style={{
          position: "relative",
          height: "90vh",
          overflow: "hidden",
        }}
      >
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
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 2,
          }}
        />

        {/* Slider Content */}
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
            padding: "0 15px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              marginBottom: "20px",
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            Welcome to <span style={{ color: "#ff4b4b" }}>Code</span>
            <span style={{ color: "#fff" }}>Ova</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              maxWidth: "700px",
              lineHeight: "1.6",
              color: "#fff", // ✅ text forced to white
            }}
          >
            We build innovative web, mobile, and AI solutions that drive success
            for your business.
          </p>
          <Link
            to="/contact"
            style={{
              padding: "12px 28px",
              fontSize: "1.1rem",
              marginTop: "25px",
              background: "linear-gradient(45deg, #ff0800, #ff4b4b)",
              borderRadius: "50px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section id="about" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-5 col-sm-12 mb-4 text-center">
              <img
                src="/assets/website/images/software.WEBP"
                alt="About Us"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                }}
              />
            </div>

            {/* Text */}
            <div className="col-md-7 col-sm-12">
              <h3 style={{ fontSize: "3rem", marginBottom: "20px" }}>
                Welcome to{" "}
                <span style={{ color: "#ff4b4b" }}>
                  Software & Development Network
                </span>
              </h3>
              <p style={{ fontSize: "1.4rem", color: "#444" }}>
                We connect you with skilled software professionals delivering
                innovative and efficient digital solutions.
              </p>

              <div className="row mt-4">
                {[
                  {
                    icon: "fa fa-code",
                    title: "Custom Software Development",
                    desc: "Tailor-made solutions to meet your business needs.",
                  },
                  {
                    icon: "fa fa-mobile",
                    title: "Mobile App Solutions",
                    desc: "High-performance mobile apps for Android & iOS.",
                  },
                  {
                    icon: "fa fa-lightbulb-o",
                    title: "Innovative Digital Strategies",
                    desc: "Cutting-edge technology for brand growth.",
                  },
                ].map((item, idx) => (
                  <div className="col-md-12 mb-3" key={idx}>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        marginBottom: "20px", // ✅ added spacing between items
                      }}
                    >
                      <div
                        style={{
                          background: "linear-gradient(45deg, #ff0800, #ff4b4b)",
                          color: "#fff",
                          width: "55px",
                          height: "55px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.3rem",
                          flexShrink: 0,
                        }}
                      >
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h5 style={{ margin: 0 }}>{item.title}</h5>
                        <p style={{ margin: "5px 0", color: "#555" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ padding: "80px 0", background: "#f9fafc" }}
      >
        <div className="container text-center">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Our <span style={{ color: "#ff0800" }}>Services</span>
          </h2>
      <p
  style={{
    color: "#555",
    fontSize: "1.3rem",   // 🔥 bigger text
    lineHeight: "1.8",   // ✅ better spacing
    fontWeight: "700",   // slightly bolder
    marginBottom: "50px",
  }}
>
  We combine innovation, technology, and creativity to deliver
  high-end software solutions.
</p>


          <div className="row">
  {[
    {
      title: "Software Development",
      img: "/assets/website/images/software 22.jpeg",
      icon: "fa fa-code",
      desc: "Modern software solutions tailored to your needs.",
    },
    {
      title: "Mobile App Development",
      img: "/assets/website/images/mobile.jpg",
      icon: "fa fa-mobile",
      desc: "Feature-rich apps for Android and iOS.",
    },
    {
      title: "UI/UX Design",
      img: "/assets/website/images/design.jpg",
      icon: "fa fa-paint-brush",
      desc: "User-friendly, beautiful interfaces.",
    },
    {
      title: "AI Solutions",
      img: "/assets/website/images/ai.jpg",
      icon: "fa fa-brain",
      desc: "AI-driven automation and analytics.",
    },
    {
      title: "Graphic Designing",
      img: "/assets/website/images/graphic.jpg",
      icon: "fa fa-pencil-ruler",
      desc: "Creative visuals and branding.",
    },
    {
      title: "SEO Optimization",
      img: "/assets/website/images/seo 11.WEBP",
      icon: "fa fa-search",
      desc: "Boost online presence with SEO.",
    },
  ].map((service, idx) => (
    <div className="col-lg-4 col-md-6 mb-4" key={idx}>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          transition: "0.3s",
          height: "100%",
          margin: "10px", // ✅ Added gap around each card
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-8px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <div style={{ position: "relative", height: "190px" }}> 
          {/* ✅ Increased height slightly */}
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.4s",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "#ff4b4b",
              color: "#fff",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            <i className={service.icon}></i>
          </div>
        </div>
        <div style={{ padding: "22px" }}> 
          {/* ✅ Slightly more padding */}
          <h4
            style={{
              fontSize: "1.35rem", // ✅ Little bigger heading
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            {service.title}
          </h4>
          <p style={{ fontSize: "1.05rem", color: "#555" }}>
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section
        style={{
          padding: "70px 0",
          background: "linear-gradient(45deg, #fff, #fff)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#000", // ✅ black heading
          }}
        >
          Call Today for a Free Consultation
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "30px",
            color: "#000", // ✅ black text
          }}
        >
          Get in touch with us today for a free consultation and let our experts
          help you with your next big project.
        </p>
        <Link
          to="/contact"
          style={{
            background: "#fff",
            color: "#fff",
            backgroundColor: "#ff0800",
            padding: "12px 30px",
            fontSize: "1.1rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          <i className="fa fa-phone"></i> Contact Us Now
        </Link>
      </section>

      {/* Back to Top */}
      {showTopBtn && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "linear-gradient(45deg, #ff0800, #ff4b4b)",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            zIndex: 9999,
            transition: "0.3s",
          }}
        >
          <i className="fa fa-arrow-up" style={{ fontSize: "1.3rem" }}></i>
        </div>
      )}
    </>
  );
}

export default Home;
