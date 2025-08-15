import React from "react";
import { Helmet } from "react-helmet";

function Services({ title }) {
  const services = [
    { icon: "fa fa-code", title: "Web Development", desc: "We build modern, responsive, and high-performance websites using the latest technologies to help your business grow online." },
    { icon: "fa fa-mobile", title: "Mobile App Development", desc: "Designing and developing high-quality, user-friendly mobile applications for Android and iOS, tailored to your business needs." },
    { icon: "fa fa-pencil-ruler", title: "UI/UX Design", desc: "Crafting intuitive and visually appealing user interfaces with a seamless user experience, ensuring your product is both functional and engaging." },
    { icon: "fas fa-robot", title: "AI Models", desc: "Designing and deploying intelligent AI models that deliver accurate predictions, automate processes, and enhance decision-making with cutting-edge machine learning." },
    { icon: "fas fa-paint-brush", title: "Graphic Designing", desc: "Creating visually stunning designs that communicate your brand’s message, captivate your audience, and bring ideas to life through creative visuals." },
    { icon: "fas fa-film", title: "3D Animations & Video Editing", desc: "Producing high-quality 3D animations and expertly edited videos that bring stories to life, captivate audiences, and elevate your brand’s visual impact." },
    { icon: "fas fa-bullhorn", title: "Digital Marketing", desc: "Driving business growth through targeted digital marketing strategies, SEO, social media campaigns, and data-driven advertising to maximize your reach." },
    { icon: "fas fa-search", title: "SEO Optimization", desc: "Enhancing your online visibility through advanced SEO strategies, keyword research, and content optimization to drive organic traffic and boost search engine rankings." },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #fff, #f9f9f9)",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "50px",
            color: "#222",
          }}
        >
          Our <span style={{ color: "#ff4b4b" }}>Services</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "35px",
            padding: "0 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {services.map((srv, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "35px 25px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                transition: "all 0.35s ease",
                cursor: "pointer",
                border: "1px solid rgba(255, 75, 75, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.06)";
              }}
            >
              {/* Icon Circle */}
              <div
                style={{
                  background: "linear-gradient(135deg, #ff4b4b, #ff7676)",
                  color: "#fff",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  margin: "0 auto 18px",
                  boxShadow: "0 6px 15px rgba(255, 75, 75, 0.4)",
                }}
              >
                <i className={srv.icon}></i>
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  marginBottom: "12px",
                  color: "#222",
                }}
              >
                {srv.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
