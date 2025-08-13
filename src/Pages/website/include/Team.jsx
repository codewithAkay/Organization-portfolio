import React from "react";

function Team() {
  const teamMembers = [
    
    {
      name: "Bilal Hussain",
      role: "CEO",
      image: "/assets/website/images/team/bkk.jpg",
    },
     {
      name: "Anas Iqbal",
      role: "CTO",
      image: "/assets/website/images/akkk.jpg",
    },
   
    {
      name: "Aleena Khan",
      role: "Project Manager",
      image: "/assets/website/images/team/gg.jpg",
    },
    {
      name: "Hasnat Iqbal",
      role: "Team Lead",
      image: "/assets/website/images/team/ava.jpg",
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
         <b> Meet Our <span style={{ color: "#ff4b4b" }}>Team</span>
       </b> </h3>
        <p
          style={{
            fontSize: "2rem",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 50px",
            lineHeight: "1.6",
          }}
        >
          Meet the dedicated professionals who make up our extensive legal
          network. They work together to ensure you have access to top-notch
          expertise.
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
                backgroundColor: "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "20px",
                width: "250px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "4px solid #ff4b4b",
                }}
              />
              <h4 style={{ fontSize: "2rem", margin: "5px 0", color: "#222" }}>
                {member.name}
              </h4>
              <h5 style={{ fontSize: "2rem", color: "#222", fontWeight: "1000" }}>
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
