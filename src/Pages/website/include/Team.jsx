import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "Bilal Hussain",
      role: "CEO",
      image: "/assets/website/images/team/bkk.jpg",
      bgColor: "linear-gradient(135deg, #ffe5e5, #ffffff)",
    },
    {
      name: "Anas Iqbal",
      role: "CTO",
      image: "/assets/website/images/akkk.jpg",
      bgColor: "linear-gradient(135deg, #e5f0ff, #ffffff)",
    },
    {
      name: "Aleena Khan",
      role: "Project Manager",
      image: "/assets/website/images/team/gg.jpg",
      bgColor: "linear-gradient(135deg, #e8ffe8, #ffffff)",
    },
    {
      name: "Hasnat Iqbal",
      role: "Team Lead",
      image: "/assets/website/images/team/ava.jpg",
      bgColor: "linear-gradient(135deg, #fff3e0, #ffffff)",
    },
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {/* Section Title */}
        <h3 style={{ fontSize: "2.5rem", color: "#222", marginBottom: "10px" }}>
          <b>
            Meet Our <span style={{ color: "#ff4b4b" }}>Team</span>
          </b>
        </h3>
        <p
  style={{
    fontSize: "1.4rem",   // 🔥 increased from 1.2rem
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.8",   // 🔥 more spacing between lines
  }}
>
  Meet the dedicated professionals who make up our extensive network. 
  They work together to ensure you have access to top-notch expertise.
</p>


        {/* Team Members */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                background: member.bgColor,
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "25px 20px",
                width: "260px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.1)";
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "130px",
                  height: "130px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  padding: "5px",
                  background:
                    "linear-gradient(135deg, #ff4b4b, #ff8a00, #ffd700)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "5px solid #fff", // white inside border
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Name */}
              <h4
                style={{
                  fontSize: "1.4rem",
                  margin: "8px 0",
                  color: "#222",
                  fontWeight: "600",
                }}
              >
                {member.name}
              </h4>
              {/* Role */}
              <h5
                style={{
                  fontSize: "1rem",
                  color: "#333",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                {member.role}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
