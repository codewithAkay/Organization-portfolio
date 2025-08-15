import React from "react";
import { Helmet } from "react-helmet";

function About({ title }) {
  return (
    <>
      <Helmet>
        <title>{title || "About Us"} - Codeova</title>
      </Helmet>

      {/* About Section */}
      <div
        style={{
          padding: "60px 20px",
          backgroundColor: "#ffffff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Left - Image */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/website/images/about-img.jpg"
              alt="About Us"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          {/* Right - Mission & Vision */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "2.5rem",
                color: "#ff4b4b",
                marginBottom: "15px",
              }}
            >
              <b>Our Mission</b>
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#555",
                marginBottom: "30px",
              }}
            >
              Our mission is to empower businesses through innovative software
              solutions that enhance efficiency, drive scalability, and optimize
              performance.
            </p>

            <h3
              style={{
                fontSize: "2.5rem",
                color: "#ff4b4b",
                marginBottom: "15px",
              }}
            >
              <b>Our Vision</b>
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#555",
              }}
            >
              Our vision is to become the premier creator of customized software
              solutions, enabling businesses to excel and adapt in an
              ever-evolving digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Software Development Section */}
      <div
        style={{
          padding: "60px 20px",
          backgroundColor: "#f9f9f9",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Left - Text */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "2.5rem",
                color: "#ff4b4b",
                marginBottom: "20px",
              }}
            >
              <b>Innovative Software Development</b>
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#555",
                marginBottom: "15px",
              }}
            >
              Beyond legal expertise, our team is deeply committed to delivering
              cutting-edge software solutions that empower businesses to operate
              smarter, faster, and more effectively.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#555",
                marginBottom: "15px",
              }}
            >
              We create experiences that resonate with users and drive
              real-world results, starting with a deep understanding of your
              goals, challenges, and vision.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#555",
                marginBottom: "15px",
              }}
            >
              Our process blends creativity with precision — from intuitive UI
              designs to secure, scalable backends. We embrace cloud solutions,
              AI integrations, and responsive design to future-proof your
              software.
            </p>
            <ul
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#555",
                marginTop: "10px",
                paddingLeft: "20px",
              }}
            >
              <li>Custom Web & Mobile Development</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Cloud & API Integrations</li>
              <li>Ongoing Support & Maintenance</li>
            </ul>
          </div>

          {/* Right - Image */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/website/images/software2.JPEG"
              alt="Software Development"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
